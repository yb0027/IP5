function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject('Both inputs must be numbers.');
        return;
      }
  
      switch (operation) {
        case 'add':
          resolve(num1 + num2);
          break;
        case 'subtract':
          resolve(num1 - num2);
          break;
        case 'multiply':
          resolve(num1 * num2);
          break;
        case 'divide':
          if (num2 === 0) {
            reject('Division by zero is not allowed.');
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject('Invalid operation. Please use "add", "subtract", "multiply", or "divide".');
      }
    });
  }
  calculator(5, 3, 'add')
    .then(result => {
      console.log('Addition Result:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  calculator(10, 2, 'subtract')
    .then(result => {
      console.log('Subtraction Result:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  calculator(6, 4, 'multiply')
    .then(result => {
      console.log('Multiplication Result:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  calculator(8, 0, 'divide')
    .then(result => {
      console.log('Division Result:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  