<script setup>
import { ref, computed } from 'vue'

const projects = ref([
  {
    title: 'Vitrine E-commerce Woocommerce com Wordpress',
    description: 'Sistema de vitrine utilizando Woocommerce para uma micro confeitaria artesanal.',
    technologies: ['VPS', 'Wordpress', 'WooCommerce', 'Docker', 'Linux'],
    image: '/projects/erp.jpg',
    status: 'Em desenvolvimento',
    link: '#',
    category: 'web'
  },
  {
    title: 'Feed de vídeos de futebol',
    description: 'Plataforma de Feed de vídeos de futebol com CRUD, rolagem infinita e busca de vídeos de um canal específico do Youtube.',
    technologies: ['Laravel', 'Blade', 'PostgreSQL', 'Digital Ocean', 'HTML', 'CSS', 'JavaScript', 'Linux'],
    image: '/projects/ecommerce.jpg',
    status: 'Em desenvolvimento',
    link: '#',
    category: 'web'
  },
  {
    title: 'Site para caminhoneiro autonomo',
    description: 'Website para divulgação de serviços de um caminhoneiro autônomo com informações sobre o veiculo, localização e contato.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Linux'],
    image: '/projects/clinic.jpg',
    status: 'Em desenvolvimento',
    link: '#',
    category: 'web'
  },
  {
    title: 'Website pessoal',
    description: 'Website pessoal.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Linux', 'Vue.js', 'BASH', 'Nginx', 'Automatizações'],
    image: '/projects/clinic.jpg',
    status: 'Concluído',
    link: 'https://www.rodrigobaltazar.com.br',
    category: 'all'
  },
  {
    title: 'Fronteiras da Ciência - UFRGS',
    description: 'Instalação e reparação de bugs no template Wordpress do site Fronteiras da Ciência - UFRGS.',
    technologies: ['Wordpress', 'CPD', 'Liderança', 'Responsividade', 'Migração'],
    image: '/projects/front.jpg',
    status: 'Concluído',
    link: 'https://www.ufrgs.br/frontdaciencia/',
    category: 'all'
  }
])

const categories = ref([
  { id: 'all', name: 'Todos' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'desktop', name: 'Desktop' }
])

const activeCategory = ref('all')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects.value
  return projects.value.filter(project => project.category === activeCategory.value)
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
    <!-- Cabeçalho Responsivo -->
    <div class="text-center mb-8 sm:mb-16">
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
        Meus Projetos
      </h1>
      <p class="text-base sm:text-xl text-gray-600">
        Uma seleção dos projetos que desenvolvi ou estou desenvolvendo
      </p>
    </div>

    <!-- Filtros Responsivos -->
    <div class="flex flex-wrap justify-center gap-2 sm:space-x-4 mb-8 sm:mb-12">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="activeCategory = category.id"
        :class="[
          'px-3 sm:px-4 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto mb-2 sm:mb-0',
          activeCategory === category.id
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Grid de Projetos Responsivo -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <div
        v-for="project in filteredProjects"
        :key="project.title"
        class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
      >
        <!-- Imagem do Projeto Responsiva -->
        <div class="relative h-40 sm:h-48 bg-gray-200">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-contain"
          />
          <div class="absolute top-2 right-2 sm:top-4 sm:right-4">
            <span
              :class="[
                'px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium',
                project.status === 'Concluído'
                  ? 'bg-green-100 text-green-800'
                  : project.status === 'Em desenvolvimento'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-blue-100 text-blue-800'
              ]"
            >
              {{ project.status }}
            </span>
          </div>
        </div>

        <!-- Conteúdo do Projeto Responsivo -->
        <div class="p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            {{ project.title }}
          </h3>
          <p class="text-sm sm:text-base text-gray-600 mb-4">{{ project.description }}</p>

          <!-- Tecnologias Responsivas -->
          <div class="flex flex-wrap gap-1 sm:gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Link do Projeto Responsivo -->
          <a
            :href="project.link"
            class="inline-flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800"
          >
            Ver projeto
            <svg
              class="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  transition: transform 0.2s;
}

.project-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.project-card:hover {
  transform: translateY(-4px);
}
</style> 