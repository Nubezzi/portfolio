<script>
    // You can customize these values as needed
    let name = "Paavo Nurminen";
    let title = "Opiskelija & Kehittäjä";
    let buttonText = "Chekkaa lisää!";
  </script>
  
  <section id="hero" class="hero">
    <div class="container">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <button on:click={() => window.scrollTo({ top: document.querySelector("#skills").offsetTop, behavior: 'smooth' })}>
        {buttonText}
      </button>
    </div>
  </section>
  
  <style>
    /* Add any custom styles specific to the Hero component here */

  </style>