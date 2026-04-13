<script setup>
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useScroll } from '@/composables/useScroll';
import { links } from '~/data/links';

const isOpen = ref(false);
const { isScrolled } = useScroll();
</script>

<template>
  <div class="bg-neutral-50 min-h-screen">
    <!-- Навігація -->
    <nav :class="[
      'fixed top-0 left-0 w-full z-50 h-18 transition-all duration-500 flex items-center px-6',
      isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-stone-200 shadow-md shadow-black/3' : 'bg-transparent'
    ]">
      <div class="w-full flex justify-between items-center max-w-7xl mx-auto">

        <!-- ЛОГОТИП / ПРОФІЛЬ У КУТІ (З'являється при прокрутці) -->
        <div :class="[
          'flex items-center gap-3 transition-all duration-500 transform',
          isScrolled ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-90 pointer-events-none'
        ]">
          <NuxtImg src="/person.png" class="size-8 object-cover object-top rounded-full border border-gray-200"
            alt="Avatar" />
          <div class="flex flex-col leading-none">
            <span class="font-bold text-stone-900 text-sm font-[Oswald] tracking-wide">Лісовий Євгеній</span>
            <span class="text-[10px] text-gray-500">WEB-розробник</span>
          </div>
        </div>

        <!-- Десктопне меню (по центру) -->
        <div class="hidden md:flex gap-5 absolute left-1/2 -translate-x-1/2">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
            class="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Мобільний бургер (завжди справа) -->
        <div class="lg:hidden flex items-center">
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <button class="p-2 outline-none hover:bg-black/5 rounded-full transition-colors">
                <Menu class="size-6 text-gray-600" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" class="w-75 bg-white/95 backdrop-blur-xl p-0">
              <SheetTitle class="sr-only">Навігація</SheetTitle>
              <!-- Ваш контент Sheet без змін -->
              <div class="flex flex-col h-full">
                <div class="p-6 border-b border-neutral-100">
                  <p class="text-xs font-bold uppercase tracking-widest text-neutral-400">Навігація</p>
                </div>
                <div class="flex flex-col items-center justify-center h-full px-4 gap-1.5 text-center">
                  <NuxtLink v-for="link in links" :key="link.to" :to="link.to" @click="isOpen = false"
                    class="group py-2 w-full rounded-full hover:bg-neutral-100 transition-all">
                    <span class="text-lg font-semibold text-neutral-800">{{ link.name }}</span>
                  </NuxtLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>

    <!-- Основний контент -->
    <div class="pt-20">
      <slot name="header" />

      <div class="px-6 py-10 w-full">
        <div class="max-w-3xl mx-auto w-full">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
