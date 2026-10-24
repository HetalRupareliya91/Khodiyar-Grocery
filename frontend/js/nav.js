// Khodiyar Grocery - storefront navigation
var NAV_LINKS = [
  ['index', 'Fresh Groceries Delivered'],
  ['shop', 'Shop All Products'],
  ['categories', 'Categories'],
  ['brands', 'Brands'],
];
document.getElementById('nav').innerHTML = NAV_LINKS.map(function (l) {
  return '<a href="' + l[0] + '.html">' + l[1] + '</a>';
}).join('');
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('open');
});
