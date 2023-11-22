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
      year: "2020 - 2023",
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
      degree: "Tietotekniikan DI, Big Data and Large-Scale Computing",
      school: "Aalto yliopisto",
      year: "2023 ->",
    },
  ];
  let educationEntries_en = [
  {
    degree: "Customer Service Specialist, Seasonal Work",
    school: "Posti Oyj",
    year: "2016 - 2022",
  },
  {
    degree: "High School & Matriculation Examination",
    school: "Kauniainen High School",
    year: "2017 - 2020",
  },
  {
    degree: "Bachelor of Science in Technology, Computer Science",
    school: "Aalto University",
    year: "2020 - 2023",
  },
  {
    degree: "Pre-installer, Summer Job",
    school: "Elisa Oy / Transval Oy",
    year: "2021",
  },
  {
    degree: "Software Project - Software Developer",
    school: "Accountor HR Solutions",
    year: "2022 - 2023",
  },
  {
    degree: "Software Development Trainee",
    school: "Savox Communications Ltd",
    year: "2023 ->",
  },
  {
    degree: "Master of Science in Technology, Big Data and Large-Scale Computing",
    school: "Aalto University",
    year: "2023 ->",
  },
];

import { t } from 'svelte-i18n';

// Reactive statement to get the current language
let lang = $t('lang')


// Determine which entries to display based on the language
let displayedEntries = lang == 'fi' ? educationEntries : educationEntries_en;
</script>

<section id="education" class="container">
  <h2 class="content_h2">{$t('experience')}</h2>

  <div class="timeline">
    {#each displayedEntries as entry, index}
      <div class="timeline-entry">
        <div class="timeline-entry-content">
          <h3>{entry.degree}</h3>
          <p>{entry.school}</p>
        </div>
        <div class="timeline-entry-year">{entry.year}</div>
      </div>
    {/each}
  </div>
</section>