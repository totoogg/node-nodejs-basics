const parseArgs = () => {
  const arr = process.argv.slice(2);
  const resArr = Array(Math.ceil(arr.length / 2)).fill(0);
  const res = resArr
    .map((el, i) => arr.slice(i * 2, i * 2 + 2))
    .map((el) => `${el[0].slice(2)} is ${el[1]}`)
    .join(', ');
  console.log(res);
};

parseArgs();
