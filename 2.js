let arrSortToBits = [7, 6, 15, 8];

function countBits(el) {
    let count = 0;
    while (el) {
        count += el & 1;
        el >>= 1;
    }

    return count;
}

const sortArrayToBits = (arrSortToBits) => {
    arrSortToBits.sort((a, b) => {
        let x = countBits(a) - countBits(b);
        if(x === 0) {

            return a - b;
        }

        return x;
    });

    return arrSortToBits;
}

console.log(sortArrayToBits(arrSortToBits));
