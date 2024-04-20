function findDominantColor(imageUrl, callback, numColors) {
    let img = new Image();
    img.crossOrigin = "Anonymous"; // etoo it fixes the CORS error which is like a privacy issue thing ?
    img.onload = function() { // onload event is fired when the image is loaded
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = this.width;
        canvas.height = this.height; 
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height); // draw the image on the canvas

        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data; // get the image data ( thats why we need that crossOrigin: "Anonymous" cause this may cause errors )

        // Color quantization ( a more advanced and more optimized algorithm could be used ) but i am not sure how to , and i am not going to spend a lot of time learnig math to optimize it :D it works its fine :D maybe i will learn it later
        let quantizedData = quantizeColors(imageData, numColors);

        // Count occurrences of each color in quantized data
        let colorCounts = {};
        quantizedData.forEach(rgba => { 
            let hex = "#" + ("000000" + rgbToHex(rgba[0], rgba[1], rgba[2])).slice(-6);
            if (hex in colorCounts) {
                colorCounts[hex]++;
            } else {
                colorCounts[hex] = 1;
            }
        });

        // Find the color with the highest count
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
    return ((r << 16) | (g << 8) | b).toString(16); // yaeh lol i have no idea how this works :3
}

// Usage
let imagy = document.querySelector("img");
findDominantColor(imagy.src, function(dominantColor) {
    document.body.style.backgroundColor = dominantColor;
}, 10); // Specify the number of colors for quantization
