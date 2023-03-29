<section id="education" class="container">
  <h2>Koulutus ja Kokemus</h2>
  <div class="timeline">
    {#each educationEntries as entry, index}
      <div class="timeline-entry">
        <div class="timeline-entry-content">
          <h3>{entry.degree}</h3>
          <p>{entry.school}</p>
        </div>
        <div class="timeline-entry-year">{entry.year}</div>
      </div>
    {/each}
    <p>*: Valmistuminen todennäköistä :D</p>
  </div>
</section>

<script>
  let size = 150
  let educationEntries = [
    {
      degree: "Asiakasneuvoja, Kausityö",
      school: "Posti oyj",
      year: "2016 - 2022",
    },
    {
      degree: "Ylioppilastutkinto",
      school: "Kauniaisten lukio",
      year: "2017 - 2020",
    },
    {
      degree: "Tekniikan kandidaatti, tietotekniikka",
      school: "Aalto Yliopisto",
      year: "2020 - 2023*",
    },
    {
      degree: "Esiasentaja, kesätyö",
      school: "Elisa oyj / Transval oy",
      year: "2021",
    },
    {
      degree: "Software Project - ohjelmistokehittäjä",
      school: "Accountor HR Solutions",
      year: "2022 - 2023",
    },
    {
      degree: "Ohjelmistokehitys- trainee",
      school: "Savox Communications Ltd",
      year: "2023 ->",
    },
    {
      degree: "Tietotekniikan DI",
      school: "Aalto yliopisto",
      year: "2023* ->",
    },
    // Add more entries as needed
  ];
</script>