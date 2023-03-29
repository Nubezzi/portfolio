<script>

    function scroll(target) {
        const element = document.querySelector(target);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
</script>

<nav class="navbar">
    <div>
        <a href="#hero" on:click|preventDefault={() => scroll('#hero')}>
            <i class="fa-solid fa-house"></i>
        </a>
    </div>
    <div>
        <a href="#skills" on:click|preventDefault={() => scroll('#skills')}>Taidot</a>
        <a href="#education" on:click|preventDefault={() => scroll('#education')}>Kokemus</a>
        <a href="#contact" on:click|preventDefault={() => scroll('#contact')}>Ota yhteyttä</a>
    </div>
</nav>
  
  <style>
    /* Add your CSS styles for the Navigation Bar here */
  </style>