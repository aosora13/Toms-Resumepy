fetch("https://pythonvc.azurewebsites.net/api/HttpTrigger1)
    .then(response => response.text())
    .then(data => {
        document.getElementById('counter').textContent = data;
    });
