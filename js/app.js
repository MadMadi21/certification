'use strict'

document.addEventListener('DOMContentLoaded', function () {

   // Аккордион
   document.querySelector('.faq-accordion').addEventListener('click', (event) => {
         if (event.target.closest('.faq-accordion__item')) {
            event.target.closest('.faq-accordion__item')
            .classList.toggle('faq-accordion__item--active');
         }
      });

   // Мобильное бургер-меню
   const burger = document.querySelector('#burger');
   const headerMenu = document.querySelector('#header-menu');

   if(burger) {
      burger.addEventListener('click', function(e) {
      burger.classList.toggle('burger--active');
      headerMenu.classList.toggle('menu--active');
   })
   }


   // Плавный скролл до якоря с учетом фикс.меню
   document.querySelectorAll('a[href*="#"]').forEach(link => {

      link.addEventListener('click', function(e) {
         e.preventDefault();

         let href = this.getAttribute('href').substring(1);

         const scrollTarget = document.getElementById(href);
         const topOffset = document.querySelector('header').offsetHeight;
         const elementPosition = scrollTarget.getBoundingClientRect().top;
         const offsetPosition = elementPosition - topOffset;

         if(burger.classList.contains('burger--active')) {
            burger.classList.remove('burger--active');
            headerMenu.classList.remove('menu--active');
         }

         window.scrollBy({
               top: offsetPosition,
               behavior: 'smooth'
         });
      });
   });

   // Карусель для отзывов
   new Swiper('.swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });

   // Модальное окно
   const popupBg = document.querySelector('.popup__bg');
   const popup = document.querySelector('.popup');
   const openPopupButtons = document.querySelectorAll('.open-popup'); 
   const closePopupButton = document.querySelector('.close-popup'); 

   openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        popupBg.classList.add('popup__bg--active'); 
        popup.classList.add('popup--active'); 
      })
   });

   closePopupButton.addEventListener('click',() => {
      popupBg.classList.remove('popup__bg--active'); 
      popup.classList.remove('popup--active');
   });

   document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('popup__bg--active'); 
        popup.classList.remove('popup--active'); 
      }
   });

   // Маска телефона inputmask
   const telSelector = document.querySelectorAll('input[type="tel"]');
   const inputMask = new Inputmask('+7 (999) 999-99-99');
   for(let i=0; i<telSelector.length; i++) {
      inputMask.mask(telSelector);
   }
   
   // Валидация формы
   new window.JustValidate('#form1', {
      rules: {
         tel: {
            required: true,
            function: () => {
               const phone = telSelector[1].inputmask.unmaskedvalue();
               return phone.length === 10;
            }
         },
         checkbox: {
            required: true
         }
      },
      messages: {
         name: {
            required: 'Заполните обязательные поля',
            minLength: 'Введите 3 и более символа',
            maxLength: 'Максимальная длина - 15 символов'
         },
         email: {
            email: 'Введите корректный email',
            required: 'Заполните обязательные поля'
         },
         tel: {
            required: 'Заполните обязательные поля',
            function: 'Указан неверный номер'
         },
         checkbox: {
            required: 'Заполните обязательные поля'
         }
      },
      submitHandler: function(thisForm) {
         let formData = new FormData(thisForm);

         let xhr = new XMLHttpRequest();

         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               alert('Отправлено');
            }
            }
         }

         xhr.open('POST', 'mail.php', true);
         xhr.send(formData);

         thisForm.reset();
      }
   })

   // Вторая форма
   new window.JustValidate('#form2', {
      rules: {
         tel: {
            required: true,
            function: () => {
               const phone = telSelector[2].inputmask.unmaskedvalue();
               return phone.length === 10;
            }
         },
         checkbox: {
            required: true
         }
      },
      messages: {
         name: {
            required: 'Заполните обязательные поля',
            minLength: 'Введите 3 и более символа',
            maxLength: 'Максимальная длина - 15 символов'
         },
         tel: {
            required: 'Заполните обязательные поля',
            function: 'Указан неверный номер'
         },
         checkbox: {
            required: 'Заполните обязательные поля'
         }
      },
      submitHandler: function(thisForm) {
         let formData = new FormData(thisForm);

         let xhr = new XMLHttpRequest();

         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               alert('Отправлено');
            }
            }
         }

         xhr.open('POST', 'mail.php', true);
         xhr.send(formData);

         thisForm.reset();
      }
   })

   // Третья форма - мод.окно
   new window.JustValidate('.popup', {
      rules: {
         tel: {
            required: true,
            function: () => {
               const phone = telSelector[0].inputmask.unmaskedvalue();
               return phone.length === 10;
            }
         },
         checkbox: {
            required: true
         }
      },
      messages: {
         name: {
            required: 'Заполните обязательные поля',
            minLength: 'Введите 3 и более символа',
            maxLength: 'Максимальная длина - 15 символов'
         },
         tel: {
            required: 'Заполните обязательные поля',
            function: 'Указан неверный номер'
         },
         checkbox: {
            required: 'Заполните обязательные поля'
         }
      },
      submitHandler: function(thisForm) {
         let formData = new FormData(thisForm);

         let xhr = new XMLHttpRequest();

         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               alert('Отправлено');
            }
            }
         }

         xhr.open('POST', 'mail.php', true);
         xhr.send(formData);

         thisForm.reset();
      }
   })

});

// Карта яндекс
   ymaps.ready(init);
   function init() {
      let myMap = new ymaps.Map('yandexMap', {
         center: [55.706873069029804,37.80265250000001],
         zoom: 16,
      });
   }

////////////////////////////////////////////////////
   // const form = document.getElementById('form');
   // const formReq = document.querySelectorAll('.req');
   // const inputEmail = document.getElementById('email');
   // const inputPhone = document.getElementById('phone');
   // const inputCheckbox = document.getElementById('politic');

   // function validateEmail(email) {
   //    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
   // }
   
   // form.onsubmit = function () {
   //    let emailVal = inputEmail.value;
   //    let phoneVal = inputPhone.value;
   //    let emptyInputs = Array.from(formReq).filter(input => input.value === '');


   //    formReq.forEach(function(input) {
   //       if(input.value === '') {
   //          input.classList.add('error');
   //       } else {
   //          input.classList.remove('error');
   //       }
   //    });

   //    if(emptyInputs.length !== 0) {
   //       console.log('error');
   //       return false;
   //    }

   //    if(!validateEmail(emailVal)) {
   //       console.log('error email');
   //       inputEmail.classList.add('error');
   //       return false;
   //    } else {
   //       inputEmail.classList.remove('error');
   //    }

   //    if(!inputCheckbox.checked) {
   //       console.log('error checkbox');
   //       inputCheckbox.classList.add('error');
   //       return false;
   //    } else {
   //       inputCheckbox.classList.remove('error');
   //    }
   // }
 
