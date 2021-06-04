var qrCanvas = document.querySelector("#qrcode");
qrcode.callback = () => {
    if (!qrcode.result.startsWith("error ")) {
        document.querySelector("#result").innerHTML = qrcode.result;
    } else {
        document.querySelector("#result").innerHTML = "Cannot read this capture.";
    }
};
document.addEventListener('paste', (event) => {
    let capture = event.clipboardData.items[0];
    if (capture.type.indexOf("image") != -1) {
        let img = new Image();
        img.src = URL.createObjectURL(capture.getAsFile());

        document.querySelector("#result").innerHTML = "Reading...";

        setTimeout(() => {
            qrCanvas.width = img.width;
            qrCanvas.height = img.height;
            qrCanvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);

            const result = jsQR(qrCanvas.getContext("2d").getImageData(0, 0, qrCanvas.width, qrCanvas.height).data,
                qrCanvas.width, qrCanvas.height, { inversionAttempts: "dontInvert" });

            document.querySelector("#resultArea").removeAttribute("hidden");
            if (result) {
                document.querySelector("#result").innerHTML = result.data;
            } else {
                //try other
                qrcode.decode(img.src);
            }
        }, 50);
    }
});