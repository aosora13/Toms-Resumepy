fetch("https://pythonvc.azurewebsites.net/api/PythonHTTPTrigger?code=mv97jQqh8iPWy0riKoMAU3JHLwXZI6wsiTEq8q6fKp0CAzFueGOgJw==")
    .then(response => response.text())
    .then(data => {
        document.getElementById('counter').textContent = data;
    });
