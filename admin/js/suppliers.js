// Khodiyar Grocery Admin - Suppliers
(function () {
  const ENDPOINT = '/suppliers';
  const tbody = document.querySelector('#table tbody');

  function row(r) {
    const name = r.name || r.title || r.code || '-';
    const info = r.status || r.price || r.amount || r.role || '';
    return '<tr><td>' + r.id + '</td><td>' + name + '</td><td>' + info + '</td>' +
      '<td><button class="btn-danger" data-id="' + r.id + '">Delete</button></td></tr>';
  }

  async function load() {
    try {
      const rows = await api.get(ENDPOINT);
      tbody.innerHTML = rows.length ? rows.map(row).join('') : '<tr><td colspan="4">No records found</td></tr>';
    } catch (e) {
      tbody.innerHTML = '<tr><td colspan="4">API not reachable</td></tr>';
    }
  }

  tbody.addEventListener('click', async function (e) {
    const id = e.target.dataset.id;
    if (id && confirm('Delete record #' + id + '?')) {
      await api.send(ENDPOINT + '/' + id, 'DELETE');
      load();
    }
  });

  load();
})();
