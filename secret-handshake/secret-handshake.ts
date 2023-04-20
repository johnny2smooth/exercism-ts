const SECRETS = {
  1: "wink",
  10: "double blink",
  100: "close your eyes",
  1000: "jump",
  10000: "reverse",
};

export function commands(decimal: number) {
  if (!decimal) return [];
  let handshakeArray: string[] = [];
  const binary = convertDecimalToBinary(decimal);
  let remainder = binary;

  while (remainder > 0) {
    if (remainder % 10 === 1) {
      handshakeArray.push("wink");
      remainder -= 1;
    }
    if ((remainder >= 10 && remainder < 100) || remainder % 100 === 10) {
      handshakeArray.push("double blink");
      remainder -= 10;
    }
    if ((remainder >= 100 && remainder < 1000) || remainder % 1000 === 100) {
      handshakeArray.push("close your eyes");
      remainder -= 100;
    }
    if (
      (remainder >= 1000 && remainder < 10000) ||
      remainder % 10000 === 1000
    ) {
      handshakeArray.push("jump");
      remainder -= 1000;
    }
    if (remainder >= 10000) {
      remainder -= 10000;
    }
  }

  if (binary > 10000) {
    handshakeArray.reverse();
  }

  return handshakeArray;
}

// console.log(commands(19));

function convertDecimalToBinary(decimal: number) {
  return +(decimal >>> 0).toString(2);
}

// const test = convertDecimalToBinary(16);
// console.log(typeof test);
// console.log(test);
// console.log(test % 1);
// console.log(test % 10);
// console.log(test % 100);
// console.log(test % 1000);
// console.log(test % 10000);
// console.log(test % 100000);
// console.log(test);
