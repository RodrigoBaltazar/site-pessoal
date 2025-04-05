<script setup>
import { ref } from 'vue'

const skills = ref([
  { category: 'Desenvolvimento', items: ['PHP', 'PostgreSQL', 'Laravel', 'HTML', 'CSS', 'JavaScript', 'Vue.js','SQL'] },
  { category: 'Infraestrutura', items: ['AWS', 'Docker', 'Linux', 'Git', 'VPS'] },
  { category: 'Suporte Técnico', items: ['Manutenção de Hardware', 'Redes', 'Segurança', 'Backup', 'Windows 7, 10, 11', 'Impressora'] }
])

const experiences = ref([
  {
    period: '2020 - Presente',
    title: 'Desenvolvedor Full Stack',
    description: 'Rodrigo Baltazar é um desenvolvedor de software com 5 anos de experiência em PHP, Laravel, PostgreSQL, HTML, CSS e JavaScript. Com conhecimento em infraestrutura, já atuou como sysadmin e gerencia sua própria VPS para projetos pessoais.',
    link: '/projetos',
    linkText: 'Ver projetos relacionados →'
  },
  {
    period: '2003 - Presente',
    title: 'Técnico de Informática',
    description: 'Prestação de serviços técnicos em hardware e software, com foco em soluções personalizadas',
    link: '/tecnico-informatica',
    linkText: 'Ver serviços técnicos →'
  }
])
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Cabeçalho -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h1>
      <p class="text-xl text-gray-600">
        Desenvolvedor Full Stack com mais de 20 anos de experiência em tecnologia.
      </p>
    </div>

    <!-- História -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        <span class="bg-blue-100 px-4 py-1 rounded-lg">Minha História</span>
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="prose prose-lg">
          <p class="text-gray-700 leading-relaxed">
            Como um profissional versátil com mais de duas décadas de experiência no mundo da tecnologia, minha jornada começou como técnico de informática, 
            onde desenvolvi uma sólida base em hardware e software.
          </p>
        </div>
        <div class="prose prose-lg">
          <p class="text-gray-700 leading-relaxed">
            Ao longo dos anos, evolui para o desenvolvimento de software, mantendo sempre o foco em criar soluções eficientes e intuitivas. 
            Esta diversidade de experiências me permite oferecer uma visão única e abrangente em cada projeto.
          </p>
        </div>
      </div>
    </section>

    <!-- Experiência -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        <span class="bg-blue-100 px-4 py-1 rounded-lg">Experiência Profissional</span>
      </h2>
      <div class="space-y-8">
        <div v-for="exp in experiences" :key="exp.title" class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-semibold text-gray-800">{{ exp.title }}</h3>
            <span class="text-sm text-gray-500">{{ exp.period }}</span>
          </div>
          <p class="text-gray-600 mb-4">{{ exp.description }}</p>
          <a v-if="exp.link" :href="exp.link" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
            {{ exp.linkText }}
          </a>
        </div>
      </div>
    </section>

    <!-- Habilidades -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        <span class="bg-blue-100 px-4 py-1 rounded-lg">Habilidades</span>
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="skill in skills" :key="skill.category" class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ skill.category }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in skill.items" :key="item" 
                  class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prose {
  max-width: none;
}
</style> 