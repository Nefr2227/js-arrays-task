const _ = require("lodash"); 

// BEGIN
const getSameCount = (massiv1, massiv2) => {
    const massive1 = [];
    const massive2 = [];
    
    for (let i = 0; i < massiv1.length; i++) {
        if (!massive1.includes(massiv1[i])) {
            massive1.push(massiv1[i]);
        }
    }
    
    for (let i = 0; i < massiv2.length; i++) {
        if (!massive2.includes(massiv2[i])) {
            massive2.push(massiv2[i]);
        }
    }
    
    let otwet_kolvo = 0;
    for (let i = 0; i < massive1.length; i++) {
        for (let j = 0; j < massive2.length; j++) {
            if (massive1[i] === massive2[j]) {
                otwet_kolvo++;
            }
        }
    }
    
    return otwet_kolvo;
}

export default getSameCount;
// END