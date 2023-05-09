var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++)  {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.border = "none";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.border = "2px dashed #fff";
            var panelRect = panel.getBoundingClientRect();
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            var panelTop = panelRect.top + scrollY;
            var panelHeight = panel.scrollHeight;
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            var scrollTarget = panelTop + (panelHeight / 2) - (viewportHeight / 2);
            window.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
            });
        }
    });
}
