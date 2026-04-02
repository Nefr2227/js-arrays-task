// BEGIN
const flatten = (massiv) => {
    const result = [];
    
    for (let i = 0; i < massiv.length; i++) {
        if (Array.isArray(massiv[i])) {
            result.push(...massiv[i]);
        } else {
            result.push(massiv[i]);
        }
    }
    
    return result;
};

export { flatten };
// END