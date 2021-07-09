const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const celestialType = document.querySelector("#celestialtype-signup").value.trim();
  const temperature = document.querySelector("#temp-signup").value.trim();
  const gravity = document.querySelector("#gravity-signup").value.trim();
  const elements = document.querySelector("#elements-signup").value.trim();
  const light = document.querySelector("#light-signup").value.trim();
  const quote = document.querySelector("#quote-signup").value.trim();
  const photo = document.querySelector("#photo-signup").value.trim();

  if (name && email && password && celestialType && temperature && gravity && elements && light && quote && photo) {
    const response = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password, celestialType, temperature, gravity, elements, light, quote, photo }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
