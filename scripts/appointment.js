
const modal = document.getElementById("bookingModal");
const openButton = document.getElementById("openBooking");
const closeButton = document.querySelector(".close-modal");
const bookingForm = document.getElementById("bookingForm");

// Open modal
openButton.addEventListener("click", function () {
    modal.style.display = "flex";
});

// Close modal
closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close if user clicks outside the modal
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form submission
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(bookingForm);

    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Phone:", formData.get("phone"));
    console.log("Service:", formData.get("service"));
    console.log("Date:", formData.get("date"));
    console.log("Time:", formData.get("time"));
    console.log("Message:", formData.get("message"));

    alert("Appointment request submitted!");

    bookingForm.reset();
    modal.style.display = "none";
});
