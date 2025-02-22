document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("modal");
  
    // Get the cloud certification card
    var cloudCard = document.getElementById("cloudCard");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
  
    cloudCard.addEventListener("click", function() {
      var img = cloudCard.querySelector("img");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = cloudCard.querySelector("p").innerText;
    });
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // Close the modal when clicking the close button
    span.onclick = function() { 
      modal.style.display = "none";
    }
  
    // Also close the modal when clicking outside the image
    modal.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  