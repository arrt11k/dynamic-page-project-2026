$(function () {

  // EFEKTS 1: rakstāmmašīnas teksts
  var text = 'Katrs lielais panākums sākas ar mazu soli.';
  var i = 0;
  (function type() {
    if (i <= text.length) {
      $('#typed').text(text.substring(0, i++));
      setTimeout(type, 60);
    }
  })();

  // EFEKTS 2: sekcijas parādās ritinot (slideDown + animate)
  function reveal() {
    var bottom = $(window).scrollTop() + $(window).height() - 80;
    $('.reveal:hidden').each(function () {
      if ($(this).offset().top < bottom) {
        $(this).css({ opacity: 0 }).slideDown(500).animate({ opacity: 1 }, 600);
        // EFEKTS 3: skaitļi skaita līdz vērtībai
        $(this).find('.count').each(function () {
          var $n = $(this), to = +$n.data('to');
          $({ v: 0 }).animate({ v: to }, {
            duration: 1800,
            step: function (now) { $n.text(Math.floor(now)); },
            complete: function () { $n.text(to); }
          });
        });
      }
    });
  }
  $(window).on('scroll resize', reveal);
  reveal();

  // EFEKTS 4: akordeons (slideToggle)
  $('.head').on('click', function () {
    var $item = $(this).parent();
    $('.item').not($item).removeClass('open').find('.body').slideUp(250);
    $item.toggleClass('open').find('.body').slideToggle(300);
  });

  // EFEKTS 5: citātu maiņa (fadeOut -> fadeIn)
  var quotes = [
    'Vienīgais veids, kā paveikt lielisku darbu, ir mīlēt to, ko dari.',
    'Panākumi ir mazu pūļu summa, ko atkārto diena no dienas.',
    'Nebaidies sākt no nulles – baidies nesākt vispār.',
    'Tava karjera ir tavs stāsts. Raksti to pats.',
    'Disciplīna šodien ir brīvība rīt.'
  ];
  $('#newQuote').on('click', function () {
    var $q = $('#quote');
    var next = quotes[Math.floor(Math.random() * quotes.length)];
    $q.fadeOut(300, function () {
      $q.text(next).fadeIn(400);
    });
  });

});
