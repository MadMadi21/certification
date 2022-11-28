'use strict'

document.addEventListener('DOMContentLoaded', function () {
  // Аккордион
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      if(self.contains.classList('open')) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
      }
    })
  })

  // Мобильное бургер-меню
  const burger = document.querySelector("#burger");
  const headerMenu = document.querySelector("#header-menu");

  if (burger) {
    burger.addEventListener("click", function (e) {
      burger.classList.toggle("burger--active");
      headerMenu.classList.toggle("menu--active");
    });
  }

  // Плавный скролл до якоря с учетом фикс.меню
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector("header").offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      if (burger.classList.contains("burger--active")) {
        burger.classList.remove("burger--active");
        headerMenu.classList.remove("menu--active");
      }

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  // Карусель для отзывов
  new Swiper(".swiper", {
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Модальное окно
  const popupBg = document.querySelector(".popup__bg");
  const popup = document.querySelector(".popup");
  const openPopupButtons = document.querySelectorAll(".open-popup");
  const closePopupButton = document.querySelector(".close-popup");

  openPopupButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      popupBg.classList.add("popup__bg--active");
      popup.classList.add("popup--active");
    });
  });

  closePopupButton.addEventListener("click", () => {
    popupBg.classList.remove("popup__bg--active");
    popup.classList.remove("popup--active");
  });

  document.addEventListener("click", (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove("popup__bg--active");
      popup.classList.remove("popup--active");
    }
  });

  // Маска телефона inputmask
  const telSelector = document.querySelectorAll('input[type="tel"]');
  const inputMask = new Inputmask("+7 (999) 999-99-99");
  for (let i = 0; i < telSelector.length; i++) {
    inputMask.mask(telSelector);
  }

  // Валидация формы
  new window.JustValidate("#form1", {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector[1].inputmask.unmaskedvalue();
          return phone.length === 10;
        },
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните обязательные поля",
        minLength: "Введите 3 и более символа",
        maxLength: "Максимальная длина - 15 символов",
      },
      email: {
        email: "Введите корректный email",
        required: "Заполните обязательные поля",
      },
      tel: {
        required: "Заполните обязательные поля",
        function: "Указан неверный номер",
      },
      checkbox: {
        required: "Заполните обязательные поля",
      },
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert("Отправлено");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      thisForm.reset();
    },
  });

  // Вторая форма
  new window.JustValidate("#form2", {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector[2].inputmask.unmaskedvalue();
          return phone.length === 10;
        },
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните обязательные поля",
        minLength: "Введите 3 и более символа",
        maxLength: "Максимальная длина - 15 символов",
      },
      tel: {
        required: "Заполните обязательные поля",
        function: "Указан неверный номер",
      },
      checkbox: {
        required: "Заполните обязательные поля",
      },
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert("Отправлено");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      thisForm.reset();
    },
  });

  // Третья форма - мод.окно
  new window.JustValidate(".popup", {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector[0].inputmask.unmaskedvalue();
          return phone.length === 10;
        },
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните обязательные поля",
        minLength: "Введите 3 и более символа",
        maxLength: "Максимальная длина - 15 символов",
      },
      tel: {
        required: "Заполните обязательные поля",
        function: "Указан неверный номер",
      },
      checkbox: {
        required: "Заполните обязательные поля",
      },
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert("Отправлено");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      thisForm.reset();
    },
  });

  //   Анимации AOS
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});


  

