// BEGIN
const getSuperSeriesWinner = (massiv) =>{
    let winUSSR = 0;
    let winCanada = 0;
    for (let i = 0; i < massiv.length; i++){
        if (massiv[i][0] > massiv[i][1]){
            winCanada += 1;
        }
        else if (massiv[i][0] < massiv[i][1]){
            winUSSR += 1;
        }
    }
    if (winCanada > winUSSR){
        return 'canada';
    }
    else if (winUSSR > winCanada){
        return 'ussr';
    }
    return null;
}

export default getSuperSeriesWinner;
// END