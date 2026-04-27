function startCountdownTimer() {
    let timeRemaining = 15 * 60; // 15 minutes in seconds
    const timerDisplay = document.getElementById('timer');
    const submitButton = document.getElementById('Submit');

    const interval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeRemaining <= 0) {
            clearInterval(interval);
            alert('Time is up! Your exam has been submitted automatically.');
            submitButton.disabled = true;
        }
        
        timeRemaining--;
    }, 1000);
}

// Start the timer when the page loads
window.addEventListener('load', startCountdownTimer);