const fs = require('fs/promises');

(async () => {

  try {
    let total = 0;
    const data = (await fs.readFile('./input.txt', "utf8")).split('\n').filter(line => line);
    console.log(data.length);
    for (let i = 0; i < data.length; ++i) {
      const line = data[i];
      let left = '';
      let right = '0';
      console.log(line);
      for (let j = 0; j < line.length; ++j) {
        if (!isNaN(line[j])) {
          if (!left) {
            left = line[j];
          } else {
            right = line[j];
          }
        }
      }
      console.log(`LEFT: ${left} RIGHT: ${right} = ${Number(left + right)}`);
      total += Number(left  + right);
    }
    console.log(total);

  } catch (err) {
    console.log(err);
  }
  process.exit();
})();

/*
    for (let i = 0; i < data.length; ++i) {
      const line = data[i];
      let left = 0;
      let left_value = 0;
      let right = line.length - 1;
      let right_value = 0;
      console.log(`ROW: ${i}: ${line}`);
      while (left !== right && (!left_value || !right_value)) {
        if (!left_value) {
          if (!isNaN(line[left])) {
            left_value = (line[left]);
          } else {
            left++;
          }
        }

        if (!right_value) {
          if (!isNaN(line[right])) {
            right_value = (line[right]);
          } else {
            right--;
          }
        }

        //console.log(`LEFT: ${left} RIGHT: ${right}`);

      }
      console.log(`LEFT: ${left_value} RIGHT: ${right_value} = ${Number(left_value + right_value)}`);
      total += Number(left_value  + right_value);
    }
    */