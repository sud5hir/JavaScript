const str = ["A:9", "B:-1", "A:1", "B:3", "E:10", "A:5", "A:5", "D:0", "C:100", "A:100", "B:7", "C:500"];

let newString = [];
console.log(str.sort(
    function (a, b) {
        console.log(a[0]);
        console.log(b[0]);
        return a[0] - b[0]
    }));

for (let j = 0; j < str.length; j++) {
    let lastString = str[j];
    let dict = (str[j].split(":"));
    if (!newString.includes(dict[0]) && dict[1] != "0") {
        let temp = Number(dict[1]);
        for (let k = j + 1; k < str.length; k++) {
            let subDict = (str[k].split(":"));
            if (dict[0] == subDict[0]) {
                temp = temp + Number(subDict[1]);
                lastString = dict[0] + ":" + temp;
            }
        }
    }
}