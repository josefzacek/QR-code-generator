function generateQrCode(url){
  var qrcode = new QRCode(document.getElementById("qrcode-holder"), {
    text: url,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}


generateQrCode("https://josefzacek.com")


// download QR Code
let downloadButton = document.querySelector("a#downloadQR");

let qrCodeHolder = document.querySelector("#qrcode-holder");

downloadButton.setAttribute("download", "qr_code.png");

let qrCodeHolderImage = document.querySelector("#qrcode-holder img");

let qrCodeHolderCanvas = document.querySelector("#qrcode-holder canvas");

downloadButton.addEventListener('click', event => {

  if (qrCodeHolderImage.getAttribute("src") == null) {
    setTimeout(() => {
      downloadButton.setAttribute("href", `${qrCodeHolderCanvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      downloadButton.setAttribute("href", `${qrCodeHolderImage.getAttribute("src")}`);
    }, 300);
  }
});


// generate QR Code
let generateButton = document.querySelector("button#generateQR");

let inputField = document.getElementById("url")

generateButton.addEventListener('click', event => {
  document.getElementById("qrcode-holder").innerHTML = '';
  var inputUrl = inputField.value

  inputField.value = "";

  console.log(inputUrl)



  var qrcode = new QRCode(document.getElementById("qrcode-holder"), {
    text: inputUrl,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H

  });

});
