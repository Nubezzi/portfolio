<script>
  import { onMount } from 'svelte';
  import Entry from "./EducationEntry.svelte"
  import intersection from "svelte-intersection-observer"

  let size = 150
  let educationEntries = [
    {
      degree: "Asiakasneuvoja, Kausityö",
      school: "Posti oyj",
      year: "2016 - 2022",
      info: "Chat-, email- ja puhelinasiakaspalvelua yritys- ja kuluttaja-asiakkaille"
    },
    {
      degree: "Ylioppilastutkinto",
      school: "Kauniaisten lukio",
      year: "2017 - 2020",
      info: ""
    },
    {
      degree: "Tekniikan kandidaatti, tietotekniikka",
      school: "Aalto Yliopisto",
      year: "2020 - 2023",
      info: ""
    },
    {
      degree: "Esiasentaja, kesätyö",
      school: "Elisa oyj / Transval oy",
      year: "2021",
      info: "Verkkokytkinten ja reitittimien ohjelmistopäivitysten hoitamienn makroilla, sekä yleinen huolto"
    },
    {
      degree: "Software Project - ohjelmistokehittäjä",
      school: "Accountor HR Solutions",
      year: "2022 - 2023",
      info: "Full Stack -kehitystä React-typescript-.NET stackilla. Myös Azure deploymentiä ja Jenkins CI-CD hallintaa"
    },
    {
      degree: "Ohjelmistokehitys- trainee",
      school: "Savox Communications Ltd",
      year: "2023 ->",
      info: "Monipuolista ohjelmistokehitystä laitteiden testaukseen ja flashaykseen liittyen, sekä datankäsittelyä ja audioanalyysiä pythonilla"
    },
    {
      degree: "Tietotekniikan DI, Big Data and Large-Scale Computing",
      school: "Aalto yliopisto",
      year: "2023 ->",
      info: ""
    },
  ];
  let educationEntries_en = [
  {
    degree: "Customer Service Specialist, Seasonal Work",
    school: "Posti Oyj",
    year: "2016 - 2022",
    info: "Chat-, email- and phone customerservice for consumer and business customers"
  },
  {
    degree: "High School & Matriculation Examination",
    school: "Kauniainen High School",
    year: "2017 - 2020",
    info: ""
  },
  {
    degree: "Bachelor of Science in Technology, Computer Science",
    school: "Aalto University",
    year: "2020 - 2023",
    info: ""
  },
  {
    degree: "Pre-installer, Summer Job",
    school: "Elisa Oy / Transval Oy",
    year: "2021",
    info: "Network switch and router updating and servicing"
  },
  {
    degree: "Software Project - Software Developer",
    school: "Accountor HR Solutions",
    year: "2022 - 2023",
    info: "Full Stack development with React-typescript-.NET stack. Included some Azure deployment and Jenkins CI-CD"
  },
  {
    degree: "Software Development Trainee",
    school: "Savox Communications Ltd",
    year: "2023 ->",
    info: "Varied developement for device testing and flashing. Also data and audio analysis with python"
  },
  {
    degree: "Master of Science in Technology, Big Data and Large-Scale Computing",
    school: "Aalto University",
    year: "2023 ->",
    info: ""
  },
];

import { t } from 'svelte-i18n';

// Reactive statement to get the current language
let lang = $t('lang')


// Determine which entries to display based on the language
let displayedEntries = lang == 'fi' ? educationEntries : educationEntries_en;

let intersecting = {};

</script>

<section id="education" class="container">
  <h2 class="content_h2">{$t('experience')}</h2>

  <div class="timeline">
    {#each displayedEntries as entry, index}
      <Entry entry={entry} ind={index}/>
    {/each}
  </div>
</section>