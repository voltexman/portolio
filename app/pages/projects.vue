<script setup lang="ts">
import { Tag } from 'lucide-vue-next';
import { projects } from '~/data/projects';
</script>

<template>
  <NuxtLayout>
    <div class="min-h-screen bg-neutral-50 pb-20">
      <!-- Header сторінки -->
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col items-center text-center">
          <span class="text-xs font-black tracking-wider text-neutral-400 mb-4">
            Портфоліо
          </span>
          <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-neutral-950">
            Вибрані роботи
          </h1>
          <p class="mt-4 max-w-md text-neutral-500 text-lg">
            Проекти, в яких поєднуються сучасні технології, увага до деталей та реальна цінність для бізнесу
          </p>
        </div>
      </div>

      <!-- Сітка проектів -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
        <NuxtLink v-for="project in projects" :key="project.link" :to="`/project/${project.link}`"
          class="group flex flex-col bg-stone-100 rounded-xl overflow-hidden border border-neutral-100 hover:border-stone-200 transition-all duration-500 hover:shadow-xl hover:shadow-stone-600/5">
          <!-- Зображення -->
          <div class="relative aspect-video overflow-hidden bg-neutral-100">
            <NuxtImg :src="project.image"
              class="size-full object-cover transition-all duration-700 group-hover:scale-105" alt="" />

            <!-- Рік -->
            <div
              class="absolute top-5 right-5 px-4 py-1.5 bg-white/95 backdrop-blur-md text-xs font-bold tracking-widest rounded-2xl border border-white/60 shadow-sm">
              {{ project.year }}
            </div>

            <!-- Hover ефект -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <div
                class="size-14 rounded-2xl bg-white/90 backdrop-blur-lg flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all">
                <Icon name="ph:arrow-right-bold" size="24" class="text-neutral-900" />
              </div>
            </div>
          </div>

          <!-- Інформація -->
          <div class="p-5 flex-1 flex flex-col">
            <div class="mb-2">
              <span v-text="project.category"
                class="inline-block text-xs font-medium tracking-wide text-neutral-400"></span>
              <h2 v-text="project.title"
                class="text-2xl font-bold tracking-tight text-neutral-950 group-hover:text-black transition-colors leading-tight">
              </h2>
            </div>

            <!-- Теги -->
            <div class="flex flex-wrap gap-2 mt-auto pt-5">
              <span v-for="tag in project.tags" :key="tag"
                class="text-[10px] font-medium px-3.5 py-1.5 bg-neutral-100 text-neutral-500 rounded-full border border-neutral-200 group-hover:border-neutral-200 transition-colors">
                <Tag class="size-3 shrink-0 inline-flex mb-0.5" />
                {{ tag }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Футер-повідомлення -->
      <div class="mt-20 text-center">
        <p class="text-neutral-400 text-sm">
          Хочете такий самий або ще кращий проект для свого бізнесу?
        </p>
        <NuxtLink to="/order"
          class="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-neutral-950 hover:text-black group">
          Обговорити ваш проект
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>