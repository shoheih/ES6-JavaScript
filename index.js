function makeAjaxRequest(url, method = 'GET') {
    // ajaxリクエストをするロジックがここにあると想定
    return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', null));
console.log(makeAjaxRequest('google.com', undefined));
console.log(makeAjaxRequest('google.com', 'POST'));