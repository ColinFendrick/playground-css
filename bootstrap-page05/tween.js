const tl_title = new TimelineLite();

tl_title.to("html, body", 1, { scrollTop: 0 })
.to("#main-title, .heading", 1.5, { opacity: 1 })
.to("#subtitle", 1, { opacity: 1 })
.to("#begin-btn", 1, { opacity: 1 })

window.onload = () => {
  tl_title.play();
  $('.heading').css({ "display": "flex" })
}

const tl_personalForms = new TimelineLite();

tl_personalForms.to("#personalForms-title", 1, { opacity: 1})
.to(".personalForms", 1.5, {opacity: 1})

// Clicking one answer will scroll to the next question
$(document).ready(function() {
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        event.preventDefault();
        $(target).css({ "display": "flex" })

        TweenLite.to($(target), 1.5, { opacity: 1 })

        // Scrolls to the element & focuses it
        TweenLite.to($('html, body'), 1.5, {
          scrollTop: target.offset().top,
          onComplete: function() {
            $(target).focus();
            if ($(target).is(":focus")) {
              return false;
            } else {
              $(target).attr('tabindex', '-1');
              $(target).focus();
            }
          }
        })
      }
    }
  })
})
