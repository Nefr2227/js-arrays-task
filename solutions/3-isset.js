// BEGIN
const get = (city, index, znach = null) => {
  // Проверяем, существует ли элемент по указанному индексу
  if (index >= 0 && index < city.length) {
    return city[index];
  }
  return znach;
};

export { get };
// END