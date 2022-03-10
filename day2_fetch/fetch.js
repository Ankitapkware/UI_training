async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    var data = await response.json()
    return data;

}
getData().then(data => console.log(data));
document.getElementById('main').innerHTML = data;
