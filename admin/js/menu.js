// Khodiyar Grocery Admin - sidebar menu
var MENU = [
  ['index', 'Dashboard'],
  ['products', 'Products'],
  ['categories', 'Categories'],
  ['brands', 'Brands'],
  ['inventory', 'Inventory'],
  ['suppliers', 'Suppliers'],
  ['orders', 'Orders'],
];
var current = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
document.getElementById('menu').innerHTML = MENU.map(function (m) {
  return '<a href="' + m[0] + '.html"' + (m[0] === current ? ' class="active"' : '') + '>' + m[1] + '</a>';
}).join('');
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('open');
});
