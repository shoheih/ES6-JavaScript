var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var reduceArray = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);


var mapArray = primaryColors.map(function(primaryColor) {
    return primaryColor.color;
});

console.log({reduceArray});
console.log({mapArray});