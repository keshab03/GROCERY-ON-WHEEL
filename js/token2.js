let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

const generateToken = (key) => {
    let token = '';
    for(let i = 0; i < key.length; i++){
        let index = char.indexOf(key[i]) || char.length / 2;
        let randomIndex = Math.floor(Math.random() * index);
        token += char[randomIndex] + char[index - randomIndex];
    }
    return token;
}

const compareToken = (token, key) => {
    let string = '';
    for(let i = 0; i < token.length; i=i+2){
        let index1 = char.indexOf(token[i]);
        let index2 = char.indexOf(token[i+1]);
        string += char[index1 + index2];
    }
    if(string === key){
        return true;
    }
    return false;
}

// alert function
const showAlert = (msg) => {
    // previous code
    return false;
}

const processData = (data) => {
    // previous conditions
    else if(data.product){
        location.href = '/seller';
    }
}