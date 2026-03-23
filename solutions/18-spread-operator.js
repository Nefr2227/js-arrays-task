// BEGIN
const flatten = (massiv) => {
    const result = [];
    
    for (let i = 0; i < massiv.length; i++) {
        if (Array.isArray(massiv[i])) {
            // Если элемент - массив, добавляем его элементы через spread
            result.push(...massiv[i]);
        } else {
            // Если не массив, добавляем как есть
            result.push(massiv[i]);
        }
    }
    
    return result;
};

export { flatten };
// END