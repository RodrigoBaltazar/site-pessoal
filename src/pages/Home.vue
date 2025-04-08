<script setup>
import { ref } from 'vue'

const name = ref('Rodrigo Baltazar')
const title = ref('Desenvolvedor Full Stack')
const description = ref('')
const otherWorks = ref([
  {
    title: 'Técnico de Informática',
    description: 'Suporte técnico e manutenção de computadores, com 20 anos de experiência',
    link: '/tecnico-informatica'
  },
  {
    title: 'Consultor de TI',
    description: 'Consultoria em infraestrutura e redes para pequenas empresas'
  }
])
</script>

<template>
  <div class="text-center px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
      {{ title }}
    </h2>
    <p class="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
      {{ description }}
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 mb-8 sm:mb-12">
      <router-link 
        to="/projetos" 
        class="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 w-full sm:w-auto"
      >
        Ver Projetos
      </router-link>
      <router-link 
        to="/sobre" 
        class="bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-md hover:bg-gray-300 w-full sm:w-auto"
      >
        Sobre
      </router-link>
      <router-link 
        to="/contato" 
        class="bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-md hover:bg-gray-300 w-full sm:w-auto"
      >
        Contato
      </router-link>
    </div>

    <!-- Seção de Outros Trabalhos -->
    <div class="mt-12 sm:mt-16 border-t border-gray-200 pt-6 sm:pt-8">
      <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 relative">
        <span class="bg-blue-100 px-3 sm:px-4 py-1 rounded-lg">Outras Experiências</span>
      </h3>
      <div class="max-w-2xl mx-auto px-4 sm:px-0">
        <div 
          v-for="work in otherWorks" 
          :key="work.title" 
          class="mb-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <router-link 
            v-if="work.link" 
            :to="work.link" 
            class="block"
          >
            <h4 class="font-medium text-gray-800 hover:text-blue-600 text-base sm:text-lg">
              {{ work.title }}
            </h4>
            <p class="text-xs sm:text-sm text-gray-600">{{ work.description }}</p>
          </router-link>
          <div v-else>
            <h4 class="font-medium text-gray-800 text-base sm:text-lg">
              {{ work.title }}
            </h4>
            <p class="text-xs sm:text-sm text-gray-600">{{ work.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
