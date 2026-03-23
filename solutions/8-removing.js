// BEGIN
const getSameParity = (massiv) => {
    if (massiv.length != 0){
        let otwet = [massiv[0]];
        for (let i = 1; i < massiv.length; i++){
            if (massiv[0] % 2 == massiv[i] % 2 || massiv[0] % 2 == (massiv[i] % 2) * -1){
                otwet.push(massiv[i]);
            }
        }
        return otwet;
    }
    return [];
}

export default getSameParity;
// END