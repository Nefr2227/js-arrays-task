// BEGIN
export function swap(massiv){
    if (massiv.length >= 2){
        let pystoi = massiv.at(-1);
        massiv[massiv.length - 1] = massiv[0];
        massiv[0] = pystoi;
    }
    return massiv;
}
// END