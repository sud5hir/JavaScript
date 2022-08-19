const stringTest = (str) => {
    let newString = "";
    for (let j = 0; j <= str.length; j++) {
        let temp = str[j];
        let count = 0;
        for (let k = j; k <= str.length; k++) {
            if (temp == str[k]) {
                count++;
                continue;
            }
            j = j + count - 1;
            newString = newString + count + temp;
            break;
        }
    }
    return newString;
}
console.log(stringTest("wwwggapp"));
console.log(stringTest("aabbcde"));
console.log(stringTest("wwwbbbw"));
console.log(stringTest(""));