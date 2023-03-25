<template>
 <div id="background">
    <div id="card">
      <h1>Full Stack Developer</h1>
      <div class="avatar">
        <img src="../assets/foto.png" alt="Avatar" class="avatar">   
      </div>
      loreim ipsum
      <div class="buttons">
        <i class="fa fa-github-square" aria-hidden="true"></i>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <i class="fa fa-futbol-o" aria-hidden="true"></i>
        <i class="fa fa-briefcase" aria-hidden="true"></i>
        <i class="fa fa-camera" aria-hidden="true"></i>
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
  background-color: green;
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
h3 {
  /* margin: 40px 0 0; */
}
ul {
  /* list-style-type: none;
  padding: 0; */
}
li {
  /* display: inline-block;
  margin: 0 10px; */
}
a {
  /* color: #42b983; */
}
</style>