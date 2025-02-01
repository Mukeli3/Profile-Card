document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        document.getElementById('utcTime').textContent = new Date().toISOString();
    }
    updateTime();
    setInterval(updateTime, 1000);
});
