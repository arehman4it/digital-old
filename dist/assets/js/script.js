// Canvas script Start
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-105392568-1', 'auto');
ga('send', 'pageview');
// Canvas script end
//team section animation start
const clamp = (min, number, max) => Math.min(max, Math.max(number, min));
let prevX = 0;

document.querySelectorAll(".member").forEach((member) => {
  const img = member.querySelector(".member-photo");
  let timeout;

  member.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);

    const x = e.clientX - member.getBoundingClientRect().left - img.clientWidth / 2;
    const y = e.clientY - member.getBoundingClientRect().top - img.clientHeight / 2;
    const rotate = e.clientX - prevX;
    prevX = e.clientX;
    
    // console.log({y, x, rotate});

    requestAnimationFrame(() => {
      img.style.translate = `${x}px ${y}px`;
      img.style.rotate = clamp(-8, rotate * 2, 8) + "deg";
    });

    timeout = setTimeout(() => {img.style.rotate = "0deg"}, 250);
  });

  member.addEventListener("mouseenter", () => {
    setTimeout(() => {
      img.style.transition = "1200ms cubic-bezier(0.23, 1, 0.320, 1)";
      img.style.opacity = 1;
    }, 1);
  });

  member.addEventListener("mouseleave", () => {
    img.style.transition = "none";
    img.style.opacity = 0;
  });
});
//team section animation end
// Aos Script Start
AOS.init();
// Aos Script End
// text animation start
class TextAnimator {
    constructor(selector, options) {
        this.text = document.querySelector(selector);
        this.strText = this.text.textContent.trim();
        this.splitText = this.strText.split("");
        this.text.textContent = "";
        this.options = options || {};
        this.margin = this.options.margin || '0px';
        this.delay = this.options.delay || 0;
        this.class = this.options.class || 'text-span';
    }
    animate() {
        for (let i = 0; i < this.splitText.length; i++) {
            if (this.splitText[i] === " ") {
                this.text.innerHTML += "&nbsp;";
            } else {
                this.text.innerHTML += "<span class='"+ this.class + "' style='margin-right:" + this.margin + ";animation-delay:" + (i * this.delay) + "ms;'><span class='fade-in' style='animation-delay:" + (i * this.delay) + "ms;'>" + this.splitText[i] + "</span></span>";
            }
        }
    }   
}
const animator = new TextAnimator('.text-animation', {
    margin: '5px',
    delay: 100,
    class: "text-animation__letter"
});
animator.animate();
// Text animation end
// Nav bar start
// Gets the Mobile Nav icon by its ID
let bars = document.getElementById('bars');
// Gets the Mobile Nav container
let mobileMenu = document.getElementById('mobileMenu');
// Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
bars.addEventListener('click', function(){
  mobileMenu.classList.toggle('show');
  bars.classList.toggle('fa-times');
});


document.addEventListener('DOMContentLoaded', function() {
  const mobileIcon = document.getElementById('mobileIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
  });
});
// navbar end