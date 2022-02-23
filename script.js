let qrCodeHolder = document.getElementById("qrcode-holder")
let generateButton = document.getElementById("generate-qr-button");
let inputField = document.getElementById("input-url")
let downloadButton = document.getElementById("download-qr-button");
let inputFieldWarningTextUrl = document.getElementById("input-field-warning-text-url");
let inputFieldWarningTextLength = document.getElementById("input-field-warning-text-length");
let hasInputTextCorrectLength = false;
let isInputTextCorrectUrl = false;

// generate QR code
function generateQrCode(url){
  var qrcode = new QRCode(qrCodeHolder, {
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
