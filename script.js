let qrCodeHolder = document.getElementById("qrcode-holder")
let qrCode = document.getElementById("qrcode")
let generateButton = document.getElementById("generate-qr-button");
let inputField = document.getElementById("input-url")
let downloadButton = document.getElementById("download-qr-button");
let inputFieldWarningTextEmpty = document.getElementById("input-field-warning-text-empty");
let inputFieldWarningTextEmptySpaces = document.getElementById("input-field-warning-text-empty-space");
let inputFieldWarningTextUrl = document.getElementById("input-field-warning-text-url");
let inputFieldWarningTextLength = document.getElementById("input-field-warning-text-length");
let inputFieldWarningTextDot = document.getElementById("input-field-warning-text-dot");
let spinner = document.getElementById("spinner");
let isInputFieldTextFilled = false;
let hasInputFieldTextEmptySpaces = false;
let hasInputTextCorrectLength = false;
let isInputTextCorrectUrl = false;
let hasInputFieldTextContainDot = false;
let qrCodeHeight;

// generate QR code
function generateQrCode(url){
  var qrcode = new QRCode(qrCode, {
    text: url,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}

// run on page load
generateQrCode("https://josefzacek.com")

function getQrCodeHeight(){
  setTimeout(function() {
    qrCodeHeight = qrCodeHolder.clientHeight;
    qrCodeHolder.style.height = qrCodeHeight + "px";
  }, 1000);
}

getQrCodeHeight();

// validate user input
function validateInput(){
  if (inputField.value.startsWith("http://") || inputField.value.startsWith("https://")){
    isInputTextCorrectUrl = true;
  } else {
    isInputTextCorrectUrl = false;
  }

  if (inputField.value.length >= 10){
    hasInputTextCorrectLength = true;
  } else {
    hasInputTextCorrectLength = false;
  }

  if (inputField.value.length != 0){
    isInputFieldTextFilled = true;
  } else {
    isInputFieldTextFilled = false;
  }

  if (/\s/.test(inputField.value)) {
    hasInputFieldTextEmptySpaces = true;
  } else {
    hasInputFieldTextEmptySpaces = false;
  }

  if (inputField.value.includes('.')) {
    hasInputFieldTextContainDot = true;
  } else {
    hasInputFieldTextContainDot = false;
  }

  if (isInputTextCorrectUrl){
    inputFieldWarningTextUrl.classList.add("d-none");
  } else {
    inputFieldWarningTextUrl.classList.remove("d-none");
  }

  if (hasInputTextCorrectLength){
    inputFieldWarningTextLength.classList.add("d-none");
  } else {
    inputFieldWarningTextLength.classList.remove("d-none");
  }

  if (isInputFieldTextFilled){
    inputFieldWarningTextEmpty.classList.add("d-none");
  } else {
    inputFieldWarningTextEmpty.classList.remove("d-none");
  }

  if (hasInputFieldTextEmptySpaces){
    inputFieldWarningTextEmptySpaces.classList.remove("d-none");
  } else {
    inputFieldWarningTextEmptySpaces.classList.add("d-none");
  }

  if (hasInputFieldTextContainDot){
    inputFieldWarningTextDot.classList.add("d-none");
  } else {
    inputFieldWarningTextDot.classList.remove("d-none");
  }

  if (isInputTextCorrectUrl && hasInputTextCorrectLength && isInputFieldTextFilled && hasInputFieldTextContainDot && (hasInputFieldTextEmptySpaces == false) ) {
    inputField.classList.remove("border-danger");
  } else {
    inputField.classList.add("border-danger");
  }
}

// run validate function as user types
inputField.addEventListener("keyup", function(){
  validateInput();
})
// generate QR code
function generateQrCodeWithDelay(url){
  spinner.classList.remove("d-none")
  setTimeout(function() {
    generateQrCode(url);
    spinner.classList.add("d-none")
  }, 1000);
}
