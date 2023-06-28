module.exports = {
  format_date: (date) => {
    return new Date(date).toLocaleDateString();
  },
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },
};