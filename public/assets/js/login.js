const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/users", {
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
  console.log('helllo');
  const user_name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const celestial_type = document.querySelector("#celestialtype-signup").value.trim();
  const temperature = document.querySelector("#temp-signup").value.trim();
  const gravity_pull = document.querySelector("#gravity-signup").value.trim();
  const primary_elements = document.querySelector("#elements-signup").value.trim();
  const light_energy = document.querySelector("#light-signup").value.trim();
  const fav_quote = document.querySelector("#quote-signup").value.trim();

  if (user_name && email && password && celestial_type && temperature && gravity_pull && primary_elements && light_energy && fav_quote) {
    console.log('omg');
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password, celestial_type, temperature, gravity_pull, primary_elements, light_energy, fav_quote }),
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
