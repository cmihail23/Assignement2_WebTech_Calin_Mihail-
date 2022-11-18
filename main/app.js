function addTokens(input, tokens) {
    if (typeof input != "string") {
        throw new Error('Invalid input');
    }
    if (input.length < 6) {
        throw new Error('Input should have at least 6 characters')
    }
        
    if (tokens==null) {
        throw new Error('Invalid array format')
    }
    if(typeof tokens[0]['tokenName'] != "string"){
        throw new Error('Invalid array format')
    }

    if (input.includes('...')) {
        let i=0;
        while (input.includes('...')) {
            let val = tokens[i];
            let valoare = val['tokenName'];
            let nuEBunTestul = '${'+valoare+'}';
            input = input.replace("...",nuEBunTestul)
            i++;
        }
    }

    return input;
}

const app = {
    addTokens: addTokens
}
addTokens('Subsemnatul ...', [{tokenName: 'subsemnatul'}])

module.exports = app;