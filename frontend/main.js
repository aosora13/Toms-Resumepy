fetch("https://pythonvc.azurewebsites.net/api/PythonHttpTrigger")
    .then(response => response.text())
    .then(data => {
        document.getElementById('visitor_count').textContent = data;
    });
