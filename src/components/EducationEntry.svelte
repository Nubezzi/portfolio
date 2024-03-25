<script>
    import { inview } from 'svelte-inview';
    var isInView = false;
    export var entry = {
        degree: "",
        school: "",
        year: "",
        info: ""
    };
    export var ind = 0;
</script>

<div use:inview={{ unobserveOnEnter: true, rootMargin: '0%' }} on:change={({ detail }) => { 
    isInView = detail.inView;
}}
class="timeline-entry {isInView ? (ind % 2 === 0 ? 'slide-in-left' : 'slide-in-right') : ''}">
    <div class="timeline-entry-content">
        <h3>{entry.degree}</h3>
        <strong>{entry.school}</strong>
        <p>{entry.info}</p>
    </div>
    <div class="timeline-entry-year">{entry.year}</div>
</div>
