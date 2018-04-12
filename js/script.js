/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
 particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
     console.log('callback - particles.js config loaded');
   });

    // $(".animsition").animsition({
    //   inClass: 'fade-in-up-sm',
    //   inDuration: 1500,
    //   linkElement: '.animsition-link',
    //   browser: [ 'animation-duration', '-webkit-animation-duration'],
    // });

    // $(".animsition").animsition({
    //   inClass: 'fade-in-up-sm',
    //   inDuration: 2500,
    //   linkElement: '#animsition-link1',
    //   browser: [ 'animation-duration', '-webkit-animation-duration'],
    // });

     window.sr = ScrollReveal({delay :20});
     sr.reveal('#box1', { origin: 'bottom',distance: '100px',easing:'ease',duration: 1500,delay: 50,mobile: true});
     sr.reveal('#box2', { origin: 'bottom',distance: '100px',easing:'ease',duration: 2500,delay: 50,mobile: true});
     sr.reveal('#box3', { origin: 'bottom',distance: '100px',easing:'ease',duration: 3500,delay: 50,mobile: true});

     sr.reveal('.left', { origin: 'left',distance: '100px',duration: 1500,easing:'ease',delay: 50,mobile: true});
     sr.reveal('.center', { origin: 'bottom',distance: '100px',duration: 1500,easing:'ease',delay: 50,mobile: true});
     sr.reveal('.right', { origin: 'right',distance: '100px',duration: 1500,easing:'ease',delay: 50,mobile: true});


    //  window.blog = ScrollReveal({reset:true,delay:20,opacity: 0,easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',mobile: true,useDelay: 'once',distance:'50px'})
    sr.reveal('.blog',{origin:'bottom',easing: 'ease',mobile: true,distance:'100px',duration: 1500})