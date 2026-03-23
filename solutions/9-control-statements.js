// BEGIN
const getTotalAmount = (massiv, valuta) => {
    let otwet = 0;
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i].slice(0, 3) === valuta) {
            otwet += Number(massiv[i].slice(4));
        }
    }
    return otwet;
};

export default getTotalAmount;
// END