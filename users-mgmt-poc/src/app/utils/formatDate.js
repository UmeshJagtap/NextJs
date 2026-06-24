const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${day} ${months[month - 1]} ${year}`;
};

export default formatDate;
