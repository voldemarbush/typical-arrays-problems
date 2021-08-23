exports.min = function min (array) {
    let ln = (array) ? array.length : 0;
    if (array && ln != 0) {
        let res = array[0];
        for (let a = 1; a <= ln - 1; a++) {
            res = (array[a] < res) ? array[a] : res;
        }
        return res;
    } else return 0;    
}

exports.max = function max (array) {
    let ln = (array) ? array.length : 0;
    if (ln != 0) {
        let res = array[0];
        for (let a = 1; a <= ln - 1; a++) {
            res = (array[a] > res) ? array[a] : res;
        }
        return res;
    } else return 0;
}

exports.avg = function avg (array) {
    let ln = (array) ? array.length : 0;
    let res = 0;
    if (array && ln != 0) {
        for (let a = 0; a <= ln - 1; a++) {
            res += array[a];
        }
        return res / ln;
    } else return 0;
}
