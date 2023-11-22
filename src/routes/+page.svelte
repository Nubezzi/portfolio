<script>
    import Navbar from "../components/Navbar.svelte";
    import Skills from "../components/Skills.svelte";
    import Education from "../components/Education.svelte";
    import Hero from "../components/Hero.svelte"
    import Contact from "../components/Contact.svelte";
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.css";
    import { isLoading } from 'svelte-i18n'
    import Spinner from '../misc/Infinity-1s-204px.svelte'; // Import your spinner SVG 

    import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register your JSON files
register('en', () => import('../localization/en.json'));
register('fi', () => import('../localization/fi.json'));

// Initialize svelte-i18n
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
  
</script>

<main>
  {#if $isLoading}
    <div id="spin1">
      <svelte:component this={Spinner} />
    </div>
  {:else}
    <Navbar/>
    <Hero/>
    <Skills/>
    <Education/>
    <Contact/>
  {/if}
  
</main>

<style>
    #spin1{
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>