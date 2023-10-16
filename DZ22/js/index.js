document.getElementById('save-button').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('registration-form'));
    const table = document.createElement('table');
    const outputTable = document.getElementById('output-table');

    formData.forEach(function(value, key) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = key;
        cell2.textContent = value;
    });

    outputTable.innerHTML = '';
    outputTable.appendChild(table);
});