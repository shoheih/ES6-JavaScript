var keys = Object.keys({width: '3m', height: '5m'});

console.log(keys[0]);

var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

function findWhere(array, criteria) {
    var key = Object.keys(criteria);
    return array.find(function(element) {
        return element[key] === criteria[key];
    });
}

console.log(findWhere(ladders, { height: 25 }));