promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
});

promise
    .then(() => console.log('処理が完了しました！'))
    .then(() => console.log('ここも実行されるよ！'))
    .catch(() => console.log('問題発生!!'));