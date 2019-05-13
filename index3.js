function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('my_username');
var password = new Field('my_password');
var birthday = new Field('2010/10/10');

var fields = [
    username,
    password
];

var formIsValid = fields.every(function(field) {
    return field.validate();
});

if (formIsValid) {
    // サーバーにリクエストを投げる
} else {
    // エラーを表示する
}