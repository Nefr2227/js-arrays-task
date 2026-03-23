// BEGIN
const calculateAverage = (massiv) => {
    if (massiv.length != 0){
        let otwet = 0;
        for (let i = 0; i < massiv.length; i++){
            otwet += massiv[i];
        }
        return otwet / massiv.length;
    }
    return null;
}

export default calculateAverage;
// END