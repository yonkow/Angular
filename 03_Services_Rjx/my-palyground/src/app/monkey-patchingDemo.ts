// Standart console log
console.log('123');

// Monkey-patched console log
const originalConsoleLog = console.log;

console.log = (...args) => {
  originalConsoleLog(...args);
  // any other logic
  console.warn('Notify Angular for this method');
  // Notify Angular
}

console.log('345');