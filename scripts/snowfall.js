function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Snowflake character

    // Random horizontal position within the screen width
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random value between 0% and 100%

    // Random vertical position for the snowflake to start falling
    snowflake.style.top = -Math.random() * 100 + 'vh'; // Random value above the screen

    // Random fall duration (between 2 to 5 seconds)
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 

    // Random delay before falling starts (between 0 and 5 seconds)
    snowflake.style.animationDelay = Math.random() * 5 + 's'; 

    // Add snowflake to the page
    document.body.appendChild(snowflake);

    // Remove snowflake after it finishes falling
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Create snowflakes every 100 milliseconds
setInterval(createSnowflake, 300);