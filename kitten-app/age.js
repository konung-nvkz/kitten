function yearNaming(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20) ? 
        2 : cases[(number%10<5) ?
            number%10:5] 
        ];  
}

var declension = ['год', 'года', 'лет'];

console.log('1 ', yearNaming(1, declension));
console.log('2 ', yearNaming(2, declension));
console.log('5 ', yearNaming(5, declension));
console.log('7 ', yearNaming(6, declension));
console.log('10 ', yearNaming(10, declension));
console.log('20 ', yearNaming(20, declension));

console.log('33 ', yearNaming(33, declension));
console.log('22 ', yearNaming(22, declension));
console.log('45 ', yearNaming(5, declension));
console.log('76 ', yearNaming(6, declension));
console.log('100 ', yearNaming(100, declension));
console.log('20 ', yearNaming(20, declension));