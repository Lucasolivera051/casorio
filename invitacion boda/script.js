// Define la fecha de inicio y la fecha objetivo (4 de febrero de 2024 a las 19:00 en hora argentina, GMT-3)
const startDate = new Date();
const endDate = new Date("2024-02-04T19:00:00-03:00");

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const currentDate = new Date();
    const timeLeft = endDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Llama a la función para inicializar la cuenta regresiva
updateCountdown();

