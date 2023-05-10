<script>
    // You can customize these values as needed
    let name = "Paavo Nurminen";
    let title = "Opiskelija & Kehittäjä";
    let buttonText = "Chekkaa lisää!";
    import { onMount } from 'svelte';

    let heroElement;

    function handleImageLoad() {
      heroElement.classList.add('loaded');
    }

    function handleGifLoad() {
      heroElement.classList.remove('loading');
      heroElement.classList.add('loaded-gif');
    }
      
    onMount(() => {
      const image = new Image();
      image.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjc1MzhhYTRhMWQyNWNlNjA1MWExZGE3MjBhZWIxYjA1OGEzODkzYyZjdD1n/br9eVr1WVN2s19tLlL/giphy.gif';
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener('load', handleImageLoad);
      }
      
      const gif = new Image();
      gif.src = 'https://s10.gifyu.com/images/giphy-1-1e188d481e2842fd5.gif';
      if (gif.complete) {
        handleGifLoad();
      } else {
        heroElement.classList.add('loading');
        gif.addEventListener('load', handleGifLoad);
      }
    });
  </script>
  
  <section id="hero" class="hero" bind:this={heroElement}>
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