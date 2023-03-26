<template>
 <div id="background">
    <div id="card">
      <h1>Full Stack Developer</h1>
      <div class="avatar">
        <img src="../assets/foto.png" alt="Avatar" class="avatar">   
      </div>
      loreim ipsum
      <div class="buttons">
        <a href="https://github.com/RodrigoBaltazar">
          <i class="fa fa-github-square" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/rodrigo-baltazar-b7537a3a/">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-futbol-o" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-briefcase" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/rodrigobaltazar00/">
          <i class="fa fa-camera" aria-hidden="true"></i>
        </a>
        <button id="modal">
          <i class="fa fa-gear"></i>
        </button>
      </div>
    </div>
 </div>

</template>


<script>
export default {
  name: 'BaltazarBackWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  position: absolute;
}

#background {
    background-color: #222;
    height: 900px;
    padding: 1%;
  }

#card {
  background-color: whitesmoke;
  
}

.buttons {
  background-color: whitesmoke;
  padding: 2%;
}

.avatar {
  /* vertical-align: middle;
  height: 50px;
  border-radius: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
}

a {
  margin: 0 5%;
  color: #222;
}
</style>