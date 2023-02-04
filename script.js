document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("header nav a");
    const speed = 0.3;

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetPosition = document.querySelector(targetId).offsetTop;
            const startPosition = window.pageYOffset;
            let distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, 600);
                window.scrollTo(0, run);
                if (timeElapsed < 600) requestAnimationFrame(animation);
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            requestAnimationFrame(animation);
        });
    });
});
