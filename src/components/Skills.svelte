<script>
    let isHovering1 = '';
    let isHovering2 = '';
    let isHovering3 = '';
    let isHovering4 = '';
    let isHovering5 = '';
    let isHovering6 = '';
    let isHovering7 = '';
    let isHovering8 = '';
    let isHovering9 = '';
  </script>

<section id="skills">
  <div class="container">
    <h2 class="section-title">Taidot</h2>
    <div class="skills-container">
      <div class="skill"  on:mouseenter={() => isHovering1 = 'fa-flip'} on:mouseleave={() => isHovering1 = ''}>
        <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML5 logo" />
        <h3>HTML</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering1}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering1}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering1}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering1}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering2 = 'fa-flip'} on:mouseleave={() => isHovering2 = ''}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" alt="CSS3 logo" />
        <h3>CSS</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering2}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering2}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
          <i class="fa-regular fa-file-code"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering3 = 'fa-flip'} on:mouseleave={() => isHovering3 = ''}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript logo" />
        <h3>JavaScript</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering3}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering3}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering3}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering3}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering4 = 'fa-flip'} on:mouseleave={() => isHovering4 = ''}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="Svelte logo" />
        <h3>Svelte</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering4}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering4}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering4}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering5 = 'fa-flip'} on:mouseleave={() => isHovering5 = ''}>
        <img src="https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg" alt="Node.js logo" />
        <h3>Node.js</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering5}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering5}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering5}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering6 = 'fa-flip'} on:mouseleave={() => isHovering6 = ''}>
        <img src="https://www.scala-lang.org/resources/img/frontpage/scala-spiral.png" alt="Scala logo" />
        <h3>Scala</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering6}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering6}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering6}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering6}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering7 = 'fa-flip'} on:mouseleave={() => isHovering7 = ''}>
        <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="React logo" />
        <h3>React</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering7}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering7}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering7}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering7}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering8 = 'fa-flip'} on:mouseleave={() => isHovering8 = ''}>
        <img src="https://img.freepik.com/free-icon/snakes_318-368381.jpg" alt="Python logo" />
        <h3>Python</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering8}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering8}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering8}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering8}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
      <div class="skill"  on:mouseenter={() => isHovering9 = 'fa-flip'} on:mouseleave={() => isHovering9 = ''}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C logo" />
        <h3>C</h3>
        <p>Osaaminen: </p>
        <div class="proficiency">
          <i class="fa-solid fa-file-code {isHovering9}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-solid fa-file-code {isHovering9}" style="--fa-animation-duration: 1.5s;"></i>
          <i class="fa-regular fa-file-code"></i>
          <i class="fa-regular fa-file-code"></i>
          <i class="fa-regular fa-file-code"></i>
        </div>
      </div>
    </div>
  </div>
</section>
  <!--
  <section id="skills" class="container">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div class="skill-card" transition:fade>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="Svelte" />
        <h3>Svelte</h3>
        <p>Proficiency: 85%</p>
      </div>
      <div class="skill-card" transition:fade>
        <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="React" />
        <h3>React</h3>
        <p>Proficiency: 80%</p>
      </div>
      <div class="skill-card" transition:fade>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" />
        <h3>Python</h3>
        <p>Proficiency: 90%</p>
      </div>
    </div>
  </section>

    -->
  
  <style>
    /* Add your CSS styles for the Skills section here */
  </style>