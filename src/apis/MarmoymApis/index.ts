export function getDefinitions() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('power');
    }, 1000);
  });
}