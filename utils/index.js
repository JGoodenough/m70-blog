const dayjs = require('dayjs');

const formatDate = (dateTime, format = 'YYYY/MM/DD') => {
  return dayjs(dateTime).format(format);
};

const getNavItemByKey = (nav, key) => {
  return nav.find(item => item.key === key);
}

module.exports = {
  formatDate,
  getNavItemByKey,
}