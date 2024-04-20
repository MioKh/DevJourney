const link = document.getElementById("imgLink");
const btn = document.querySelector(".btn");
const img = document.querySelector("img");

function findDominantColor(imageUrl, callback, numColors) {
    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = this.width;
        canvas.height = this.height;
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        let quantizedData = quantizeColors(imageData, numColors);

        let colorCounts = {};
        quantizedData.forEach((rgba) => {
            let hex = "#" + ("000000" + rgbToHex(rgba[0], rgba[1], rgba[2])).slice(-6);
            colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        });

        let maxCount = 0;
        let dominantColor = null;
        for (let color in colorCounts) {
            if (colorCounts[color] > maxCount) {
                maxCount = colorCounts[color];
                dominantColor = color;
            }
        }
        callback(dominantColor);
    };
    img.src = imageUrl;
}

function quantizeColors(imageData, numColors) {
    let quantizedData = [];
    let segmentSize = Math.floor(imageData.length / numColors);
    for (let i = 0; i < imageData.length; i += segmentSize) {
        let rgba = imageData.slice(i, i + 4);
        quantizedData.push(rgba);
    }
    return quantizedData;
}

function rgbToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}

function setBackground(dominantColor) {
    document.body.style.backgroundColor = dominantColor;
}

let imagy = document.querySelector("img");
findDominantColor(imagy.src, (dominantColor) => {
    setBackground(dominantColor);
}, 10);

function changeImage(event) {
    event.preventDefault();
    if (link.value) {
        let url;
        try {
            url = new URL(link.value);
        } catch (error) {
            alert("The link you provided is not valid!");
            return;
        }
        if (url.protocol !== "http:" && url.protocol !== "https:") {
            alert("CORS error! Please provide a link from the web.");
            return;
        }
        img.src = link.value;
        findDominantColor(link.value, setBackground, 10);
    } else {
        alert("Please provide an image link!");
    };
}

btn.addEventListener("click", changeImage);