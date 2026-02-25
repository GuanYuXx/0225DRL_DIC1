function updateTime() {
    const now = new Date();

    // Format time correctly (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format date correctly
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);

    // Update the DOM
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = dateStr;
}

// Initialize immediately to prevent flash of loading state
updateTime();

// Update every 1 second
setInterval(updateTime, 1000);
