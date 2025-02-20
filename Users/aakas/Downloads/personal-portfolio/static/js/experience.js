document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const title = item.querySelector('.timeline-content h2').innerText;
            console.log(`Hovered over: ${title}`);
            // You can add more interactive effects here if needed.
        });
    });
});
