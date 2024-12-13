let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        // Set the QR code image source
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
        qrImage.alt = "QR Code for " + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        // Show error animation
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 500);
        qrText.placeholder = "Please enter valid text or URL!";
    }
}
qrText.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        generateQR();
    }
});