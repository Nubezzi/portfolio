<script>
  import emailjs from '@emailjs/browser';
  import { t } from 'svelte-i18n';
  import Spinner from '../misc/Infinity-1s-204px.svelte'; // Import your spinner SVG 

  let formData = {
    name: '',
    email: '',
    message: ''
  };

  let isLoading = false; // Loading state
  let formElement; // Reference to the form
  let spinnerHeight = 'auto'; // Initial height

  function sendEmail(e) {
    isLoading = true; // Start loading
    spinnerHeight = `${formElement.offsetHeight}px`;
    emailjs.sendForm('service_homepage', 'template_ok1mynr', e.target, 'KXUUTcmjiSRG6n4HB')
    .then(() => {
      isLoading = false; // Stop loading
      alert('Message sent successfully!');
      resetForm(); // Reset form after successful submission
    }, (error) => {
      console.error(error);
      alert('There was an error sending your message. Please try again.');
      isLoading = false; // Stop loading even if there was an error
    });
  }

  function sendEmailtest(e) {
    isLoading = true; // Start loading
    spinnerHeight = `${formElement.offsetHeight}px`;
    console.log(spinnerHeight)
    setTimeout(function() {
      isLoading = false;
    }, 2000);
  }

  // Function to reset form
  function resetForm() {
    formData = { name: '', email: '', message: '' };
  }
</script>
<section id="contact">
    <div class="container">
      <h2 class="section-title">{$t('contact')}</h2>
      <div class="contact-container">
        <div class="contact-info">
          <h3>{$t('contact_info')}</h3>
          <p><i class="fas fa-map-marker-alt"></i> 02250 Espoo, Uusimaa</p>
          <p><i class="fa-regular fa-message"></i> tg @nubezzi</p>
          <p><i class="fas fa-envelope"></i> paavo.j.nurminen@outlook.com</p>
          <p><i class="fa-solid fa-business-time"></i> <a href='https://www.linkedin.com/in/paavo-nurminen-0318301b9/'>https://www.linkedin.com/in/paavo-nurminen-0318301b9/</a></p>
          <p><i class="fa-brands fa-github"></i> <a href="https://github.com/Nubezzi/">https://github.com/Nubezzi/</a></p>
        </div>
        {#if isLoading}
          <div id="spin" class="spinner-container" style="--spinner-height: {spinnerHeight};">
            <svelte:component this={Spinner} />
          </div>
        {:else}
          <form class="contact-form" bind:this={formElement} on:submit|preventDefault="{sendEmail}">
            <h3>{$t('send_message')}</h3>
            <div class="form-group">
              <label for="name">{$t('name')}</label>
              <input type="text" id="name" name="from_name" placeholder={$t('name_here')} required>
            </div>
            <div class="form-group">
              <label for="email">{$t('email')}</label>
              <input type="email" id="email" name="from_email" placeholder={$t('email_here')} required>
            </div>
            <div class="form-group">
              <label for="message">{$t('msg')}</label>
              <textarea id="message" name="message" placeholder={$t('msg_here')} required></textarea>
            </div>
            <button type="submit" class="btn">{$t('send')}</button>
          </form>
        {/if}
        
      </div>
    </div>
  </section>
<style>
  #spin{
    height: var(--spinner-height, auto);
  }
</style>