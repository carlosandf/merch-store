const handleSumTotal = (list) => {
  const sum = list.reduce((acum, item) => {
    return acum + item.price
  }, 0);

  return sum;
}
export default handleSumTotal;