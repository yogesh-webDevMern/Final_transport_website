var bar = document.querySelector("#bar");
var Menu = document.querySelector(".nav ul");
var overlay = document.querySelector(".overlay")
var heading1=document.querySelector(".heading-1");
var heading2=document.querySelector(".heading-2");
var heading3=document.querySelector(".heading-3");
var header = document.querySelector("#header");
var count1=0;
var count2=0;
var count3=0;
bar.addEventListener(
    "click",
    (e)=>
    {
Menu.classList.toggle("open-menu");
overlay.classList.toggle("show-overlay");
e.target.classList.toggle("fa-bars");
e.target.classList.toggle("fa-times");
document.body.classList.toggle("overflow");
    }
);

function getData() {
    const interval1 = setInterval(() => {
        if (count1 < 195) {
            count1++;
            heading1.innerHTML = count1 + "+";
        } else {
            clearInterval(interval1); // Stop the interval once the target is reached
        }
    }, 20); // Slowing down the interval to make it more manageable
}
function getData2() {
    const interval2 = setInterval(() => {
        if (count2 < 250) {
            count2++;
            heading2.innerHTML = count2 + "+";
        } else {
            clearInterval(interval2); // Stop the interval once the target is reached
        }
    }, 20); // Slowing down the interval to make it more manageable
}
function getData3() {
    const interval3 = setInterval(() => {
        if (count3 < 350) {
            count3++;
            heading3.innerHTML = count3 + "+";
        } else {
            clearInterval(interval3); // Stop the interval once the target is reached
        }
    }, 20); // Slowing down the interval to make it more manageable
}
let triggered = false;
if (heading1 && heading2 && heading3) {  // Ensure elements exist before adding event listener
    window.addEventListener('scroll', () => {
        var scrollPosition = window.scrollY + window.innerHeight;
        var headingPosition = heading1.offsetTop;

        if (scrollPosition >= headingPosition && !triggered) {
            triggered = true; // Prevent further triggers
            getData();
            getData2();
            getData3();
        }
    });
}
// Show the form when the page loads
// window.onload = function () {
//     document.getElementById("contact-form").classList.remove("opacity-0");
// };

// Function to close the form
function closeForm() {
    document.getElementById("contact-form").classList.add("opacity-0");
}

gsap.from(".start-form",
    {
        scale:0,
        duration:2,
        opacity:0,
        x:1200
    }
)


function init()
{
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
// init();
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    const boxForm = document.querySelector(".box-form");
    const iconMost = document.querySelector(".iconmost");

    // Only run this script if the elements exist
    if (boxForm && iconMost) {
        console.log("boxForm and iconMost found. Running script.");

        setTimeout(function () {
            console.log("Showing box-form");
            boxForm.style.display = "block";
        }, 1000);

        iconMost.addEventListener("click", function () {
            console.log("iconmost clicked, hiding box-form");
            boxForm.style.display = "none";
        });
    } else {
        console.warn("Warning: .box-form or .iconmost not found on this page. Skipping script.");
    }
});




document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("#header");
    console.log(header);
if(header)
{
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}
  
});


let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
    // Animation for Mobile (max-width: 768px)
    gsap.from("#scrollanim",
        {
           x:200,
            opacity:0,
            duration:0.5,
            scrollTrigger:
            {
                trigger:"#scrollanim",
                scroller:"body",
                start:"top 60%",
                end:"top 30%",
                scrub:3
            }
        }
    )
    gsap.from("#scrollanim2",
        {
           x:-200,
            opacity:0,
            duration:0.5,
            scrollTrigger:
            {
                trigger:"#scrollanim2",
                scroller:"body",
                start:"top 60%",
                end:"top 30%",
                scrub:3
            }
        }
    )
    gsap.from("#scrollanim3",
        {
           x:200,
            opacity:0,
            duration:0.5,
            scrollTrigger:
            {
                trigger:"#scrollanim3",
                scroller:"body",
                start:"top 60%",
                end:"top 30%",
                scrub:3
            }
        }
    )
    gsap.from("#scrollingtext",
        {
         scale:0.5,
            duration:0.5,
            scrollTrigger:
            {
                trigger:"#scrollingtext",
                scroller:"body",
                scrub:3
            }
        }
    )
    gsap.from("#whatwe",
        {
            scale:0.6,
            duration:1,
            scrollTrigger:
            {
                trigger:"#whatwe",
                scroller:"body",
                start:"top 60%",
                end:"top 30%",
                scrub:3
            }
        }
    )
       gsap.from("#aboutimg",
        {
            width:"300px",
            duration:0.4,
            scrollTrigger:
            {
                trigger:"#aboutimg",
                scroller:"body",
                start:"top 60%",
                end:"top 30%",
                scrub:3
            }
        }
    )
    gsap.from("#aboutkamalcarrier",
        {
            scale:0.5,
        opacity:0,
            duration:1,
            scrollTrigger:
            {
                trigger:"#aboutimg",
                scroller:"body",
            }
        }
    )
});

mm.add("(min-width: 769px)", () => {
    // Animation for Mobile (max-width: 768px)
    gsap.from("#scrollanim",
        {
          scale:0,
            opacity:0.5,
            duration:1.5,
            scrollTrigger:
            {
                trigger:"#scrollanim",
                scroller:"body",
                end:"top 50%",
                scrub:3
            }
        }
    )
    gsap.from("#scrollanim2",
        {
          scale:0,
            opacity:0.5,
            duration:1.5,
            scrollTrigger:
            {
                trigger:"#scrollanim2",
                scroller:"body",
                end:"top 50%",
                scrub:3
            }
        }
    )
    gsap.from("#scrollanim3",
        {
           x:200,
           scale:0,
            opacity:0.5,
            duration:1.5,
            scrollTrigger:
            {
                trigger:"#scrollanim3",
                scroller:"body",
                end:"top 50%",
                scrub:3
            }
        }
    )
});
