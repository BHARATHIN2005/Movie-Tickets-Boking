document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { id: 1, name: "Concert - The Weekend", price: 150 },
        { id: 2, name: "Movie - Dragon", price: 115 },
        { id: 3, name: "Theater - LA Cinimas", price: 130 },
    ];

    const eventGrid = document.getElementById("eventGrid");
    const bookingForm = document.getElementById("bookingForm");
    const selectedEventText = document.getElementById("selectedEvent");
    const bookingStatus = document.getElementById("bookingStatus");
    const confirmBooking = document.getElementById("confirmBooking");

    let selectedEvent = null;

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `<h2>${event.name}</h2><p>Price: $${event.price}</p>`;
        eventCard.addEventListener("click", () => {
            selectedEvent = event;
            selectedEventText.innerText = `Selected: ${event.name}`;
            bookingForm.style.display = "block";
        });
        eventGrid.appendChild(eventCard);
    });

    confirmBooking.addEventListener("click", () => {
        const userName = document.getElementById("userName").value;
        const userEmail = document.getElementById("userEmail").value;
        const seatCount = parseInt(document.getElementById("seatCount").value);

        if (!userName || !userEmail) {
            alert("Please enter your details before booking.");
            return;
        }

        const totalPrice = selectedEvent.price * seatCount;
        bookingStatus.innerHTML = `<p>Booking confirmed for ${seatCount} seat(s) at ${selectedEvent.name}. Total Price: $${totalPrice}. Thank you, ${userName}! Your Tickets was Collect in the Counter...</p>`;
        bookingForm.style.display = "none";
    });
});
