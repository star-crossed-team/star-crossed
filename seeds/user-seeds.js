const { User } = require("./../models/User");

const userData = [
  {
    user_name: "Carl",
    celestial_type: "Black Hole",
    temperature: 10000,
    gravity_pull: 50000000,
    primary_elements: "I'll take what I can get.",
    light_energy: -2000000000,
    fav_quote: "Quotes around the keys.",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
