$(document).ready(function () {

  var progress = 10; // progresa josla sākas ar 10%

  // 1. fadeIn - virsraksts parādās pakāpeniski
  $("h1").fadeIn(2000);

  // 2. slideDown - apraksts iebīdās pēc 1 sekundes
  $("#apraksts").delay(1000).slideDown(1000);

  // 3. slideToggle - padomu saraksts parādās / pazūd
  $("#padomuPoga").click(function () {
    $("#padomi").slideToggle();
  });

  // 4. fadeTo - kartīte kļūst caurspīdīga, kad uzbrauc ar peli
  $(".kartite").hover(
    function () { $(this).fadeTo("fast", 0.4); },
    function () { $(this).fadeTo("fast", 1); }
  );

  // 5. animate - progresa josla pieaug
  $("#progressPoga").click(function () {
    progress = Math.min(progress + 10, 100); // nepārsniedz 100%
    $("#progress").stop().animate({ width: progress + "%" }, 500);
  });

});
