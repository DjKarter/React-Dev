let reverse = function (x) {
  return x.toString().split('').reverse().join('');
};

const showLogs = () => {
  const arr = Array.from(Array(30).keys())
    .map((elem) => Math.pow(10, elem))
    .map((elem) => {
      return [Math.log2(elem), Math.log(elem), Math.log10(elem)];
    });

  for (let elem of arr) {
    console.log(elem);
  }
};

showLogs();
