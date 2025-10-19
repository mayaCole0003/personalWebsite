document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const triggerImg = document.getElementById("competitive-img");

  // Open modal when image clicked
  triggerImg.addEventListener("click", function () {
    modal.style.display = "flex"; // use flex for centering
    modalImg.src = this.src;
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
