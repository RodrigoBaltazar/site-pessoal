<script setup>
import { ref } from 'vue'

const services = ref([
  'Problemas de Hardware (não liga, peças com defeito)',
  'Problemas com Windows, Linux ou Macos',
  'Instalação de Impressoras',
  'Lentidão',
  'Upgrade',
  'Escolha de peças para escritório ou pc gamer',
  'Resolvo apenas no local, não retiro equipamentos do local'
])

const policies = ref([
  'Só é cobrado serviço se for resolvido',
  'Não cobro visita'
])
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Cabeçalho -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Técnico em Informática</h1>
      <p class="text-xl text-gray-600">
        Serviços técnicos profissionais com mais de 20 anos de experiência
      </p>
    </div>

    <!-- Serviços -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        <span class="bg-blue-100 px-4 py-1 rounded-lg">Serviços Ofertados</span>
      </h2>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <ul class="space-y-4">
          <li v-for="service in services" :key="service" class="flex items-start">
            <i class="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
            <span class="text-gray-700">{{ service }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Políticas -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        <span class="bg-blue-100 px-4 py-1 rounded-lg">Nossas Políticas</span>
      </h2>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <ul class="space-y-4">
          <li v-for="policy in policies" :key="policy" class="flex items-start">
            <i class="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
            <span class="text-gray-700">{{ policy }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Contato -->
    <section class="text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        <span class="bg-blue-100 px-4 py-1 rounded-lg">Entre em Contato</span>
      </h2>
      <div class="space-y-6">
        <p class="text-gray-700">Clique no ícone abaixo para iniciar uma conversa no WhatsApp</p>
        <a href="https://wa.me/5551997232493" class="inline-block hover:opacity-80 transition-opacity">
          <img src="../assets/whats.png" alt="WhatsApp" class="w-24 h-24 mx-auto">
        </a>
        <p class="text-gray-700">Ou ligue para:</p>
        <a href="tel:+5551997232493" class="text-blue-600 hover:text-blue-800 text-xl font-medium">
          (51) 99723-2493 - Rodrigo Baltazar
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fa-check {
  min-width: 20px;
}
</style> 