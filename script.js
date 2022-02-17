var qrCodeHolder = document.getElementById("qrcode-holder")

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
