<script setup>
import { ref } from 'vue'

const name = ref('Rodrigo Baltazar')
const title = ref('Desenvolvedor Full Stack')
const description = ref('')
</script>

<template>
  <div class="text-center">
    <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h2>
    <p class="text-xl text-gray-600 mb-8">{{ description }}</p>
    <div class="space-x-4">
      <a href="#projetos" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        Ver Projetos
      </a>
      <router-link to="/contato" class="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
        Contato
      </router-link>
    </div>
  </div>
</template>
