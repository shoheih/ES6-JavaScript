const savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: 14040
}

function fileSummary({ name, extension, size }) {
    return `${name}.${extension}の容量は${size}です。`;
}

console.log(fileSummary(savedFile));