var duration = 250;
var positions = [
    {
        x: "-=40",
        y: "+=25"
    },
    {
        x: "-=40",
        y: "+=10"
    },
    {
        x: "-=40",
        y: "-=10"
    },
    {
        x: "-=40",
        y: "-=25"
    },



    {
        x: "+=40",
        y: "+=25"
    },
    {
        x: "+=40",
        y: "+=10"
    },
    {
        x: "+=40",
        y: "-=10"
    },
    {
        x: "+=40",
        y: "-=25"
    },
];

var catAnimation = anime({
    targets: ".sway",
    easing: "linear",
    loop: true,
    autoplay: true,
    translateX: positions.map(p => ({value: p.x, duration})),
    translateY: positions.map(p => ({value: p.y, duration})),
});


// anime ({
//     targets: ".cat-animation",
    // translateY: [
        // {value: 50, duration: 375 },
        // (value: 100, duration: 375 ),
        // {value: 0, duration: 750 },


    //     {value: 100, duration: 750 },
    //     {value: 0, duration: 750 }

    // ],
    // translateX: [
        // {value: -150, duration: 500 },
        // {value: -200, duration: 1500 },
        
        // {value: -150, duration: 500 },
    //     {value: 0, duration: 1500 }
    // ],
    // rotate: {
    //     value: "-.15turn",
    //     easing: "easeInOutSine"
    // },
//     autoplay: true,
//     loop: true
// });

// anime ({
//     targets: "div.box.blue",
//     translateY: [
//         {value: 200, duration: 500, delay: 1000 },
//         {value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         delay: 1000
//     }
// });

// anime ({
//     targets: "div.box.green",
//     translateY: [
//         {value: 200, duration: 500, delay: 2000 },
//         {value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         delay: 2000
//     }
// });

// anime ({
//     targets: "div.box.yellow",
//     translateY: [
//         {value: 200, duration: 500, delay: 3000 },
//         {value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         delay: 3000
//     }
// });

// var boxes = anime ({
//     targets: "div.box",
//     translateY: [
//         {value: 200, duration: 500 },
//         {value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine"
//     },
//     backgroundColor: "#000",
//     opacity: "0.3",
//     //delay function  takes in the element, the iteration, and the total targets
//     delay: function(element, iteration, totalTargets){return iteration * 1000}, 
//     //won't automatically run on page reload
//     autoplay: false,
//     loop: true
// });

// document.querySelector('#boxes .play').onclick = boxes.play;


// document.querySelector('#boxes .pause').onclick = boxes.pause;