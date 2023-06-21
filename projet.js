document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user input values
    var plantName = document.getElementById('plant-name').value;
    var wateringSchedule = document.getElementById('watering-schedule').value;
  
    // Calculate the next watering date based on the schedule
    var currentDate = new Date();
    var nextWateringDate = new Date(currentDate.getTime() + (parseInt(wateringSchedule) * 24 * 60 * 60 * 1000));
  
    // Format the next watering date
    var formattedDate = nextWateringDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
    // Display the reminder message
    var reminderMessage = 'It\'s time to water your ' + plantName + '! Next watering date: ' + formattedDate;
    alert(reminderMessage);
  
    // Clear the form inputs
    document.getElementById('plant-name').value = '';
    document.getElementById('watering-schedule').value = '';
  });
  
  var thumbnails = document.querySelectorAll('.thumbnail');
var fullImage = document.querySelector('.full-image');

function displayFullImage(event) {
  var thumbnailSrc = event.target.getAttribute('src');
  fullImage.setAttribute('src', thumbnailSrc);
}

thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', displayFullImage);
});

const likeItem = document.querySelectorAll('.like-item');

likeItem.forEach(function(image) {
  image.addEventListener('click', function() {
    if (image.src.endsWith('like1.png')) {
      image.src = 'images/like2.png';
    } else {
      image.src = 'images/like1.png';
    }
  });
});


$(document).ready(function() {
  $('.cart').on('click', function() {
    var cartCount = $('.nav-link .count');
    var cartCountValue = parseInt(cartCount.text());

    cartCountValue++;
    cartCount.text(cartCountValue);
  });
});


