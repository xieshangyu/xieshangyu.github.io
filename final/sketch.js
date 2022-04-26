// citation: https://www.youtube.com/watch?v=wLUJ9VNzZXo&ab_channel=DevEd
// Apple Airpod Pro Javascript Animation Tutorial

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
        duration: 2000,
        triggerElement: intro,
        triggerHook: 0
    })
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnim)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);










gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 50,
    duration: 8,
    scrollTrigger: {
        trigger: ".square_2",
        start: "top 80%",
        end: "top 60%",
        scrub: 4,
        toggleActions: "restart reverse         none           none",
        // onEnter onLeave onEnterback onleaveBack
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
        },
    }
})


gsap.to(".square_2", {
    x: 50,
    duration: 8,
    scrollTrigger: {
        trigger: ".square_2",
        start: "top 80%",
        end: "top 60%",
        scrub: 4,
        toggleActions: "restart reverse         none           none",
        //             onEnter onLeave       onEnterback    onleaveBack
        // markers: {
        //     startColor: "green",
        //     endColor: "black",
        // },
    }
})


gsap.to(".square_3", {
    x: 0,
    duration: 8,
    scrollTrigger: {
        trigger: ".square_2",
        start: "top 50%",
        end: "top 20%",
        scrub: 4,
        toggleActions: "restart reverse         none           none",
        //             onEnter onLeave       onEnterback    onleaveBack
        // markers: {
        //     startColor: "gold",
        //     endColor: "white",
        // },
    }
})


gsap.to(".square_4", {
    x: 100,
    duration: 8,
    scrollTrigger: {
        trigger: ".square_2",
        start: "top 50%",
        end: "top 20%",
        scrub: 4,
        toggleActions: "restart reverse         none           none",
        //             onEnter onLeave       onEnterback    onleaveBack
        // markers: {
        //     startColor: "yellow",
        //     endColor: "purple",
        // },
    }
})