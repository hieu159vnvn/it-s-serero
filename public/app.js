function headerDropX() {
  var x = document.getElementById("header-dropdown");
  if (x.className === "header-dropdown") {
    x.className += " d-none";
  } else {
    x.className = "header-dropdown";
  }
}
$('.navbar-toggler').on("click", function () {
  var iconMenu = document.getElementById("iconMenu");
  var iconClose = document.getElementById("iconClose");
  if (iconMenu.className === "d-block") {
    iconMenu.className = "d-none";
    iconClose.className = "d-block";
  } else {
    iconMenu.className = "d-block";
    iconClose.className = "d-none";
  }
});
// offre
$('.offre .wrap-offre .left .item .button').on("click", function () {
  var parent = document.getElementById("offreparent");
  var child = document.getElementById("offrechild");
  if (child.className === "d-none") {
    parent.className = "d-none";
    child.className = "d-block";
  } else {
    parent.className = "d-block";
    child.className = "d-none";
  }
});
function offreReturn() {
  var parent = document.getElementById("offreparent");
  var child = document.getElementById("offrechild");
  if (parent.className === "d-none") {
    parent.className = "d-block";
    child.className = "d-none";
  }
}
// offre

function conseilClick() {
  var on = document.getElementById("conseil");
  var off = document.getElementById("conseil-off");
  if (on.className === "conseil") {
    on.classList.add("d-none");
    off.classList.remove("d-none");
  } else {
    on.className = "conseil";
    off.className = "conseil-off d-none";
  }
}
//inputUpload
$('#uploadCV').change(function(){
  filename = this.files[0].name;
  document.getElementById('spanUpload').innerHTML = filename;
});
//swiper
$(document).ready((function () {
  new Swiper('.reassurance .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 50,
        pagination: false,
        allowTouchMove: false,
      },
    }
  })
  new Swiper('.prix .swiper-container', {
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 143,
        centeredSlides: false,
        grabCursor: false,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

    }
  })
  new Swiper('.avis .swiper-container', {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 53,
        allowTouchMove: false,
        pagination: false,
      },

    }
  })
  new Swiper('.blog .swiper-container', {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 32,
        allowTouchMove: false,
        pagination: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

    }
  })
  new Swiper('.autres .swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 32,
        allowTouchMove: false,
        pagination: false,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
        allowTouchMove: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 50,
        allowTouchMove: true,
      },

    }
  })
  new Swiper('.service-second .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
        pagination: false,
      },
    }
  })
  new Swiper('.projets .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: false,
        pagination: false,
      },

    }
  })
  new Swiper('.autres-third .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove:true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        allowTouchMove:false,
        pagination:false,
        spaceBetween:84,
      },
    }
  })
  new Swiper('.offre .swiper-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 10,

    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
        direction: "vertical",
        freeMode: true, 
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      },
    }
  })
}));