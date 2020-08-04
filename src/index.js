async function main() {
    const result = await fetch('https://api.spacexdata.com/v4/launches/past')
    const data = await result.json()
    const table=document.querySelector('table');
    const firstRow = document.createElement('tr');
    const c1 = document.createElement('th');
    c1.innerHTML='Flight number';
    firstRow.appendChild(c1);
    const c2 = document.createElement('th');
    c2.innerHTML="Name";
    firstRow.appendChild(c2);
    const c3 = document.createElement('th');
    c3.innerHTML="Details";
    firstRow.appendChild(c3);
    const c4 = document.createElement('th');
    c4.innerHTML="Failures";
    firstRow.appendChild(c4);
    table.appendChild(firstRow);
    data.forEach(row => {
        const nextRow = document.createElement('tr');
        const c1 = document.createElement('td');
        c1.innerHTML=row.flight_number;
        nextRow.appendChild(c1);
        const c2 = document.createElement('td');
        c2.innerHTML=row.name;
        nextRow.appendChild(c2);
        const c3 = document.createElement('td');
        c3.innerHTML=row.details;
        nextRow.appendChild(c3);
        const c4 = document.createElement('td');
        c4.innerHTML=row.failures;
        nextRow.appendChild(c4);
        table.appendChild(nextRow);
    });
    console.log(data);
    }
main();