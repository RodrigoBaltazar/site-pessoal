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
        <button @click="toggleVisibility">
          <i class="fa fa-gear"></i>
        </button>
        <div ref="modal" class="modal" v-show="hidden">
          <div ref="modal-content" class="modal-content">
            <button @click="closeModal" class="close-btn">Fechar</button>
            <h2>Especificações da Página</h2>
            <p>Kbis: 000</p>
          </div>
        </div>
      </div>
    </div>
 </div>

</template>


<script>
// MODAL
export default {
  data() {
    return {
      isVisible: true
    };
  },
  name: 'BaltazarBackWorld',
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    openModal(){
      const modal = this.$refs.modal;
      const modalContent = this.$refs.modalContent;
      modal.style.display = 'block';
      modalContent.classList.add('show');
    },
    closeModal(){
      this.$refs.modal.style.display = 'none';
      this.$refs.modalContent.classList.remove('show');
    }
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

/* MODAL */

.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 30rem;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

/* MODAL MOBILE */
@media (min-width: 768px) {
  .modal-content {
    width: 70%;
    max-width: 40rem;
  }
}
</style>