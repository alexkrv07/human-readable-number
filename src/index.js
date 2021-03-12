module.exports = function toReadable (number) {
  // Ожидаем целое от 0 до 999 возвращаем результат в виде текста
  if (arguments.length > 1 || !Number.isInteger(number) || number < 0 || number > 999) {
    return "error";
  }

  const digits = {
    0: "zero",      1: "one",       2: "two",        3: "three",       4: "four",
    5: "five",      6: "six",       7: "seven",      8: "eight",       9: "nine", 
    10: "ten",      11: "eleven",   12: "twelve",    13: "thirteen",  14: "fourteen",
    15: "fifteen",  16: "sixteen",  17: "seventeen", 18: "eighteen",   19: "nineteen",
    20: "twenty",   30: "thirty",   40: "forty",     50: "fifty",     60: "sixty",
    70: "seventy",  80: "eighty",    90: "ninety"
  }
  
  let testString = ""
  const hundred = "hundred";
  const space = " ";

  if (number <= 20) {
    testString += digits[number];
  }
  else if (number <= 99) {
    number % 10 == 0 ? testString +=  digits[number] : testString += digits[number - number % 10] + space + digits[number % 10]
  }
  else {
    if (number % 100 == 0) {
      testString += digits[number / 100] + space + hundred;      
    }
 

    else if (number % 100 <= 20){
      testString += digits[(number - number % 100) / 100] + space + hundred;
      testString += space + digits[number % 100];
    }
    else {
     testString += digits[(number - number % 100) / 100] + space + hundred + space;  
     number = number % 100;
     number % 10 == 0 ? testString +=  digits[number] : testString += digits[number - number % 10] + space + digits[number % 10];
    }

  }
  return testString;

}
