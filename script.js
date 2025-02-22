const priceList = {
    "600": [59, 66, 75, 78, 84, 86, 100, 106, 108, 111, 117, 119, 124, 138, 164, 169, 183],
    "900": [62, 69, 78, 82, 87, 90, 107, 110, 113, 116, 125, 127, 132, 152, 185, 185, 197],
    "1200": [65, 72, 81, 86, 90, 98, 116, 119, 121, 124, 133, 138, 143, 166, 194, 201, 211],
    "1500": [68, 75, 83, 90, 93, 107, 123, 129, 132, 136, 141, 148, 156, 180, 215, 217, 225],
    "1800": [72, 81, 88, 95, 97, 110, 129, 135, 141, 146, 152, 161, 168, 193, 223, 232, 242],
    "2100": [75, 93, 95, 107, 117, 132, 141, 143, 146, 151, 163, 172, 183, 209, 240, 249, 260],
    "2400": [78, 95, 102, 110, 129, 134, 148, 152, 155, 164, 175, 184, 194, 223, 253, 264, 274],
    "2700": [82, 105, 108, 116, 132, 136, 155, 161, 167, 174, 185, 194, 205, 235, 268, 280, 291],
    "3000": [88, 114, 117, 122, 136, 140, 164, 172, 180, 185, 197, 208, 219, 251, 286, 296, 307],
    "3300": [95, 125, 127, 131, 142, 147, 175, 185, 194, 197, 212, 221, 235, 268, 305, 317, 328]
};

const widths = [610, 760, 910, 1060, 1210, 1360, 1510, 1660, 1810, 1960, 2110, 2260, 2410, 2560, 2710, 2860, 3010];
const heights = [600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300];

function findClosest(value, array) {
    return array.find((item, index) => value <= item || index === array.length - 1);
}

function calculatePrice() {
    const widthInput = parseInt(document.getElementById('width').value);
    const heightInput = parseInt(document.getElementById('height').value);
    const discountInput = parseFloat(document.getElementById('discount').value) || 0; // Default to 0 if empty or invalid

    const closestWidth = findClosest(widthInput, widths);
    const closestHeight = findClosest(heightInput, heights);

    const widthIndex = widths.indexOf(closestWidth);
    const heightKey = closestHeight.toString();

    const price = priceList[heightKey][widthIndex];
    const discountedPrice = price * (1 - discountInput / 100);

    document.getElementById('result').innerText = `Calculated Price: ${discountedPrice.toFixed(2)}`;
}
