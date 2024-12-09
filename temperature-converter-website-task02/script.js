function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
  }
  
  function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const selectedUnit = document.getElementById('unit').value;
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
  
    // Clear previous results
    resultDiv.innerHTML = '';
    errorDiv.innerHTML = '';
  
    if (!isNumber(tempInput)) {
      errorDiv.innerHTML = 'Please enter a valid number!';
      return;
    }
  
    const temperature = parseFloat(tempInput);
    let finalResult = '';
  
    if (selectedUnit === 'celsius') {
      const fahrenheit = (temperature * 9/5) + 32;
      const kelvin = temperature + 273.15;
      finalResult = `${temperature}° Celsius is equal to ${fahrenheit.toFixed(2)}° Fahrenheit and ${kelvin.toFixed(2)} Kelvin.`;
    } else if (selectedUnit === 'fahrenheit') {
      const celsius = (temperature - 32) * 5/9;
      const kelvin = celsius + 273.15;
      finalResult = `${temperature}° Fahrenheit is equal to ${celsius.toFixed(2)}° Celsius and ${kelvin.toFixed(2)} Kelvin.`;
    } else if (selectedUnit === 'kelvin') {
      const celsius = temperature - 273.15;
      const fahrenheit = (celsius * 9/5) + 32;
      finalResult = `${temperature} Kelvin is equal to ${celsius.toFixed(2)}° Celsius and ${fahrenheit.toFixed(2)}° Fahrenheit.`;
    }
  
    resultDiv.innerHTML = finalResult;
  }
  