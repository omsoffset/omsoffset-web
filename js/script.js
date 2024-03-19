const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', saveFormData)

function saveFormData(e) {
    e.preventDefault();
    
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };
  
    fetch('https://script.google.com/macros/s/AKfycbw587yzwv8f2GBtPgv_KbaaE_B4A0RcZL_jrsjY0OqexrBEqgokL5CnAlAgZmWNjnm7LQ/exec', {
      method: 'POST',
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        console.log('Form data saved successfully');
        // Optionally, you can show a success message or perform other actions here
      } else {
        console.error('Failed to save form data:', response.statusText);
        // Optionally, you can show an error message or perform other actions here
      }
    })
    .catch(error => {
      console.error('Error saving form data:', error);
      // Optionally, you can show an error message or perform other actions here
    });
  }
  