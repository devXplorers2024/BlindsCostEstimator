let pvcEntries = [];
let woodEntries = [];

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

    pvcEntries.push({width: pvcWidth, height: pvcHeight, area: pvcArea.toFixed(2), total: pvcTotal.toFixed(2)})
    //console.log(pvcEntries)
    renderEntries('pvcEntryList', pvcEntries)
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

    updateTotal('pvcTotalResult', pvcEntries)
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

    woodEntries.push({width: woodWidth, height: woodHeight, area: woodArea.toFixed(2), total: woodTotal.toFixed(2)})
    //console.log(woodEntries)
    renderEntries('woodEntryList', woodEntries)

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
    updateTotal('woodTotalResult', woodEntries)
}



function renderEntries(element, entries) {
    const entryList = document.getElementById(element);
    entryList.innerHTML = ''; // Clear existing entries

    entries.forEach((entry, index) => {
        const entryRow = document.createElement('tr');
        entryRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.width} mm</td>
            <td>${entry.height} mm</td>
            <td>${entry.area} m²</td>
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
    if(element.id == "woodEntryList"){
        woodEntries.splice(index, 1); // Remove the entry
        renderEntries('woodEntryList', woodEntries); // Re-render the entries
        updateTotal('woodTotalResult', woodEntries); // Update the total
    }
    else{
        pvcEntries.splice(index, 1); // Remove the entry
        renderEntries('pvcEntryList', pvcEntries); // Re-render the entries
        updateTotal('pvcTotalResult', pvcEntries); // Update the total
    }
 
}