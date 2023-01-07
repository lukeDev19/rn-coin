export const getCoinIcon = coinName => {
  return `https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/${coinName.toLowerCase()}.png`;
};

export const convertChartData = data => {
  const res = data
    .map((item, index) => {
      if (index % (data.length > 1000 ? 100 : 10) === 0)
        return {value: parseFloat(item.price) || 0, timestamp: item.timestamp * 1000};
      return null;
    })
    .filter(item => !!item);
  return res;
};
