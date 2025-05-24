const learnMoreBtn=document.querySelector(".btn");

// Add a click event listener to the button
learnMoreBtn.addEventListener("click", function(event){
    // Prevent the default behavior (event.target.addEventListener, jumping to the features section)
    event.preventDefault();

    // Display an alert
    alert("Thanks for your interest! We'll show you more about us.");
});