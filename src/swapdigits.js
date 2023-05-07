const swapDigits = (number) => {
  let swappedNumber = 0;
  //write logic here
  if (number <= 0) {
    swappedNumber = 0;
  } else {
    var digits = number.toString().split("");
    var realDigits = digits.map(Number);
    // console.log(realDigits);
    // console.log(realDigits.length);
    var c = realDigits.length - 1
    if (realDigits.length % 2 == 0) {
       // console.log(realDigits.length % 2)
      for (let i = 0; i < c; i+=2) {
        //console.log(i , c)
        let x = realDigits[i];
        realDigits[i] = realDigits[i + 1];
        realDigits[i + 1] = x;
      }
    } else {
      for (let i = 1; i < c; i += 2) {
        //console.log(i , c)
        let x = realDigits[i];
        realDigits[i] = realDigits[i + 1];
        realDigits[i + 1] = x;
      }
    }
    //console.log(realDigits)
    swappedNumber = Number(realDigits.join(""));
  }

  return swappedNumber;
};

module.exports = swapDigits;

// number = swapDigits(23414);
// console.log(number);
