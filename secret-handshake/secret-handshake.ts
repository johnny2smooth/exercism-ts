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

  while (remainder > 0) {}

  return handshakeArray;
}

console.log(commands(1));

function convertDecimalToBinary(decimal: number) {
  return +(decimal >>> 0).toString(2);
}

const test = convertDecimalToBinary(6);
console.log(typeof test);
console.log(test);
console.log(test % 1);
console.log(test % 10);
console.log(test % 100);
console.log(test % 1000);
console.log(test % 10000);
console.log(test % 100000);
console.log(test.toString().length);
