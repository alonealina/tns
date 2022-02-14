$(function() {
  $('#header').load('inc/header.html', function () {
  });

  $('#header_en').load('inc/header_en.html', function () {
  });

  $('#header_ko').load('inc/header_ko.html', function () {
  });

  $('#header_ch').load('inc/header_ch.html', function () {
  });

  $('#header_sv_ja').load('inc/header_sv_ja.html', function () {
  });

  $('#header_sv_en').load('inc/header_sv_en.html', function () {
  });

  $('#header_sv_ko').load('inc/header_sv_ko.html', function () {
  });

  $('#header_sv_ch').load('inc/header_sv_ch.html', function () {
  });

  $('#header_pr_ja').load('inc/header_pr_ja.html', function () {
  });

  $('#header_pr_en').load('inc/header_pr_en.html', function () {
  });

  $('#header_pr_ko').load('inc/header_pr_ko.html', function () {
  });

  $('#header_pr_ch').load('inc/header_pr_ch.html', function () {
  });

  $('#sidebar').load('inc/sidebar.html', function () {
  });

  $('#footer').load('inc/footer.html', function () {
    $.getScript('assets/js/main.js');
  });
});