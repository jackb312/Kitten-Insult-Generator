// anime ({
//     targets: "div.box.red",
//     translateY: [
//         {value: 200, duration: 500 },
//         {value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine"
//     }
// });
​
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
​
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
​
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
​
var boxes = anime ({
    targets: "div.box",
    translateY: [
        {value: 200, duration: 500 },
        {value: 0, duration: 500 }
    ],
    rotate: {
        value: "1turn",
        easing: "easeInOutSine"
    },
    backgroundColor: "#000",
    opacity: "0.3",
    //delay function  takes in the element, the iteration, and the total targets
    delay: function(element, iteration, totalTargets){return iteration * 1000}, 
    //won't automatically run on page reload
    autoplay: false,
    loop: true
});
​
document.querySelector('#boxes .play').onclick = boxes.play;
​
​
document.querySelector('#boxes .pause').onclick = boxes.pause;