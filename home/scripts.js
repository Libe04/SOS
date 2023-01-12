// VARIABLES
let percentage = 0;
let animationComplete = false;

// CONSTANTS
const titleTopOffset = 323;

$(function () {
    let animation = new Animations();

    animation.animateTitle();
});

class Animations {
    constructor() {}

    animateTitle() {
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
                let spacingLeft =
                    (23.86 - 23.86 * percentage).toString() + "vw";
                const fontHeight =
                    7 - 7 * percentage < 3.3 ? 3.3 : 7 - 7 * percentage;

                document.getElementById("main-name").style.top = spacingTop;
                document.getElementById("main-name").style.left = spacingLeft;
                document.getElementById("main-name").style.fontSize =
                    fontHeight.toFixed() + "vh";

                // console.log(Math.round(percentage * 100) + "%");
            }
        };
    }
}
