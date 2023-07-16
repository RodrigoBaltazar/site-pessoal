<template>
   <h1>
    <router-link to="/">
      Rodrigo Baltazar
    </router-link>
   </h1>
   <hr>
   Videos I personally recommend to everybody involved with software.
   <hr>
  <div class="row d-flex justify-content-center">
    <!-- Video 1 -->
    <div class="card" style="width: 18rem;">
      <iframe width="270" height="215" src="https://www.youtube.com/embed/4XpnKHJAok8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="card-body">
        <h5 class="card-title">Linus Torvalds on GIT - 2007</h5>
        <p class="card-text">An excelent video for beginners with GIT.</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
    <!-- Video 2 -->
    <div class="card" style="width: 18rem;">
      <iframe width="270" height="215" src="https://www.youtube.com/embed/Lbcyyu8XB_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="card-body">
        <h5 class="card-title">Forget Velocity, Let's Talk Acceleration • Jessica Kerr • GOTO 2017</h5>
        <p class="card-text">Excelent software production video.</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>
  
<script>
</script>
  
<style>

.card {
  /* margin-bottom: 10px; */
  margin: 10px;
}

body {
  background-color: whitesmoke;
}

h1 {
  color: #2c3e50;
}

router-link:visited {
  color: #2c3e50;
}

a:visited {
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
  