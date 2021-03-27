const getElement = (element) => {
  return element.hasOwnProperty("current")
    ? element.current
    : element;
};

export default getElement;