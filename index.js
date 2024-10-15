document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form");
    const formSection = document.getElementById("form-section")
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error');
    const successMessage = document.querySelector('.success-msg');
    const dismissBtn = document.querySelector('.dismiss-btn');
    const emailDisplay = document.getElementById('email-address');


    //validate email using regex

    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()


        const emailValue = emailInput.value.trim()

        if (emailValue === "" || !isEmailValid(emailValue)) {
            errorMessage.classList.add('active'); // show error message

        } else {
            errorMessage.classList.remove('active'); // hide error message


            //display success message
            successMessage.style.display = 'block' // show success message
            formSection.style.display = 'none' // hide the form

            //display users entered email in success message
            emailDisplay.textContent = emailValue;
        }
    });


    // Dismiss button to reset and hide the success message
    dismissBtn.addEventListener('click', function () {
        successMessage.style.display = 'none'; // Hide the success message
        formSection.style.display = 'flex'; // Show the form again
        form.reset(); // Reset the form fields
    })
});