const maxWidth = window.innerWidth - 100;
const maxHeight = window.innerHeight - 100;

function boom(element) {
  let div = document.createElement(`div`);
  div.innerText = `БЭМС`;
  div.classList.add(`boom`);
  block.append(div);
  setTimeout(() => div.remove(), 2000);
}

let block = document.createElement(`div`);
block.classList.add(`block`);
let body = document.querySelector(`body`);

body.append(block);

const STEP = 10;

const KEYS = {
  37: (element) => {
    if (element.offsetLeft > 0) {
      element.style.left = `${element.offsetLeft - STEP}px`;
    } else if (element.offsetLeft <= 0) {
      element.style.left = `${element.offsetLeft + STEP * 2}px`;
      boom(element);
    }
  },
  39: (element) => {
    if (element.offsetLeft < maxWidth) {
      element.style.left = `${element.offsetLeft + STEP}px`;
    } else if (element.offsetLeft >= maxWidth) {
      element.style.left = `${element.offsetLeft - STEP * 2}px`;
      boom(element);
    }
  },
  40: (element) => {
    if (element.offsetTop < maxHeight) {
      element.style.top = `${element.offsetTop + STEP}px`;
    } else if (element.offsetTop >= maxHeight) {
      element.style.top = `${element.offsetTop - STEP * 2}px`;
      boom(element);
    }
  },
  38: (element) => {
    if (element.offsetTop > 0) {
      element.style.top = `${element.offsetTop - STEP}px`;
    } else if (element.offsetTop <= 0) {
      element.style.top = `${element.offsetTop + STEP * 2}px`;
      boom(element);
    }
    console.log(element.offsetTop);
  },
  32: (element) => {
    if (element.offsetTop > 0) {
      element.style.top = `${element.offsetTop - STEP}px`;
      setTimeout(
        () => (element.style.top = `${parseInt(element.style.top) + STEP}px`),
        500
      );
    } else if (element.offsetTop >= 0) {
      element.style.top = `${element.offsetTop + STEP * 2}px`;
      boom(element);
    }
  },
  17: (element) => {
    let ctrll = true;
    if ((ctrll = true)) {
      element.classList.add(`ctrl`);
      ctrll = false;
    }
    setTimeout(() => {
      element.classList.remove(`ctrl`);
    }, 500);
  },
};

document.addEventListener("keydown", (event) => {
  KEYS[event.keyCode] && KEYS[event.keyCode](block);
});

document.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
});
