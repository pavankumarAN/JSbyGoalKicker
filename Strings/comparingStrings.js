const pav = "Pavan";
const pav1 = "pavan";
const pav2 = "Pavan";

// console.log(pav.localeCompare(pav1));
// console.log(pav.localeCompare(pav2));

function compare(a, b) {
    if (a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
    return -1;
}

console.log(compare(pav1,pav2));