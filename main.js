
document.getElementById('appointment-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').innerText = "Submitting...";
  setTimeout(() => {
    document.getElementById('form-status').innerText = "Appointment submitted successfully!";
  }, 1000);
});
