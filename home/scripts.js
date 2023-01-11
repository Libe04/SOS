// VARIABLES

let percentage = 0;
let animationComplete = false;

// CONSTANTS
const titleTopOffset = 323;

$(function () {
    window.onscroll = () => {
        if (window.scrollY < titleTopOffset) {
            percentage = window.scrollY / titleTopOffset;
            animationComplete = false;
        } else {
            if (percentage == 1) {
                animationComplete = true;
            } else {
                percentage = 1;
            }
        }

        if (!animationComplete) {
            let spacingTop = (30.03 - 30.03 * percentage).toString() + "vh";
            let spacingLeft = (23.86 - 23.86 * percentage).toString() + "vw";
            const fontHeight =
                68 - 68 * percentage < 32 ? 32 : 68 - 68 * percentage;

            document.getElementById("main-name").style.top = spacingTop;
            document.getElementById("main-name").style.left = spacingLeft;
            document.getElementById("main-name").style.fontSize =
                fontHeight.toFixed() + "px";

            // console.log(Math.round(percentage * 100) + "%");
        }
    };
});
