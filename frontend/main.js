fetch("https://pythonvc.azurewebsites.net/api/PythonHTTPTrigger")
    .then(response => response.text())
    .then(data => {
        document.getElementById('counter').textContent = data;
    });
