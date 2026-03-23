// BEGIN
const getMax = (massive) => {
    if (massive.length !== 0){
        let otw = massive[0];
        for (let i = 0; i < massive.length; i++){
            if(otw < massive[i]){
                otw = massive[i];
            }
        }
        return otw;
    }
    return null;
}

export {getMax};
// END