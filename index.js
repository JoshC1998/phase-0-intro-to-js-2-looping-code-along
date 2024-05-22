function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }
let names = ['Alice', 'Bob', 'Charlie'];
let giftName = 'oreo';

let result = writeCards(names, eventName);
console.log(result);
function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}