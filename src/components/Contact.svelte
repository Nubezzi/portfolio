<script>
    import emailjs from '@emailjs/browser';
  
    let formData = {
      name: '',
      email: '',
      message: ''
    };
  
    function sendEmail(e) {
  
      if (e.target.from_name && e.target.from_email && e.target.message) {
        console.log(e.target)
        emailjs.sendForm('service_homepage', 'template_ok1mynr', e.target, 'KXUUTcmjiSRG6n4HB')
        .then(() => {
          alert('Message sent successfully!');
        }, (error) => {
          console.error(error);
          alert('There was an error sending your message. Please try again.');
        });
      } else {
        alert('Please fill out all fields before submitting.');
      }
    }
</script>

<section id="contact">
    <div class="container">
      <h2 class="section-title">Ota yhteyttä  </h2>
      <div class="contact-container">
        <div class="contact-info">
          <h3>Yhteystiedot</h3>
          <p><i class="fas fa-map-marker-alt"></i> 02250 Espoo, Uusimaa</p>
          <p><i class="fa-regular fa-message"></i> tg @nubezzi</p>
          <p><i class="fas fa-envelope"></i> paavo.j.nurminen@outlook.com</p>
          <p><i class="fa-solid fa-business-time"></i> <a href='https://www.linkedin.com/in/paavo-nurminen-0318301b9/'>https://www.linkedin.com/in/paavo-nurminen-0318301b9/</a></p>
          <p><i class="fa-brands fa-github"></i> <a href="https://github.com/Nubezzi/">https://github.com/Nubezzi/</a></p>
        </div>
        <form class="contact-form" on:submit|preventDefault="{sendEmail}">
          <h3>Lähetä viesti</h3>
          <div class="form-group">
            <label for="name">Nimi</label>
            <input type="text" id="name" name="from_name" placeholder="Nimesi tähän" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="from_email" placeholder="Mailisi tähän" required>
          </div>
          <div class="form-group">
            <label for="message">Viesti</label>
            <textarea id="message" name="message" placeholder="Kirjoita viesti" required></textarea>
          </div>
          <button type="submit" class="btn">Send</button>
        </form>
      </div>
    </div>
  </section>
