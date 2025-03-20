// PVC Calculation
function calculatePvcPrice() {
    const pvcWidth = parseFloat(document.getElementById('pvcWidth').value);
    const pvcHeight = parseFloat(document.getElementById('pvcHeight').value);

    if (isNaN(pvcWidth) || isNaN(pvcHeight)) {
        alert("Please enter valid PVC width and height.");
        return;
    }

    // Convert mm to meters
    const pvcArea = (pvcWidth / 1000) * (pvcHeight / 1000); // Area in square meters
    const pvcPricePerSqm = 185; // Price per square meter for PVC
    const pvcTotal = pvcArea * pvcPricePerSqm;

    // Display PVC result
    document.getElementById('pvcResult').innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">PVC Calculation Result</h5>
                <p class="card-text"><strong>Area:</strong> ${pvcArea.toFixed(2)} m²</p>
                <p class="card-text"><strong>Total Price:</strong> $${pvcTotal.toFixed(2)}</p>
            </div>
        </div>
    `;
}

// Wood Calculation
function calculateWoodPrice() {
    const woodWidth = parseFloat(document.getElementById('woodWidth').value);
    const woodHeight = parseFloat(document.getElementById('woodHeight').value);

    if (isNaN(woodWidth) || isNaN(woodHeight)) {
        alert("Please enter valid Wood width and height.");
        return;
    }

    // Convert mm to meters
    const woodArea = (woodWidth / 1000) * (woodHeight / 1000); // Area in square meters
    const woodPricePerSqm = 195; // Price per square meter for Wood
    const woodTotal = woodArea * woodPricePerSqm;

    // Display Wood result
    document.getElementById('woodResult').innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Wood Calculation Result</h5>
                <p class="card-text"><strong>Area:</strong> ${woodArea.toFixed(2)} m²</p>
                <p class="card-text"><strong>Total Price:</strong> $${woodTotal.toFixed(2)}</p>
            </div>
        </div>
    `;
}