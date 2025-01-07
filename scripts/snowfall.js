function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // Set random position and animation properties
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.top = -10 + 'vh'; // Start slightly above the viewport
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    snowflake.style.animationDelay = Math.random() * 5 + 's'; 

    document.body.appendChild(snowflake);

    // Ensure the snowflake is deleted after animation ends
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });

    // Add a fallback removal method using a timeout
    setTimeout(() => {
        if (document.body.contains(snowflake)) {
            snowflake.remove();
        }
    }, 10000); // Adjust this based on the maximum animation duration
}

setInterval(createSnowflake, 200);
