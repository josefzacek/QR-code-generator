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
