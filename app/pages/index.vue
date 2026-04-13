<script setup>
import { GraduationCap, BriefcaseBusiness, Code2, Zap, ShieldCheck, Smartphone, Cpu, Search } from 'lucide-vue-next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { projects } from '~/data/projects';
import { faqs } from '~/data/faqs';

</script>

<template>
  <NuxtLayout>
    <template #header>
      <div class="flex flex-col items-center pt-20">
        <div class="flex flex-col justify-center items-center">
          <div class="size-50 mx-auto mt-10 mb-5">
            <NuxtImg src="/person.png"
              class="size-full object-cover object-top rounded-full p-0.5 shadow-xl border border-stone-300 grayscale-15 contrast-110" />
          </div>
          <h1 class="font-[Montserrat] text-3xl text-nowrap font-extrabold leading-none">
            Лісовий Євгеній
          </h1>
          <div class="text-neutral-500 font-[Oswald] text-sm font-semibold tracking-widest mt-1 text-nowrap">
            WEB-розробник
          </div>
        </div>
        <div class="mt-5 mx-auto flex gap-2.5">
          <Icon name="mynaui:brand-facebook" size="22" />
          <Icon name="mynaui:brand-instagram" size="25" />
          <Icon name="mynaui:brand-telegram" size="25" />
        </div>

        <div class="max-w-xl mx-auto flex flex-wrap justify-center gap-2 px-4 py-6 lg:px-0">
          <!-- Основні послуги -->
          <span class="badge-solid">Сайт-візитка</span>
          <span class="badge-solid">Магазин</span>
          <span class="badge-solid">Оновлення</span>
          <span class="badge-solid">Каталог</span>
          <span class="badge-solid">Розробка</span>
          <span class="badge-solid">Дизайн</span>

          <!-- Технологічні переваги (з іконками в тому ж кольорі) -->
          <span class="badge-solid">
            <Cpu class="w-3.5 h-3.5 mr-1.5" /> AI Інтеграція
          </span>
          <span class="badge-solid">
            <Smartphone class="w-3.5 h-3.5 mr-1.5" /> Адаптивність
          </span>
          <span class="badge-solid">
            <Zap class="w-3.5 h-3.5 mr-1.5" /> Швидкість
          </span>
          <span class="badge-solid">
            <Search class="w-3.5 h-3.5 mr-1.5" /> SEO
          </span>
        </div>

        <div class="mt-5 max-w-3xl mx-auto px-6 text-center group">
          <!-- Верхня тонка лінія з мікро-іконкою -->
          <div class="flex items-center justify-center gap-4 mb-8">
            <div class="h-px w-12 bg-neutral-200"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
            <div class="h-px w-12 bg-neutral-200"></div>
          </div>

          <div class="relative">
            <!-- Деликатна лапка на фоні -->
            <span
              class="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-neutral-100/60 font-serif select-none pointer-events-none">
              “
            </span>

            <p class="relative text-neutral-700 leading-relaxed font-light tracking-wide text-balance">
              <!-- Перша частина — Акцент -->
              <span class="font-medium text-neutral-900">
                Я переконаний, що програмування — це не просто обсяг знань, а вміння аналізувати та знаходити рішення.
              </span>

              <!-- Історична частина — Італік та м'який колір -->
              <span class="block mt-4 text-neutral-500 italic font-serif">
                Колись поява ткацьких верстатів викликала страх у тих, хто не встигав пристосуватися: вбачаючи в машинах
                загрозу, люди намагалися їх знищити. Проте історія вчить нас, що прогрес варто не зупиняти, а очолювати.
              </span>

              <!-- Фінал — Впевненість -->
              <span class="block mt-4 text-neutral-800 font-medium">
                Я допоможу вашому бізнесу не боятися змін і поставлю технології штучного інтелекту вам на службу.
              </span>
            </p>
          </div>

          <!-- Нижня лінія -->
          <div class="flex items-center justify-center gap-4 mt-8">
            <div class="h-px w-24 bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>
          </div>
        </div>

        <NuxtLink to="/order"
          class="mt-5 mx-auto w-fit group relative flex gap-5 items-center justify-between overflow-hidden rounded-full bg-neutral-950 px-6 py-4 transition-all duration-500 hover:bg-black hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)]">
          <div class="relative z-10 flex flex-col items-start gap-0.5">
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Замовити проект
            </span>
            <span
              class="text-[9px] font-medium uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-neutral-400">
              Обговорити ідею
            </span>
          </div>

          <div
            class="relative flex size-9 items-center justify-center rounded-xl bg-white/40 transition-all duration-500 group-hover:bg-white group-hover:text-black">
            <Icon name="ph:arrow-right-bold" size="16"
              class="transition-transform duration-500 group-hover:translate-x-0.5" />
          </div>

          <div
            class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full">
          </div>
        </NuxtLink>
      </div>
    </template>

    <section>
      <Tabs default-value="projects">
        <TabsList class="mx-auto bg-stone-200 -mt-20 mb-10">
          <TabsTrigger value="projects">
            Проекти
          </TabsTrigger>
          <TabsTrigger value="resume">
            Резюме
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <!-- Header секції -->
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div class="max-w-xl">
              <span
                class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-4 block">Портфоліо</span>
              <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 italic">
                Вибрані проєкти, що <br />
                <span class="not-italic text-neutral-400">змінюють гру.</span>
              </h2>
            </div>
            <NuxtLink to="/projects"
              class="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-950">
              Усі роботи
              <div
                class="size-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <Icon name="ph:arrow-up-right-bold" size="14" />
              </div>
            </NuxtLink>
          </div>

          <!-- Сітка проєктів -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <NuxtLink v-for="(project, index) in projects" :to="`/project/${project.link}`" :key="index"
              class="group cursor-pointer" :class="index % 2 !== 0 ? 'md:mt-24' : ''">
              <!-- Зображення з ефектом занурення -->
              <div class="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100">
                <NuxtImg :src="project.image"
                  class="size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1" />
                <!-- Overlay при ховері -->
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div
                    class="size-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Icon name="ph:eye-bold" class="text-black" size="24" />
                  </div>
                </div>
                <!-- Рік проєкту -->
                <span
                  class="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                  {{ project.year }}
                </span>
              </div>

              <!-- Інфо про проєкт -->
              <div class="mt-8 flex justify-between items-start">
                <div>
                  <span v-html="project.category"
                    class="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2 block pe-1"></span>
                  <h3 v-html="project.title"
                    class="text-2xl font-black tracking-tight text-neutral-950 group-hover:text-neutral-600 transition-colors">
                  </h3>
                </div>
                <div class="flex gap-2">
                  <span v-for="tag in project.tags" :key="tag"
                    class="text-[9px] font-black uppercase tracking-tighter px-2 py-1 border border-neutral-200 rounded text-neutral-400 group-hover:border-neutral-300 group-hover:text-black transition-colors">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </TabsContent>

        <TabsContent value="resume">

          <!-- Секція: Освіта -->
          <section class="mb-12">
            <div class="flex items-center gap-3 mb-8">
              <div class="bg-black p-2 rounded-lg">
                <GraduationCap class="h-6 w-6 text-white" />
              </div>
              <h2 class="text-2xl font-black tracking-tight uppercase">Освіта</h2>
            </div>

            <div
              class="space-y-10 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-200">

              <!-- Одеська академія (Вища за пріоритетом зверху) -->
              <div class="relative pl-12 group">
                <div
                  class="absolute left-0 top-1.5 w-9 h-9 bg-white border-2 border-stone-300 rounded-full flex items-center justify-center z-10 group-hover:border-black transition-colors duration-300">
                  <div class="size-2 bg-stone-400 rounded-full group-hover:bg-black"></div>
                </div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h3 class="text-lg font-bold text-neutral-900 leading-tight">Одеська національна академія зв’язку ім.
                    О.
                    С. Попова</h3>
                  <span
                    class="w-fit text-xs font-bold px-3 py-1 bg-stone-200 text-stone-500 rounded-full h-fit whitespace-nowrap">2010
                    — 2014</span>
                </div>
                <p class="text-black font-semibold mt-1">Телекомунікаційні системи та мережі</p>
                <p class="text-sm text-neutral-500 mt-2 italic">Кваліфікація: інженер у галузі електроніки та
                  телекомунікацій</p>
              </div>

              <!-- Вінницький коледж -->
              <div class="relative pl-12 group">
                <div
                  class="absolute left-0 top-1.5 w-9 h-9 bg-white border-2 border-stone-300 rounded-full flex items-center justify-center z-10 group-hover:border-black transition-colors duration-300">
                  <div class="size-2 bg-stone-400 rounded-full group-hover:bg-black"></div>
                </div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h3 class="text-lg font-bold text-neutral-900 leading-tight">Вінницький технічний коледж</h3>
                  <span
                    class="w-fit text-xs font-bold px-3 py-1 bg-stone-200 text-stone-500 rounded-full h-fit whitespace-nowrap">2007
                    — 2010</span>
                </div>
                <p class="text-black font-semibold mt-1">Обслуговування комп’ютерних та інтелектуальних систем і мереж
                </p>
                <p class="text-sm text-neutral-500 mt-2 italic">Кваліфікація: технік з обчислювальної техніки</p>
              </div>
            </div>
          </section>

          <!-- Секція: Досвід роботи -->
          <section>
            <div class="flex items-center gap-3 mb-8">
              <div class="bg-black p-2 rounded-lg">
                <BriefcaseBusiness class="h-6 w-6 text-white" />
              </div>
              <h2 class="text-2xl font-black tracking-tight uppercase">Досвід роботи</h2>
            </div>

            <div
              class="relative pl-12 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-200">
              <div class="relative group">
                <div
                  class="absolute -left-12 top-1.5 w-9 h-9 bg-black border-2 border-black rounded-full flex items-center justify-center z-10">
                  <Code2 class="h-4 w-4 text-white" />
                </div>
                <div
                  class="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-black">PHP Back-End розробник</h3>
                      <p class="text-neutral-500 font-medium">Веб-студія</p>
                    </div>
                    <span
                      class="w-fit text-xs font-bold px-3 py-1 bg-black text-white rounded-full whitespace-nowrap">2019
                      —
                      2020</span>
                  </div>
                  <p class="text-neutral-600 leading-relaxed text-sm">
                    Розробка серверної частини веб-проєктів на PHP, підтримка та вдосконалення функціоналу сайтів.
                    Займався інтеграцією з базами даних, оптимізацією продуктивності та брав активну участь у Front-end
                    розробці.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span
                      class="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-neutral-100 rounded">PHP</span>
                    <span
                      class="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-neutral-100 rounded">MySQL</span>
                    <span
                      class="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-neutral-100 rounded">Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </section>

    <!-- Стек технологій -->
    <section class="my-10">
      <div class="mb-10 text-center">
        <h2 class="text-2xl font-black tracking-tighter uppercase mb-1">
          Стек технологій
        </h2>
        <p class="text-neutral-500 font-medium text-sm">
          Все що я застосовую в своїх роботах
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <!-- Кожна картка має тонкий бордер та ефект при наведенні -->
        <div
          class="rounded-md group bg-red-50 border border-red-100 p-4 transition-all hover:border-red-500 hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
          <span class="block text-[10px] uppercase tracking-[0.2em] text-red-400 mb-1">Framework</span>
          <h4 class="font-bold text-lg">Laravel</h4>
        </div>

        <div
          class="rounded-md group bg-linear-to-r from-cyan-50 to-green-50 border border-teal-100 p-4 transition-all hover:border-teal-500 hover:shadow-[4px_4px_0px_0px_rgba(20,184,166,1)]">
          <span class="block text-[10px] uppercase tracking-[0.2em] text-cyan-400 mb-1">Frontend</span>
          <h4 class="font-bold text-lg">React / Vue</h4>
        </div>

        <div
          class="rounded-md group bg-pink-50 border border-pink-100 p-4 transition-all hover:border-pink-400 hover:shadow-[4px_4px_0px_0px_rgba(244,114,182,1)]">
          <span class="block text-[10px] uppercase tracking-[0.2em] text-pink-400 mb-1">Styling</span>
          <h4 class="font-bold text-lg text-nowrap">
            Tailwindcss <span class="hidden lg:inline-block">/ Bootstrap</span>
          </h4>
        </div>

        <div
          class="rounded-md group bg-amber-50 border border-amber-100 p-4 transition-all hover:border-amber-500 hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,1)]">
          <span class="block text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-1">Admin Panel</span>
          <h4 class="font-bold text-lg">Filament</h4>
        </div>

        <div
          class="rounded-md group bg-violet-50 border border-violet-100 p-4 transition-all hover:border-violet-500 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,1)]">
          <span class="block text-[10px] uppercase tracking-[0.2em] text-violet-400 mb-1">Build Tool</span>
          <h4 class="font-bold text-lg">Vite</h4>
        </div>

        <div
          class="rounded-md group border border-black bg-black p-4 transition-all shadow-[4px_4px_0px_0px_rgba(200,200,200,1)]">
          <span class="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">Other</span>
          <h4 class="font-bold text-lg text-white font-mono">Full Stack</h4>
        </div>
      </div>
    </section>

    <!-- Навички -->
    <section class="mb-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        <!-- Nuxt 3 -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Nu</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">Nuxt 3</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[95%] bg-black rounded"></div>
          </div>
        </div>

        <!-- Laravel -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">La</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">Laravel</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[92%] bg-black rounded"></div>
          </div>
        </div>

        <!-- React -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Re</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">React</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[85%] bg-black rounded"></div>
          </div>
        </div>

        <!-- Vue.js -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Vu</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">Vue.js</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[90%] bg-black rounded"></div>
          </div>
        </div>

        <!-- TypeScript -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Ts</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">TypeScript</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[88%] bg-black rounded"></div>
          </div>
        </div>

        <!-- Tailwind CSS -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Tw</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">
              Tailwind CSS
            </span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[95%] bg-black rounded"></div>
          </div>
        </div>

        <!-- Blade -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Bl</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">Blade</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[90%] bg-black rounded"></div>
          </div>
        </div>

        <!-- Livewire -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Lw</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">Livewire</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[82%] bg-black rounded"></div>
          </div>
        </div>

        <!-- Pinia -->
        <div>
          <div class="flex items-end gap-4">
            <span class="text-4xl font-bold text-black">Pi</span>
            <span class="text-sm uppercase tracking-widest text-gray-500">Pinia</span>
          </div>
          <div class="h-2 bg-gray-200 mt-3 rounded">
            <div class="h-2 w-[85%] bg-black rounded"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 max-w-3xl w-full mx-auto">
      <div class="mb-10 text-center">
        <h2 class="text-2xl font-black tracking-tighter uppercase mb-1">
          Часті запитання
        </h2>
        <p class="text-neutral-500 font-medium text-sm">
          Відповіді на те, що клієнти запитують найчастіше
        </p>
      </div>

      <Accordion type="single" collapsible class="w-full space-y-2">
        <AccordionItem v-for="faq in faqs" :key="faq.value" :value="faq.value"
          class="border border-neutral-200/60 rounded-lg px-6 bg-white transition-all hover:border-neutral-200 hover:bg-white/60">
          <AccordionTrigger
            class="font-[Montserrat]! text-left font-bold py-6 hover:no-underline text-neutral-900 tracking-tight">
            {{ faq.question }}
          </AccordionTrigger>
          <AccordionContent class="text-neutral-600 leading-relaxed pb-6">
            {{ faq.answer }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </NuxtLayout>
</template>

<style scoped>
@reference "tailwindcss";

.badge-solid {
  @apply inline-flex items-center px-4 py-1.5 rounded-full border border-amber-100 bg-amber-50 text-amber-700 text-xs font-semibold tracking-wide;
}
</style>