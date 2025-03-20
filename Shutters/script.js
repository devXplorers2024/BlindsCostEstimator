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

let entries = [];

function findClosest(value, array) {
    return array.find((item, index) => value <= item || index === array.length - 1);
}

function calculatePrice(width, height, discount) {
    const closestWidth = findClosest(width, widths);
    const closestHeight = findClosest(height, heights);

    const widthIndex = widths.indexOf(closestWidth);
    const heightKey = closestHeight.toString();

    const price = priceList[heightKey][widthIndex];
    const discountedPrice = price * (1 - discount / 100);

    return discountedPrice.toFixed(2);
}

function addEntry() {
    const widthInput = parseInt(document.getElementById('width').value);
    const heightInput = parseInt(document.getElementById('height').value);
    const discountInput = parseFloat(document.getElementById('discount').value) || 0;

    if (isNaN(widthInput) || isNaN(heightInput)) {
        alert("Please enter valid width and height.");
        return;
    }

    const price = calculatePrice(widthInput, heightInput, discountInput);
    const entry = { width: widthInput, height: heightInput, discount: discountInput, price: price };
    entries.push(entry);

    renderEntries();
    updateTotal();

    // Clear input fields
    document.getElementById('width').value = '';
    document.getElementById('height').value = '';
    document.getElementById('discount').value = '';
}

function renderEntries() {
    const entryList = document.getElementById('entryList');
    entryList.innerHTML = ''; // Clear existing entries

    entries.forEach((entry, index) => {
        const entryRow = document.createElement('tr');
        entryRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.width} mm</td>
            <td>${entry.height} mm</td>
            <td>${entry.discount}%</td>
            <td>$${entry.price}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteEntry(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        entryList.appendChild(entryRow);
    });
}

function deleteEntry(index) {
    entries.splice(index, 1); // Remove the entry
    renderEntries(); // Re-render the entries
    updateTotal(); // Update the total
}

function updateTotal() {
    const subtotal = entries.reduce((sum, entry) => sum + parseFloat(entry.price), 0);
    const gst = subtotal * 0.10; // 10% GST
    const grandTotal = subtotal + gst;

    document.getElementById('totalResult').innerHTML = `
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Total Summary</h5>
                <p class="card-text"><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
                <p class="card-text"><strong>GST (10%):</strong> $${gst.toFixed(2)}</p>
                <p class="card-text"><strong>Grand Total:</strong> $${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    `;
}