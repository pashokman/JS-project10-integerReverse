const reverse = (number) => {
    let str = String(number);
    let result = '';

    for (let index = str.length - 1; index >= 0; index--) {        
        if (str[index] === '-') {
            result += '';
        } else {
            result += `${str[index]}`;
        }
    }

    if (str[0] === '-') return `-${result}`;
    
    return String(Math.abs(result));

}

export default reverse;

console.log(reverse(13));   //31
console.log(reverse(-123)); //-321
console.log(reverse(8900)); //98