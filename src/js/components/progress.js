const circle = document.querySelector('.progress');

const progressAnimation = () => {
    let percentProgress = Math.floor(88);

    let radius = circle.getAttribute('r');
    let circleLength = 2*Math.PI * radius;
    circle.setAttribute('stroke-dasharray', circleLength);
    circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentProgress / 100);
}

progressAnimation();