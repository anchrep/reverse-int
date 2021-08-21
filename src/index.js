module.exports = function reverse (n) {
 // Берем модуль, чтобы сразу избавиться от минуса
 // конвертируем цифры в строку, чтобы работал split
 // spilt делает из строки массив, чтобы работал reverse
 // reverse 
 // Join объединяет все элементы массива в строку.
    let nToAbs = Math.abs(n);
    return nToAbs.toString().split('').reverse().join('');
}
