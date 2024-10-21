<template>
  <nav class="p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-gray-700 text-4xl font-bold mr-8">Sanjaya Raut</h1>
      <ul class="flex space-x-20 font-bold">
        <li class="hover:text-gray-400"><router-link to="/">Home</router-link></li>
        <li class="hover:text-gray-400"><router-link to="/about">About</router-link></li>
        <li class="hover:text-gray-400"><router-link to="/projects">Projects</router-link></li>
        <li class="hover:text-gray-400"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
  </template>
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>