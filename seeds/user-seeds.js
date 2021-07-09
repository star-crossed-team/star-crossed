const User = require("../models/User");

const userData = [
  {
    user_name: "Carl",
    celestial_type: "Black Hole",
    temperature: 10000,
    gravity_pull: 50000000,
    primary_elements: "All that is holy",
    light_energy: -2000000000,
    fav_quote: "Quotes around the keys.",
    email: "blackholecarl@aol.com",
    password: "12345678",
  },
  {
    user_name: "Bella",
    celestial_type: "Nebula",
    temperature: 40000,
    gravity_pull: 2000000,
    primary_elements: "Star Babies",
    light_energy: 40000000,
    fav_quote: "We're all made of starstuff.",
    email: "nebubella@aol.com",
    password: "12345678",
  },
  {
    user_name: "E-4397",
    celestial_type: "Satellite",
    temperature: -65,
    gravity_pull: 0,
    primary_elements: "Metal",
    light_energy: 0,
    fav_quote: "Just a lil piece of space trash.",
    email: "spacetrash@aol.com",
    password: "12345678",
  },
  {
    user_name: "Andy",
    celestial_type: "Andromeda Galaxy",
    temperature: 30000,
    gravity_pull: 900000000000,
    primary_elements: "Planets and Stars",
    light_energy: 490023234224,
    fav_quote: "What's an alien's pet called? An Extra-Furestrial.",
    email: "andygal@aol.com",
    password: "12345678",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
