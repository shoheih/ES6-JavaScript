var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputersCanRun = computers.every(function(computer) {
    return computer.ram >= 16;
});

var someComputersCanRun = computers.some(function(computer) {
    return computer.ram >= 16;
})

console.log({ allComputersCanRun });
console.log({ someComputersCanRun });