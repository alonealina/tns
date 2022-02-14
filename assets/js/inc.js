$(function() {
  $('#header').load('inc/header.html', function () {
  });

  $('#header_page').load('inc/header_page.html', function () {
  });

  $('#sidebar').load('inc/sidebar.html', function () {
  });

  $('#footer').load('inc/footer.html', function () {
    $.getScript('assets/js/main.js');
  });
});