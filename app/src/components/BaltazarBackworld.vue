<template>
 <div id="background">
    <div id="card">
      <h1>Full Stack Developer</h1>
      <div class="avatar">
        <img src="../assets/img_avatar.png" alt="Avatar" class="avatar">   
      </div>
      <div class="card">

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
    /* min-width: 100%;
    min-height: 100%; */
    padding: 1%;
  }

#card {
  background-color: antiquewhite;
  
}

.avatar {
  vertical-align: middle;
  height: 50px;
  border-radius: 50%;
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