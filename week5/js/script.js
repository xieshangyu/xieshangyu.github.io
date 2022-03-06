gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 0,
    duration: 8,
    scrollTrigger: {
        trigger: ".square_2",
        start: "top 50%",
        end: "top 20%",
        scrub: 4,
        toggleActions: "restart reverse         none           none",
        //             onEnter onLeave       onEnterback    onleaveBack
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
        },
    }
})


gsap.to(".square_2", {
    x: 100,
    duration: 8,
    scrollTrigger: {
        trigger: ".square_2",
        start: "top 50%",
        end: "top 20%",
        scrub: 4,
        toggleActions: "restart reverse         none           none",
        //             onEnter onLeave       onEnterback    onleaveBack
        markers: {
            startColor: "green",
            endColor: "black",
        },
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
        markers: {
            startColor: "gold",
            endColor: "white",
        },
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
        markers: {
            startColor: "yellow",
            endColor: "purple",
        },
    }
})