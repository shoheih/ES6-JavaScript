function Car(model) {
    this.model = model;
}

var cars = [
    new Car('プリウス'),
    new Car('ノート'),
    new Car('アクア')
];

var car = cars.find(function(car) {
    return car.model === 'アクア';
});

console.log(car);