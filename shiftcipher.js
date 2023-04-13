/* 
Variables
*/

const enterBtn = document.getElementById('button');

let messageVal = document.getElementById('message');
let valueVal = document.getElementById('value');
let encryptVal = document.getElementById('encrypt');
let decryptVal = document.getElementById('decrypt');



/*
Shift Cipher Logic
*/




const shiftCipher = (message, value, cipherType) => {
    if (cipherType === 'encrypt') {
        message = message.toUpperCase();
        let charCodeMessage = [];
        for (let i = 0; i < message.length; i++) {
            charCodeMessage.push(message.charCodeAt(i));
        }
        let shiftedMessage = [];
        for (let i = 0; i < charCodeMessage.length; i++) {
            if ((charCodeMessage[i] > 64) && (charCodeMessage[i] < 91)) {
              let encryptedValue = charCodeMessage[i] + (+value);
              if (encryptedValue > 90) {
                shiftedMessage.push(charCodeMessage[i] - (26 - (+value)))
              } else {
                shiftedMessage.push(charCodeMessage[i] + (+value))
              };
            } else {
            shiftedMessage.push(charCodeMessage[i]);
            }
          }
        let newMessage = [];
        shiftedMessage.forEach(function(char){
            newMessage.push(String.fromCharCode(char))
          });
          return newMessage.join('');


    } else if (cipherType === 'decrypt') {
        message = message.toLowerCase();
        let charCodeMessage = [];
        for (let i = 0; i < message.length; i++) {
            charCodeMessage.push(message.charCodeAt(i));
        }
        let shiftedMessage = [];
        for (let i = 0; i < charCodeMessage.length; i++) {
            if ((charCodeMessage[i] > 96) && (charCodeMessage[i] < 123)) {
              let decryptedValue = charCodeMessage[i] - (+value);
              if (decryptedValue < 97) {
                shiftedMessage.push(charCodeMessage[i] + (26 - (+value)))
              } else {
                shiftedMessage.push(charCodeMessage[i] - (+value))
              };
            } else {
            shiftedMessage.push(charCodeMessage[i]);
            }
          }
        let newMessage = [];
        shiftedMessage.forEach(function(char){
            newMessage.push(String.fromCharCode(char))
          });
          return newMessage.join('');
    } 
}


/*

Listening Events

*/

enterBtn.addEventListener('click', function () {
    let cipherTypeV;
    if (encryptVal.checked) {
        cipherTypeV = 'encrypt';
    } else if (decryptVal.checked) {
        cipherTypeV ='decrypt' 
    }
    let messageV = messageVal.value;
    let valueV = valueVal.value;
    console.log('Printing our input values: ' + messageV + " " + valueV + " " + cipherTypeV)
    console.log('Final Result: ' + shiftCipher(messageV, valueV, cipherTypeV));
    let resultContainer = document.getElementById('result-container');
    let result = shiftCipher(messageV, valueV, cipherTypeV);
    resultContainer.innerHTML = '<div>' + result + '</div>';
})

