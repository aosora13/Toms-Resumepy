fetch('https://pythonvc.azurewebsites.net/api/PythonHttpTrigger', { method: 'POST' })
  .then(response => response.text())
  .then(count => {
    console.log(`Visitor count: ${count}`);
  });
