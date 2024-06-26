function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locoScroll()

function cursorEffect(){
    let page1Content = document.querySelector("#page1-content")
let cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",(move)=>{
   gsap.to(cursor,{
    x:move.x,
    y:move.y
   })
})

page1Content.addEventListener("mouseenter",(move)=>{
    gsap.to(cursor,{
     scale:1,
     opacity:1
    })
 })

 page1Content.addEventListener("mouseleave",(move)=>{
    gsap.to(cursor,{
     scale:0,
     opacity:0
    })
 })

}
cursorEffect();

function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2
        }
    })
}
page2Animation()



function page4Animation(){
    gsap.from(".elems h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2
        }
    })
}
page4Animation()

function page4topAnimation(){
gsap.from(".ino2 h3",{
    y:120,
    stagger:0.25,
    duration:0.5,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 100%",
        end: "top 20%",
        // markers: true,
        scrub: 2
    }
})
}
page4topAnimation()

function sliderFunc(){
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        loop:true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
          },
        
      });
}
sliderFunc()

var tl = gsap.timeline()

tl.from("#loader h3",{
       x:40,
       opacity:0,
       duration:1,
       stagger:0.1
})



tl.from("#loader img",{
    x:-40,
    y:20,
    opacity:0,
    duration:1,
    stagger:0.1
    
})

tl.to("#load",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.1 
})

tl.to("#loader",{
    opacity:0,
})

tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    delay:-0.5,
    duration:0.5
})

tl.to("#loader",{
    display:"none"
})


function page3Animation(){
    gsap.from("#page3-top h2",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 100%",
            end: "top 37%",
            // markers: true,
            scrub: 2
        }
    })
}
page3Animation()

const targetDate = new Date("June 31, 2024 23:59:59").getTime();
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML =   hours + "h: "
    + minutes + "m: " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }, 1000);



