// Hide the result paragraph initially
document.getElementById('result').style.display = 'none';

document.getElementById('toggleButton').addEventListener('click', function() {
    var snowContainer = document.getElementById('snowContainer');
    var tableContainer = document.getElementById('tableContainer');
    var toggleButton = document.getElementById('toggleButton');
    var resultParagraph = document.getElementById('result');
    var seeParagraph = document.getElementById('see'); // Selecting the first paragraph
    if (snowContainer.childElementCount === 0) {
        // No snowflakes, create them
        createSnowflakes(snowContainer);
        toggleButton.innerText = 'Snowfalling...';
    } else {
        // Snowflakes exist
        return; // Do nothing if snowfall is already happening
    }
    // Show the table
    tableContainer.style.display = 'block';
    // Hide the button
    toggleButton.style.display = 'none';
    // Show the result paragraph
    resultParagraph.style.display = 'block';
    // Hide the see paragraph
    seeParagraph.style.display = 'none';
});

function createSnowflakes(container) {
    for (var i = 0; i < 50; i++) {
        var snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = (Math.random() * 5 + 2) + 's'; // Randomize animation duration
        container.appendChild(snowflake);
    }
}
