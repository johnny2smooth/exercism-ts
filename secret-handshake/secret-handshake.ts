// process.env.SECRETS
const SECRETS = {
  1: "wink",
  10: "double blink",
  100: "close your eyes",
  1000: "jump",
  10000: "reverse",
};
// So that we can give the equation to friends and they can
// make their own secrets without knowing ours
export function commands(decimal: number) {
  if (!decimal) return [];
  let handshakeArray: string[] = [];
  const binary = convertDecimalToBinary(decimal);
  let remainder = binary;
  while (remainder > 0) {
    if (remainder % 10 === 1) {
      handshakeArray.push(SECRETS[1]);
      remainder -= 1;
    }
    if (remainder % 100 === 10) {
      handshakeArray.push(SECRETS[10]);
      remainder -= 10;
    }
    if (remainder % 1000 === 100) {
      handshakeArray.push(SECRETS[100]);
      remainder -= 100;
    }
    if (remainder % 10000 === 1000) {
      handshakeArray.push(SECRETS[1000]);
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
function convertDecimalToBinary(decimal: number) {
  return +(decimal >>> 0).toString(2);
}
