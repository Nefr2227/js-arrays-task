// BEGIN
const reverse = (massiv) => {
    const length = massiv.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = massiv[i];
        massiv[i] = massiv[length - 1 - i];
        massiv[length - 1 - i] = temp;
    }
}

export { reverse }; 
// END