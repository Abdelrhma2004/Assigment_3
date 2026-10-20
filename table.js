document.addEventListener('DOMContentLoaded', () => {
    const people = [
        { name: 'Alex Johnson', age: 22, city: 'New York' },
        { name: 'Sara Ahmed', age: 20, city: 'Cairo' },
        { name: 'Michael Smith', age: 25, city: 'London' },
        { name: 'Fatima Omar', age: 19, city: 'Dubai' },
        { name: 'David Lee', age: 24, city: 'Toronto' }
    ];

    const tableBody = document.getElementById('tableBody');
    const searchBox = document.getElementById('searchBox');
    const sortNameBtn = document.getElementById('sortNameBtn');
    const sortAgeBtn = document.getElementById('sortAgeBtn');

    let sortNameAsc = true;
    let sortAgeAsc = true;

    function renderTable(data) {
        if (!tableBody) return;
        tableBody.innerHTML = '';
        if (data.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted);">No results found</td></tr>`;
            return;
        }
        data.forEach(person => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = people.filter(p =>
                p.name.toLowerCase().includes(query) || p.city.toLowerCase().includes(query)
            );
            renderTable(filtered);
        });
    }

    if (sortNameBtn) {
        sortNameBtn.addEventListener('click', () => {
            people.sort((a, b) => {
                return sortNameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            });
            sortNameAsc = !sortNameAsc;
            renderTable(people);
        });
    }

    if (sortAgeBtn) {
        sortAgeBtn.addEventListener('click', () => {
            people.sort((a, b) => {
                return sortAgeAsc ? a.age - b.age : b.age - a.age;
            });
            sortAgeAsc = !sortAgeAsc;
            renderTable(people);
        });
    }

    renderTable(people);
});