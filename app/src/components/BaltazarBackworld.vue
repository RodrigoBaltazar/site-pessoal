<template>
 <div id="background">
    <div id="card">
      <h1>Full Stack Developer</h1>
      <div class="avatar">
        <img src="../assets/foto.png" alt="Avatar" class="avatar">   
      </div>
      <div id="div-bio">
        <p id="bio">
          Rodrigo Baltazar é um desenvolvedor de software full stack com 3 anos de experiência profissional.
        </p>
        <p id="bio">
          Com um conhecimento abrangente de todo o ciclo de desenvolvimento, demonstra capacidade de desenvolver e dar manutenção em aplicações.
        </p>
        <p id="bio">
        Além disso, sua experiência em colaborar com equipes multidisciplinares e enfrentar desafios técnicos o tornam um profissional confiável e comprometido.
        </p>
      </div>  
      <div class="buttons">
        <a href="https://github.com/RodrigoBaltazar">
          <i class="fa fa-github-square" aria-hidden="true" title="Github"></i>
        </a>
        <a href="https://www.linkedin.com/in/rodrigo-baltazar-b7537a3a/">
          <i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i>
        </a>
        <a href="#">
          <i class="fa fa-book" aria-hidden="true" title="E-Book"></i>
        </a>
        <a href="">
          <i class="fa fa-futbol-o" aria-hidden="true" title="Futebol"></i>
        </a>
        <a href="">
          <i class="fa fa-briefcase" aria-hidden="true" title="Portfólio"></i>
        </a>
        <a href="https://www.instagram.com/rodrigobaltazar00/">
          <i class="fa fa-camera" aria-hidden="true" title="Instagram"></i>
        </a>
        <router-link to="/videos">
          <i class="fa fa-file-video-o" aria-hidden="true"></i>
        </router-link>
        <button @click="toggleVisibility">
          <i class="fa fa-gear"></i>
        </button>
        </div>
      </div>
      <div v-show="isVisible">
            {{ isVisible ? '' : 'hidden' }}
            <div ref="modal-content" class="modal-content">
              <button @click="toggleVisibility" class="close-btn">Fechar</button>
              <h2>Especificações da Página</h2>
              <p>Kbis: 000</p>
              <p>Ultima etapa é fazer a medição de performance</p>
            </div>
      </div>
    </div>
 <!-- </div> -->

</template>


<script>
// MODAL
export default {
  data() {
    return {
      isVisible: false
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
  width: auto;
  border-radius: 0.5rem;
  font-size: 100%;
}

#div-bio {
  padding: 5%;
}

@media screen and (min-width: 800px) {
    #card {
        margin-left: 30%;
        margin-right: 30%;
    }
  }

.buttons {
  background-color: whitesmoke;
  padding: 2%;
  border-radius: 1000px;
}

.avatar {
  /* vertical-align: middle;
  height: 50px;
  border-radius: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 2%;
}

a {
  margin: 0 5%;
  color: #222;
}

router-link {
  margin: 0 5%;
  color: #222;
}

#bio {
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: center;
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
  top: 25.9%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
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
@media (min-width: 390px) {
  .modal-content {
    width: 70%;
    max-width: 40rem;
    margin-top: 33%;
  }
}

/* Fim do Modal */
</style>
