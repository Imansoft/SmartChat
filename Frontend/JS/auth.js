document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "mooblings@gmail.com" && password === "1@Mooblings@1") {
      // Redirect to admin.html
      window.location.href = "admin.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});