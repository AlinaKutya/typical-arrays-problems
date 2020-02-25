exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    }

    let min = array[0];

    for (let i in array) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }

    let max = array[0];

    for (let i in array) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }

    let sum = array.reduce((total, number) => total + number, 0);

    return sum / array.length;
};
