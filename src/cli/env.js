const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter(([name, val]) => name.indexOf('RSS_') === 0)
      .map((el) => `${el[0]}=${el[1]}`)
      .join('; ')
  );
};

parseEnv();
