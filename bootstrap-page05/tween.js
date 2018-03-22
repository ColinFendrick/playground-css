$(document).ready(function() {
  const timelines = {
    title: new TimelineLite(),
    pq: new TimelineLite(),
    mq: new TimelineLite
  }

  //Stuff on initial loading
  $('.intro').css({ "display": "flex" });
  timelines.title.to("html, body", 0.75, { scrollTop: 200 })
    .to("#main-title, .intro", 1.5, { opacity: 1 })
    .to("#subtitle", 1.25, { opacity: 1 })
    .to("#begin-btn", 1, { opacity: 1 });

  // Handling the clicks and moving to next item
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
        
        // Animating the fade-ins for each element
        const id = target[0].id
        if (id === 'pq' || id === 'mq') {
          timelines[id].to(`#${id}, #${id}-title`, 1.5, { opacity: 1 })
          .to(`#${id}-forms`, 1.5, { opacity: 1 })
        } else {
          TweenLite.to((target), 2, { opacity: 1 });
        }
        console.log(target, $(target))

        // Scrolls to the element & focuses it
        TweenLite.to($('html, body'), 1.5, {
          scrollTop: target.offset().top - 200,
          onComplete: function() {
            console
            $(target).focus();
            if (target.is(":focus")) {
              return false;
            } else {
              target.attr('tabindex', '-1');
              target.focus();
            }
          }
        })
      }
    }
  });
});
