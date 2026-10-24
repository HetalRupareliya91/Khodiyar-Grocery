// Khodiyar Grocery - My Account page
(async function () {
  const box = document.getElementById('content');
  box.innerHTML = '<p class="empty">Loading...</p>';
  try {
    const rows = await api.get('/addresses');
    if (!rows.length) {
      box.innerHTML = '<p class="empty">Nothing to show yet.</p>';
      return;
    }
    box.innerHTML = rows.map(function (r) {
      const title = r.name || r.title || r.code || ('#' + r.id);
      const info = r.price ? 'Rs. ' + r.price : (r.status || r.message || r.city || '');
      return '<div class="card"><h3>' + title + '</h3><p>' + info + '</p></div>';
    }).join('');
  } catch (err) {
    box.innerHTML = '<p class="error">Could not load data. Is the server running?</p>';
  }
})();
