export let getData = (url) => {
    let result = [];
    return fetch(url)
    .catch(function(ex) {
        console.log('fetch data failed', ex)
    })
    .then(function(response) {
        return response.json()
    })
}