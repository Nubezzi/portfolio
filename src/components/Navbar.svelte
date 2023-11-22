<script>

    function scroll(target) {
        const element = document.querySelector(target);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    import { t } from 'svelte-i18n';
</script>

<nav class="navbar">
    <div>
        <a href="#hero" on:click|preventDefault={() => scroll('#hero')}>
            <i class="fa-solid fa-house"></i>
        </a>
    </div>
    <div>
        <a href="#skills" on:click|preventDefault={() => scroll('#skills')}>{$t('skills')}</a>
        <a href="#education" on:click|preventDefault={() => scroll('#education')}>{$t('experience')}</a>
        <a href="#contact" on:click|preventDefault={() => scroll('#contact')}>{$t('contact')}</a>
    </div>
</nav>
  
  <style>
    /* Add your CSS styles for the Navigation Bar here */
  </style>