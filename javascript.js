document.addEventListener('DOMContentLoaded', function() {
    var scheduleLink = document.getElementById('schedule-link');
    var hireMeLink = document.getElementById('hire-link');
    var moreInfoLink = document.getElementById('moreinfo-link');

    var homeSci1 = document.querySelector('.home-sci-2');
    var homeSci2 = document.querySelector('.home-sci-1');
    var homeSci3 = document.querySelector('.home-sci-3');

    var iconsVisible = false;

    scheduleLink.addEventListener('mouseenter', function() {
        showIcons(homeSci1);
    });

    hireMeLink.addEventListener('mouseenter', function() {
        showIcons(homeSci2);
    });

    moreInfoLink.addEventListener('mouseenter', function() {
        showIcons(homeSci3);
    });

    document.addEventListener('mouseleave', function(event) {
        if (!isMouseOverElement(scheduleLink) && !isMouseOverElement(hireMeLink) && !isMouseOverElement(moreInfoLink)) {
            hideIcons();
        }
    });

    function isMouseOverElement(element) {
        var rect = element.getBoundingClientRect();
        return event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    }

    function hideIcons() {
        homeSci1.style.display = 'none';
        homeSci2.style.display = 'none';
        homeSci3.style.display = 'none';
        iconsVisible = false;
    }

    function showIcons(iconContainer) {
        hideIcons();
        iconContainer.style.display = 'flex';
        iconsVisible = true;
    }
});
