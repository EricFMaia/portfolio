function createSlide() {
    return {
        btnLeft: document.getElementById("slideBtnLeft"),
        btnRight: document.getElementById("slideBtnRight"),
        card1: document.getElementById("card1"),
        card2: document.getElementById("card2"),
        card3: document.getElementById("card3"),
        card4: document.getElementById("card4"),
        cards: [
            card1,
            card2,
            card3,
            card4
        ],
        step1: document.getElementById("step1"),
        step2: document.getElementById("step2"),
        step3: document.getElementById("step3"),
        step4: document.getElementById("step4"),
        steps: [
            step1,
            step2,
            step3,
            step4
        ],
        numSlide: 0,

        start() {
            this.clickBtn();
            this.resetSlide();
            this.slideIndicator();
            
        },

        clickBtn() {
            this.btnLeft.addEventListener('click', () => {
                if (this.numSlide >= 1) {
                    this.numSlide--
                    this.assigningStyleCards()

                }
            });
            this.btnRight.addEventListener('click', () => {
                if (this.numSlide < 3) {
                    this.numSlide++
                    this.assigningStyleCards()

                }
            });
        },
        assigningStyleCards() {
            for (index = 0; index <= this.numSlide; index++) {
                if (index < this.numSlide) {
                    this.cards[index].style.opacity = "0";
                    this.cards[index].style.pointereEvents = "all";
                }
                else {
                    this.cards[index].style.opacity = "1";
                    this.cards[index].style.pointereEvents = "all";
                }
            }
        },
        resetSlide() {
            setInterval(() => {
                let viewWidth = window.innerWidth
                if (viewWidth >= 992 && this.numSlide > 0) {
                    for (i = 0; i <= 3; i++) {
                        this.cards[i].style.opacity = "1";
                        this.cards[i].style.pointereEvents = "all";
                    }
                    this.numSlide = 0;
                }
            }, 1000);

        },
        slideIndicator() {
            setInterval(() => {
                for (i = 0; i <= 3; i++) {
                    this.steps[i].classList.remove('SlideIndicator__steps-active')
                }
                this.steps[this.numSlide].classList.add('SlideIndicator__steps-active')
            }, 100)
        }
    }
}
const slide = createSlide();
slide.start();

function createMenuMobile() {
    return {
        popUp: document.getElementById("menuMobile_popUp"),
        
        start(){
            this.click();
            setTimeout(() => {
            window.scrollTo(0, 0)
            }, 200);
        },
        click(){
            document.addEventListener('click',(e) =>{
                const el = e.target;
                if(el.classList.contains('menu-mobile__icon')){
                    this.popUp.style.display = "flex";
                }else if(el.classList.contains('menu-mobile__PopUp__btn')){
                    this.popUp.style.display = "none";

                }
            })
        }
    }
}
const menuMobile = createMenuMobile();
menuMobile.start();
