<script setup lang="ts">
const stats = [
  { label: 'Active Users', value: '10K+' },
  { label: 'Data Points', value: '1M+' },
  { label: 'Analysis Reports', value: '500K+' },
  { label: 'Success Rate', value: '99%' }
]
</script>

<template>
  <main>
    <section class="min-h-screen relative overflow-hidden">
      <div class="container px-4 md:px-6 pt-24 lg:pt-32">
        <div class="flex flex-col items-center justify-center">
          <!--Text Content-->
          <div class="flex-1 text-center">
            <h1 class="hero-tagline text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-muted to-brand-hover bg-clip-text text-transparent">
              Your Ultimate Stats Companion
            </h1>
            <p class="text-content-muted text-lg md:text-xl mb-12">
              Track, analyze, and visualize your data with ease.
            </p>
          </div>

          <!-- Stats Section -->
          <div class="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div v-for="(stat, index) in stats" 
                 :key="index"
                 class="stat-card"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="text-3xl font-bold text-brand-hover mb-2">
                {{ stat.value }}
              </div>
              <div class="text-content-muted">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.stat-card {
  @apply bg-white p-6 rounded-lg shadow-lg text-center;
  animation: slideIn 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(50px);
  will-change: transform, opacity;
  backface-visibility: hidden;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>