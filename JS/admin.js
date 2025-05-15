document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar li");
  const mainContent = document.querySelector(".main-content");

  // Set active effect for the sidebar menu
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      sidebarItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      if (item.textContent.trim() === "Dashboard") {
        mainContent.innerHTML = `
          <h1>Welcome, Mooblings Chicken</h1>
          <p>License Status: ✅ ACTIVE (Expires in 12 days)</p>
          <p>Total Leads: 23</p>
          <p>Total Conversations: 115</p>
        `;
      } else if (item.textContent.trim() === "FAQs") {
        mainContent.innerHTML = `
          <h1>FAQs</h1>
          <div class="faq-form">
            <div class="faq-entry">
              <label>Question:</label>
              <input type="text" class="faq-question" placeholder="Enter your question here">

              <label>Answer:</label>
              <input type="text" class="faq-answer" placeholder="Enter the answer here">
            </div>
            <button class="add-faq">Add FAQ</button>
            <button class="save-faqs">Save All FAQs</button>
          </div>
          <div class="existing-faqs">
            <h2>Existing FAQs:</h2>
            <div class="faq-list"></div>
          </div>
        `;

        const addFaqButton = document.querySelector(".add-faq");
        const saveFaqsButton = document.querySelector(".save-faqs");
        const faqForm = document.querySelector(".faq-form");
        const faqList = document.querySelector(".faq-list");

        addFaqButton.addEventListener("click", () => {
          const newFaqEntry = document.createElement("div");
          newFaqEntry.className = "faq-entry";
          newFaqEntry.innerHTML = `
            <label>Question:</label>
            <input type="text" class="faq-question" placeholder="Enter your question here">

            <label>Answer:</label>
            <input type="text" class="faq-answer" placeholder="Enter the answer here">
          `;
          faqForm.insertBefore(newFaqEntry, addFaqButton);
        });

        saveFaqsButton.addEventListener("click", async () => {
          const faqEntries = document.querySelectorAll(".faq-entry");
          const faqs = Array.from(faqEntries)
            .map(entry => ({
              question: entry.querySelector(".faq-question").value.trim(),
              answer: entry.querySelector(".faq-answer").value.trim()
            }))
            .filter(faq => faq.question && faq.answer); // Only include filled forms

          // Save to JSON file
          await fetch("Frontend/Data/FAQ.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(faqs)
          });

          // Display in Existing FAQs section
          faqList.innerHTML = "";
          faqs.forEach((faq, index) => {
            const faqItem = document.createElement("div");
            faqItem.className = "faq-item";
            faqItem.innerHTML = `
              <p><strong>Q:</strong> ${faq.question}</p>
              <p><strong>A:</strong> ${faq.answer}</p>
              <button class="delete-faq" data-index="${index}">🗑 Delete</button>
            `;
            faqList.appendChild(faqItem);
          });

          // Add delete functionality
          document.querySelectorAll(".delete-faq").forEach(button => {
            button.addEventListener("click", () => {
              const index = button.getAttribute("data-index");
              faqs.splice(index, 1);
              faqList.removeChild(button.parentElement);
            });
          });

          // Clear all duplicate FAQ forms and reset the single form
          faqEntries.forEach((entry, index) => {
            if (index > 0) entry.remove();
          });
          const firstFaqEntry = document.querySelector(".faq-entry");
          firstFaqEntry.querySelector(".faq-question").value = "";
          firstFaqEntry.querySelector(".faq-answer").value = "";
        });
      } else if (item.textContent.trim() === "Leads") {
        mainContent.innerHTML = `
          <h1>Leads Captured</h1>
          <table class="leads-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>📥</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>James</td>
                <td>j@x.com</td>
                <td>I want pricing info.</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Amina</td>
                <td>a@z.com</td>
                <td>Do you have a branch in PH?</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button>Export Leads CSV</button>
        `;
      } else if (item.textContent.trim() === "Conversations") {
        mainContent.innerHTML = `
          <h1>Chat History</h1>
          <div class="chat-history">
            <div class="chat-item">
              <p><strong>User:</strong> Chinedu | <strong>Time:</strong> 2024-05-08 14:23</p>
              <div class="chat-messages">
                <p><strong>U:</strong> Hello, what’s your return policy?</p>
                <p><strong>B:</strong> Our return policy allows returns within 7 days.</p>
                <p><strong>U:</strong> Can I get a price list?</p>
                <p><strong>B:</strong> Sure! Here's the list: [....]</p>
              </div>
            </div>
          </div>
          <div class="chat-filters">
            <button>Search by user/email</button>
            <button>Filter by date</button>
          </div>
        `;
      } else if (item.textContent.trim() === "Settings") {
        mainContent.innerHTML = `
          <h1>Settings</h1>
          <div class="settings-form">
            <label>Upload Logo:</label>
            <input type="file" accept="image/*">

            <label>Company Name:</label>
            <input type="text" placeholder="Enter company name">

            <label>Theme Color:</label>
            <input type="color">
            <button>Preview Color</button>

            <button>Save Settings</button>
          </div>
        `;
      }
    });
  });

  // Set default active item to Dashboard
  sidebarItems[0].classList.add("active");
  mainContent.innerHTML = `
    <h1>Welcome, Mooblings Chicken</h1>
    <p>License Status: ✅ ACTIVE (Expires in 12 days)</p>
    <p>Total Leads: 23</p>
    <p>Total Conversations: 115</p>
  `;
});