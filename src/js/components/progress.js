const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el =>{
    if(el.dataset.percentage === 'true') {
        let progress = el.querySelector('.progress');
        let valueBlock = el.querySelector('.facts-element__value');
        let radius = progress.getAttribute('r');
        let circleLength = 2 * Math.PI * radius;
        let data = el.dataset.full;
        let value = el.dataset.value;
        let percentageProgress = Math.floor(value / data * 100);
        valueBlock.textContent = value;
        progress.setAttribute('stroke-dasharray', `${circleLength}`);
        progress.setAttribute('stroke-dashoffset', `${circleLength - circleLength * percentageProgress / 100}`);
    } else{
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentProgress = Math.floor(parseInt(percent));
    valueBlock.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray', `${circleLength}`);
    progress.setAttribute('stroke-dashoffset', `${circleLength - circleLength * percentProgress / 100}`);
    }
})