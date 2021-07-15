module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_id: (id) => {
    const rand = Math.floor(Math.random() * 500) + 1;
    return id + rand + 100;
  },
  format_left: (id) => {
    const rand = Math.floor(Math.random() * 1500) + 1;
    return id + rand;
  },
};