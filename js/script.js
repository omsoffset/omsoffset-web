const contactForm = document.getElementById('contact-form'),
      nameEl = document.getElementById('name'),
      emailEl = document.getElementById('email'),
      phoneEl = document.getElementById('phone'),
      messageEl = document.getElementById('message')

contactForm.addEventListener('submit', saveFormData)

function saveFormData(e) {
    e.preventDefault();
    
    var formData = {
      name: nameEl.value,
      email: emailEl.value,
      phone: phoneEl.value,
      message: messageEl.value
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
      if (response.status == "success") {
        console.log(response.message);
        alert(response.message + ' we will contact you shortly.')
        contactForm.reset()
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
  