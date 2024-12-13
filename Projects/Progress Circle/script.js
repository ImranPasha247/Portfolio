let percentages = {
    html: 85,
    css: 60,
    js: 50,
};

function animateProgress(id, targetPercentage) {
    let numberElement = document.querySelector(`#number-${id}`);
    let circleElement = document.querySelector(`#circle-${id}`);
    const circumference = 472; 
    let countdown = 0;

    let interval = setInterval(() => {
        if (countdown >= targetPercentage) {
            clearInterval(interval);
        } else {
            countdown += 1;
            numberElement.innerHTML = countdown + "%";
            let offset = circumference - (circumference * countdown) / 100;
            circleElement.style.strokeDashoffset = offset; // Sync the visual progress
        }
    }, 30);
}

animateProgress('html', percentages.html);
animateProgress('css', percentages.css);
animateProgress('js', percentages.js);
