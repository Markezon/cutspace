console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'minimum of 2 characters'
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.input-policy', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Please agree'
    }
    ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });


  
  const slider = document.querySelector('.swiper-container');

  let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 50,
      }
    },
  });

  //hamburger

  const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
  closeElem2 = document.querySelector('.overlay__close');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    hamburger.classList.add('rotate');
  });

  closeElem.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('rotate');
  });

  closeElem2.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('rotate');
  });



  

$(document).ready(function(){


  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.rates__item-first').eq(i).toggleClass('rates__item-first_active');
        $('.rates__item-second').eq(i).toggleClass('rates__item-second_active');
      })
    });
  };

  toggleSlide('.rates__item-btn');
  toggleSlide('.rates__item-btnback');


  //Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks').fadeOut('slow');
	});



  //scroll

  $(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	
	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

});
  
  
  
  
  