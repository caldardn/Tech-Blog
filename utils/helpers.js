module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
  format_date: (date) => {
    let month = date.getMonth();
    const day = date.getDate();
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  };