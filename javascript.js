document.addEventListener('DOMContentLoaded', function() {
    var scheduleLink = document.getElementById('schedule-link');
    var homeSci = document.querySelector('.home-sci-2');

    scheduleLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        showIcons();
        homeSci.classList.add('icons-visible');
    });

    document.addEventListener('click', function(event) {
        // Verifica se o clique ocorreu fora da área do link "Schedule"
        if (event.target !== scheduleLink && !homeSci.contains(event.target)) {
            hideIcons();
            homeSci.classList.remove('icons-visible');
        }
    });
});

function hideIcons(){
    document.querySelector('.home-sci-2').style.display = 'none';
}

function showIcons() {
    document.querySelector('.home-sci-2').style.display = 'flex';
}
