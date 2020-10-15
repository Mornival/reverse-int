module.exports = function reverse (n) {
    let n1 = n.toString();
    let str = "";
    for(let i = n1.length - 1; i >= 0; i--){
        if(n1[i] !== '-')
        {
            str += n1[i];
        }
    }
    return str;
}
