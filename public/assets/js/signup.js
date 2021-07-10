

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
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
