fetch("https://pythonvcapp.azurewebsites.net/api/httptrigger1")
    .then(response => response.text())
    .then(data => {
        document.getElementById('counter').textContent = data;
    });
