/**
 * Returns the correct declension for age based on the Russian grammar rules.
 * @param {number} number Input age
 * @returns {(string)} Correct declension
 */

export function addDeclension(number: number): string {
    let declension: string;
    const declensionArr = ['год', 'года', 'лет'];

    if (number % 10 === 1 && number % 100 !== 11) {
        declension = declensionArr[0];
    } else if (
        (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) &&
        (number % 100 !== 12 && number % 100 !== 13 && number % 100 !== 14)
    ) {
        declension = declensionArr[1];
    } else {
        declension = declensionArr[2];
    }

    return declension;
}