// script.js
function countdown() {
    const endDate = new Date("2023-12-31 00:00:00").getTime(); // Thay đổi ngày kết thúc ở đây

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Hết thời gian!";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
        }
    }, 1000);
}

countdown();
