function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }

    return number;
}

console.log(count('afjldajeuroeaujlouoreua'));
console.log(count('auild'));

// どれだけ意図をコードの中に入れることができるのか