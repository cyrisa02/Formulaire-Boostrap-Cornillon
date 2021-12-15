function applyBgBlur() {
    if (window.innerWidth <768) {
        document.body.className = 'bg-blur';
    }
    else {
        document.body.className ='';
    }
}

window.addEventListener('resize',applyBgBlur);
