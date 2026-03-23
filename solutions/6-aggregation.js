// BEGIN
const calculateSum = (massiv) => {
    if (massiv.length != 0){
        let otwet = 0;
        for (let i = 0; i < massiv.length; i++){
            if (massiv[i] % 3 === 0){
                otwet += massiv[i];
            }
        }
        return otwet;
    }
    return 0;
}

export { calculateSum };
// END