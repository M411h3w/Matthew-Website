document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['home', 'games', 'about', 'contact'],
        menu: '#navbarNav',
        scrollOverflow: true,
        afterLoad: function (origin, destination, direction) {
            var headerNavLinks = document.querySelectorAll('.navbar-nav .nav-link');
            headerNavLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            headerNavLinks[destination.index].classList.add('active');

            // Animation handling for sections
            var section = destination.item.querySelector('.animate__animated');
            if (section) {
                section.classList.add('animate__fadeInUp');
                section.classList.remove('animate__fadeInDown');
            }
        }
    });

    // Smooth scrolling with jQuery fallback
    $('nav a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = $(target).offset().top;

        $('html, body').animate({
            scrollTop: offset
        }, 800);
    });

    // Navbar background change on scroll
    document.addEventListener('DOMContentLoaded', function () {
        new fullpage('#fullpage', {
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'right',
            anchors: ['home', 'games', 'about', 'contact'],
            menu: '#navbarNav',
            scrollOverflow: true,
            afterLoad: function (origin, destination, direction) {
                var headerNavLinks = document.querySelectorAll('.navbar-nav .nav-link');
                headerNavLinks.forEach(function (link) {
                    link.classList.remove('active');
                });
                headerNavLinks[destination.index].classList.add('active');
    
                // Animation handling for sections
                var section = destination.item.querySelector('.animate__animated');
                if (section) {
                    section.classList.add('animate__fadeInUp');
                    section.classList.remove('animate__fadeInDown');
                }
            }
        });
    
        // Smooth scrolling with jQuery fallback
        $('nav a').on('click', function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            var offset = $(target).offset().top;
    
            $('html, body').animate({
                scrollTop: offset
            }, 800);
        });
    
        // Navbar background change on scroll
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Initialize WOW.js for animations
    new WOW().init();
});

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("openModalBtn").getElementsByTagName("img")[0];
var modalImg = document.getElementById("myModal").getElementsByTagName("img2")[0];
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var mailtoLink = 'mailto:reyesjohnmatthew06@gmail.com' +
                     '?subject=Feedback%20from%20Your%20Website' +
                     '&body=' + encodeURIComponent('Name: ' + name + '\n\nEmail: ' + email + '\n\nMessage: ' + message);
    
    window.location.href = mailtoLink;
});})

