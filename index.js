document.addEventListener("DOMContentLoaded", function() {
    const circleContent = document.getElementById('circle-content');
    const items = document.querySelectorAll('.circle-item');

    // Function to generate random positions
    function getRandomPosition() {
        const x = Math.random() * 90; // Use 90% to keep items within the viewport
        const y = Math.random() * 90;
        return { x, y };
    }

    // Apply random positions to each item
    items.forEach(item => {
        const { x, y } = getRandomPosition();
        item.style.left = `${x}vw`;
        item.style.top = `${y}vh`;
    });

    // Add a class to make the circle content visible
    circleContent.classList.add('visible');
});
