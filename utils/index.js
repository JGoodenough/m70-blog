const dayjs = require('dayjs');

const formatDate = (dateTime, format = 'YYYY/MM/DD') => {
  return dayjs(dateTime).format(format);
};

module.exports = {
  formatDate,
}