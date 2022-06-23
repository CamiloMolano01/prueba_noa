const median = (array) => {
    array.sort();
    const mid = array.length / 2;
    if (array.length % 2 === 0) {
        return (array[mid - 1] + array[mid]) / 2;
    } else {
        return array[(mid + .5) - 1];
    }
}


const warnings = (n, d, array) => {
    let cont = 0;
    for (let i = d; i < n; i++) {
        let mid = median(array.slice(i - d, i));
        if (array[i] >= (2 * mid)) {
            cont++;
        }
    }
    console.log(cont);
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.once("line", line1 =>
    readline.once("line", line2 => {
        let n = Number(line1.split(" ")[0]);
        let d = Number(line1.split(" ")[1]);
        let array = line2.split(" ").map(Number);
        warnings(n, d, array);
        readline.close();
    })
);