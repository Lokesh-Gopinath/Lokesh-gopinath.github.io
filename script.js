document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('#title span');
    const fonts = [
        'Arial, sans-serif',
        'Courier New, Courier, monospace',
        'Georgia, serif',
        'Times New Roman, Times, serif',
        'Verdana, sans-serif'
    ];

    function getRandomFont() {
        return fonts[Math.floor(Math.random() * fonts.length)];
    }

    function changeFonts() {
        spans.forEach(span => {
            const randomFont = getRandomFont();
            span.style.fontFamily = randomFont;
        });
    }

    // Change font every second
    setInterval(changeFonts, 500);

});
