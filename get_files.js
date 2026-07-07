fetch("https://app.base44.com/api/apps/6a4c33f832fbd9c2b24acf68/sandbox/files", {
    method: "GET",
    headers: {
        "Authorization": "Bearer eyXXX"
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('There was a problem with the fetch operation:', error));
