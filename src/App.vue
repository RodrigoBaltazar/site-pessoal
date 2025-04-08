<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const name = ref('Rodrigo Baltazar')
const title = ref('Desenvolvedor Full Stack')
const description = ref('')
const route = useRoute()

// Rastrear mudanças de rota
watch(() => route.path, (newPath) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: newPath
    })
  }
})

// Rastrear visualização inicial
onMounted(() => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: route.path
    })
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <router-link 
            to="/" 
            class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
          >
            {{ name }}
          </router-link>
          <div class="space-x-4">
            <router-link to="/sobre" class="text-gray-600 hover:text-gray-900">Sobre</router-link>
            <a href="/projetos" class="text-gray-600 hover:text-gray-900">Projetos</a>
            <router-link to="/contato" class="text-gray-600 hover:text-gray-900">Contato</router-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-600">
          <p>&copy; {{ new Date().getFullYear() }} {{ name }}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
