module.exports = (datetime) => {
  let date = new Date(datetime).toLocaleDateString();
  let eightAM = new Date(date + ' 08:00:00');
  let eightPM = new Date(date + ' 20:00:00');
  return new Date(datetime) >= eightAM && new Date(datetime) <= eightPM;
};
