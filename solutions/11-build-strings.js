// BEGIN
const buildDefinitionList = (definitions) => {
    if (definitions.length === 0) {
        return '';
    }
    
    let result = '<dl>';
    
    for (let i = 0; i < definitions.length; i++) {
        const term = definitions[i][0];
        const description = definitions[i][1];
        result += `<dt>${term}</dt><dd>${description}</dd>`;
    }
    
    result += '</dl>';
    return result;
};

export default buildDefinitionList;
// END