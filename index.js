document.addEventListener("DOMContentLoaded", function() {
    const circleContent = document.getElementById('circle-content');
    if (circleContent) {
        const items = document.querySelectorAll('.circle-item');

        function getRandomPosition() {
            const x = Math.random() * 90;
            const y = Math.random() * 90;
            return { x, y };
        }

        items.forEach(item => {
            const { x, y } = getRandomPosition();
            item.style.left = `${x}vw`;
            item.style.top = `${y}vh`;
        });

        circleContent.classList.add('visible');
    }
    
    
    // Modal functionality
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("video");
    const closeBtn = document.querySelector(".modal .close");
    const fishIcon = document.querySelector(".fa-fish");

    fishIcon.addEventListener('click', function() {
        modal.style.display = "block";
        video.play();
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 10;
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            video.pause();
            video.currentTime = 0;
        }
    });
});
