url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('問題発生!!!!', error))