<script setup>
import { ref } from 'vue'

const name = ref('Seu Nome')
const title = ref('Desenvolvedor Full Stack')
const description = ref('Apaixonado por criar experiências web incríveis')
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-900">{{ name }}</h1>
          <div class="space-x-4">
            <a href="#sobre" class="text-gray-600 hover:text-gray-900">Sobre</a>
            <a href="#projetos" class="text-gray-600 hover:text-gray-900">Projetos</a>
            <a href="#contato" class="text-gray-600 hover:text-gray-900">Contato</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h2>
        <p class="text-xl text-gray-600 mb-8">{{ description }}</p>
        <div class="space-x-4">
          <a href="#projetos" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Ver Projetos
          </a>
          <a href="#contato" class="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
            Contato
          </a>
        </div>
      </div>
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
