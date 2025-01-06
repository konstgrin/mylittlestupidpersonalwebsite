function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    snowflake.style.left = Math.random() * 100 + 'vw';

    snowflake.style.top = -Math.random() * 100 + 'vh';

    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 

    snowflake.style.animationDelay = Math.random() * 5 + 's'; 
    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 300);