<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projects = [
  {
    title: "Dzhohan<br>Knives",
    category: "Інтернет<br>магазин",
    image: "/project-1.jpg",
    tags: ["Laravel", "Tailwind", "Filament"],
    year: "2026",
    link: "dzhohanknives",
  },
  {
    title: "Slavena<br>Hair",
    category: "Інтернет<br>каталог",
    image: "/project-2.jpg",
    tags: ["Laravel", "GSAP"],
    year: "2025",
    link: "slavenahair",
  },
  {
    title: "TryIt<br>Clining",
    category: "Сайт<br>візитка",
    image: "/project-3.jpg",
    tags: ["React", "Node.js", "AWS"],
    year: "2025",
    link: "tryit",
  },
];

const faqs = [
  {
    value: "item-1",
    question: "Скільки часу займає розробка сайту?",
    answer:
      "Терміни залежать від складності: Landing Page зазвичай займає від 7 до 14 днів, корпоративний сайт — 3-5 тижнів, а складні e-commerce рішення або платформи — від 2 місяців. Ми завжди фіксуємо дедлайни в договорі.",
  },
  {
    value: "item-2",
    question: "Чи буде мій сайт адаптованим під мобільні пристрої?",
    answer:
      "Безумовно. Ми використовуємо підхід Mobile-First. Ваш сайт буде ідеально виглядати на iPhone, Android, планшетах та великих 4K моніторах завдяки Tailwind CSS.",
  },
  {
    value: "item-4",
    question: "Чи зможу я самостійно редагувати контент на сайті?",
    answer:
      "Так. Ми інтегруємо інтуїтивно зрозумілу систему керування (CMS). Ви зможете змінювати тексти, фото та додавати нові товари чи публікації без знання коду.",
  },
  {
    value: "item-5",
    question: "Чи входить SEO-оптимізація у вартість розробки?",
    answer:
      "Ми робимо базову технічну SEO-підготовку: правильна структура тегів (H1-H6), оптимізація швидкості завантаження (Vite) та налаштування мета-тегів, щоб сайт був готовий до просування.",
  },
  {
    value: "item-6",
    question: "Як відбувається процес оплати?",
    answer:
      "Зазвичай ми працюємо за схемою 50/50: передоплата для старту проєкту та фінальний розрахунок після успішного тестування та запуску сайту на вашому хостингу.",
  },
];
</script>

<template>
  <NuxtLayout>
    <template #header>
      <div class="size-50 mx-auto mt-10">
        <NuxtImg src="/person.png"
          class="size-full object-cover object-top rounded-full p-0.5 border-2 border-neutral-300 grayscale-15 contrast-110" />
      </div>

      <div class="flex flex-col items-center mt-5">
        <h1 class="font-[Montserrat] text-3xl text-nowrap font-extrabold leading-none">
          Лісовий Євгеній
        </h1>
        <div class="text-neutral-500 font-[Oswald] text-sm font-semibold tracking-widest mt-1 text-nowrap">
          WEB-розробник
        </div>
        <div class="mt-5 mx-auto flex gap-2.5">
          <Icon name="mynaui:brand-facebook" size="22" />
          <Icon name="mynaui:brand-instagram" size="25" />
          <Icon name="mynaui:brand-telegram" size="25" />
        </div>

        <div class="mt-5 text-gray-600 text-center max-w-2xl mx-auto px-5 lg:px-0">
          Я переконаний, що програмування — це не просто обсяг знань, а вміння аналізувати та знаходити рішення. Колись
          поява ткацьких верстатів викликала страх у тих, хто не встигав пристосуватися: вбачаючи в машинах загрозу,
          люди намагалися їх знищити. Проте історія вчить нас, що прогрес варто не зупиняти, а очолювати. Я допоможу
          вашому бізнесу не боятися змін і поставлю технології штучного інтелекту вам на службу
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

    <section class="max-w-7xl mx-auto">
      <Tabs default-value="projects">
        <TabsList class="mx-auto bg-stone-200 mb-10">
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
          <!-- Освіта -->
          <section class="mb-10">
            <h2 class="text-xl font-black mb-4 border-b-2 border-black inline-block pb-1">
              Освіта
            </h2>

            <div class="mb-8">
              <h3 class="font-medium">Вінницький технічний коледж</h3>
              <p class="text-sm text-gray-500">2007 — 2010</p>
              <p class="font-medium mt-1">
                Обслуговування комп’ютерних та інтелектуальних систем і мереж
              </p>
              <p class="text-sm text-gray-600 mt-2">
                Кваліфікація: технік з обчислювальної техніки.
              </p>
            </div>

            <div>
              <h3 class="font-medium">
                Одеська національна академія зв’язку ім. О. С. Попова
              </h3>
              <p class="text-sm text-gray-500">2010 — 2014</p>
              <p class="font-medium mt-1">Телекомунікаційні системи та мережі</p>
              <p class="text-sm text-gray-600 mt-2">
                Кваліфікація: інженер у галузі електроніки та телекомунікацій.
              </p>
            </div>
          </section>

          <!-- Досвід роботи -->
          <section class="mb-10">
            <h2 class="text-xl font-black mb-4 border-b-2 border-black inline-block pb-1">
              Досвід роботи
            </h2>

            <div>
              <h3 class="font-medium">PHP Back-End розробник · Веб-студія</h3>
              <p class="text-sm text-gray-500">2019 — 2020</p>
              <p class="text-sm text-gray-600 mt-2">
                Розробка серверної частини веб-проєктів на PHP, підтримка та
                вдосконалення функціоналу сайтів, інтеграція з базами даних,
                оптимізація продуктивності та участь у Front-end розробці.
              </p>
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
          <AccordionTrigger class="text-left font-bold py-6 hover:no-underline text-neutral-900 tracking-tight">
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
