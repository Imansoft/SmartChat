document.addEventListener("DOMContentLoaded", () => {
  const chatContainer = document.querySelector(".chat-container");
  const inputField = document.querySelector(".input-container textarea");
  const sendButton = document.querySelector(".send-button");
  const micButton = document.querySelector(".mic-button");
  const inputContainer = document.querySelector(".input-container");

  let isRecording = false;
  let mediaRecorder;
  let audioChunks = [];
  let recordingTimer;
  let recordingStartTime;

  // Load chat history from local storage
  const loadChatHistory = () => {
    const history = JSON.parse(localStorage.getItem("chatHistory")) || [];
    history.forEach(({ sender, message, audio }) => {
      if (audio) {
        addAudioToChat(sender, audio);
      } else {
        addMessageToChat(sender, message);
      }
    });
  };

  // Save chat history to local storage
  const saveChatHistory = () => {
    const messages = Array.from(chatContainer.children).map((bubble) => {
      if (bubble.querySelector("audio")) {
        return {
          sender: bubble.classList.contains("user-message") ? "user" : "bot",
          audio: bubble.querySelector("audio").src,
        };
      } else {
        return {
          sender: bubble.classList.contains("user-message") ? "user" : "bot",
          message: bubble.textContent,
        };
      }
    });
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  };

  // Add message to chat
  const addMessageToChat = (sender, message) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}-message`;
    bubble.textContent = message;
    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    saveChatHistory();
  };

  // Add audio to chat
  const addAudioToChat = (sender, audioSrc) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}-message`;
    const audioWrapper = document.createElement("div");
    audioWrapper.className = "audio-wrapper";

    const playButton = document.createElement("button");
    playButton.className = "play-button";
    playButton.textContent = "▶";

    const audio = document.createElement("audio");
    audio.src = audioSrc;

    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸";
      } else {
        audio.pause();
        playButton.textContent = "▶";
      }
    });

    audio.addEventListener("ended", () => {
      playButton.textContent = "▶";
    });

    audioWrapper.appendChild(playButton);
    bubble.appendChild(audioWrapper);
    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    saveChatHistory();
  };

  // Handle send button click
  sendButton.addEventListener("click", () => {
    const message = inputField.value.trim();
    if (message) {
      addMessageToChat("user", message);
      inputField.value = "";

      // Simulate bot response with typing animation
      const botResponses = ["ok", "understood"];
      const botMessage = botResponses[Math.floor(Math.random() * botResponses.length)];

      const typingBubble = document.createElement("div");
      typingBubble.className = "chat-bubble bot-message typing";
      typingBubble.textContent = "Bot is typing...";
      chatContainer.appendChild(typingBubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      setTimeout(() => {
        chatContainer.removeChild(typingBubble);
        addMessageToChat("bot", botMessage);
      }, 3000);
    }
  });

  // Handle mic button click
  micButton.addEventListener("click", async () => {
    if (!isRecording) {
      // Start recording
      isRecording = true;
      micButton.innerHTML = '<img src="Images/Icons/mic-icon.png" alt="Mic Icon">';
      inputContainer.querySelector("textarea").style.display = "none";
      sendButton.style.display = "none";

      const recordingAnimation = document.createElement("div");
      recordingAnimation.className = "recording-animation";
      recordingAnimation.innerHTML = `<div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='timer'>0:00</div>`;
      inputContainer.appendChild(recordingAnimation);

      recordingStartTime = Date.now();
      recordingTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - recordingStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        recordingAnimation.querySelector(".timer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      }, 1000);

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          clearInterval(recordingTimer);
          inputContainer.removeChild(recordingAnimation);
          inputContainer.querySelector("textarea").style.display = "block";
          sendButton.style.display = "block";
          micButton.innerHTML = '<img src="Images/Icons/mic-icon.png" alt="Mic Icon">';

          const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
          audioChunks = [];

          // Save audio to local storage
          const reader = new FileReader();
          reader.onload = () => {
            const audioData = reader.result;
            localStorage.setItem("lastAudio", audioData);
            addAudioToChat("user", audioData);
          };
          reader.readAsDataURL(audioBlob);
        };

        mediaRecorder.start();
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    } else {
      // Stop recording
      isRecording = false;
      mediaRecorder.stop();
    }
  });

  // Allow multiline input
  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendButton.click();
    }
  });

  // Load chat history on page load
  loadChatHistory();
});