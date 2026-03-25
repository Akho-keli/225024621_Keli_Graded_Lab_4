let favourites = document.getElementById("favourites"); //getting the favourites section by its ID from the html file
let pics = document.getElementById("nelson_mandela");
let counter = document.getElementById("counter");
let message = document.getElementById("message");
let count = 0; 
const maxFavourites = 6; // Maximum number of images allowed in favourites

// This function toggles images between main section and favourites, and updates counter
function toggleFavourite(img) {
    // This part checks if the image is in the favourites section
    if (img.parentElement.id === "favourites") {
        pics.appendChild(img); // This line moves the image back to the main section
        img.style.border = "none";
        count--; 
        
    } 
    // If image is in main section and it  haven't reached max which is 6 
    else if (count < maxFavourites) {
        favourites.appendChild(img);
        img.style.border = "3px solid green";
        count++;
    }
    message.innerHTML = `An image added to Favourites: ${count}`; // Update counter text
    counter.textContent = `Remaining images: ${6 - count}`;
}
//this adds event listeners to all images with class "Mandela"
let images = document.getElementsByClassName("Mandela");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        toggleFavourite(this);
    });
}
