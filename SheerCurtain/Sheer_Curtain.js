let pvcEntries = [];
let woodEntries = [];

// PVC Calculation
function calculatePvcPrice() {
    const pvcWidth = parseFloat(document.getElementById('pvcWidth').value);
    //const pvcHeight = parseFloat(document.getElementById('pvcHeight').value);

    if (isNaN(pvcWidth)) {
        alert("Please enter valid cutain width.");
        return;
    }

    // Convert mm to meters
    //const pvcArea = (pvcWidth / 1000) * (pvcHeight / 1000); // Area in square meters
    const pvcPricePerSqm = 155; // Price per square meter for PVC
    const pvcTotal = pvcWidth * pvcPricePerSqm;

    pvcEntries.push({width: pvcWidth, total: pvcTotal.toFixed(2)})
    //console.log(pvcEntries)
    renderEntries('pvcEntryList', pvcEntries)
    // Display PVC result
    document.getElementById('pvcResult').innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">PVC Calculation Result</h5>
                <p class="card-text"><strong>Area:</strong> ${pvcWidth} m</p>
                <p class="card-text"><strong>Total Price:</strong> $${pvcTotal.toFixed(2)}</p>
            </div>
        </div>
    `;

    updateTotal('pvcTotalResult', pvcEntries)
}


function renderEntries(element, entries) {
    const entryList = document.getElementById(element);
    entryList.innerHTML = ''; // Clear existing entries

    entries.forEach((entry, index) => {
        const entryRow = document.createElement('tr');
        entryRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.width} mm</td>
            <td>$${entry.total}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteEntry(${index}, ${entryList.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        entryList.appendChild(entryRow);
    });
}


function updateTotal(element, entries) {
    const subtotal = entries.reduce((sum, entry) => sum + parseFloat(entry.total), 0);

    document.getElementById(element).innerHTML = `
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Total Summary</h5>
                <p class="card-text"><strong>Grand Total:</strong> $${subtotal.toFixed(2)}</p>
            </div>
        </div>
    `;
}


function deleteEntry(index, element) {
    debugger
     pvcEntries.splice(index, 1); // Remove the entry
    renderEntries('pvcEntryList', pvcEntries); // Re-render the entries
    updateTotal('pvcTotalResult', pvcEntries); // Update the tota
 
}