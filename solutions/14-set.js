// BEGIN
const countUniqChars = (stroka) => {
    let otw = '';
    for (let i = 0; i < stroka.length; i++){
        if (!otw.includes(stroka[i])){
            otw += stroka[i];
        }
    }
    return otw.length;
}

export default countUniqChars;
// END