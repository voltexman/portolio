<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import ProjectLayout from '~/layouts/ProjectLayout.vue';
</script>

<template>
  <ProjectLayout>
    <template #header>
      <section class="relative h-150 overflow-hidden group">
        <NuxtLink to="/projects" class="absolute bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 
             bg-white/40 backdrop-blur-md border border-white/20 
             rounded-full text-xs font-semibold text-neutral-700
             transition-all duration-300 
             hover:bg-white/60 hover:shadow-sm">
          <ArrowLeft class="w-4 h-4" />
          До проектів
        </NuxtLink>
        <NuxtImg src="/project-1.jpg" class="size-full object-center object-cover" />
      </section>
      <div
        class="bg-neutral-100 border-b border-e-neutral-200 h-18 px-6 lg:px-12 flex items-center justify-between sticky top-0 z-20">
        <div class="flex gap-2 lg:gap-4">
          <div>
            <div class="text-sm font-semibold text-neutral-800">Клієнт</div>
            <div class="text-sm font-medium text-neutral-700">
              Джоган Костянтин
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-neutral-800">Рік</div>
            <div class="text-sm font-medium text-neutral-700">2026</div>
          </div>
        </div>

        <NuxtLink to="http://www.dzhohanknives.com" target="_blank" external
          class="bg-neutral-900 px-4 py-2 flex items-center gap-1 rounded-full text-white text-sm">Перейти
          <Icon name="ph:arrow-up-right" size="16" />
        </NuxtLink>
      </div>
    </template>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 py-10 border-b border-neutral-100">
      <!-- Задача -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:target-bold" class="text-neutral-400" size="14" />
          <span class="text-[10px] font-black uppercase tracking-widest text-neutral-400">Ціль</span>
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          Створення швидкої екосистеми для замовлень
        </p>
      </div>

      <!-- Результат -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:chart-line-up-bold" class="text-neutral-400" size="14" />
          <span class="text-[10px] font-black uppercase tracking-widest text-neutral-400">Ефект</span>
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          +45% до швидкості завантаження сторінок
        </p>
      </div>

      <!-- Об'єм роботи -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:stack-bold" class="text-neutral-400" size="14" />
          <span class="text-[10px] font-black uppercase tracking-widest text-neutral-400">Масштаб</span>
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          12 унікальних сторінок та адмін-панель
        </p>
      </div>

      <!-- Статус -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:check-circle-bold" class="text-green-500" size="14" />
          <span class="text-[10px] font-black uppercase tracking-widest text-neutral-400">Статус</span>
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          Проєкт запущено та підтримується
        </p>
      </div>
    </div>

    <section class="mt-10">
      <div class="flex flex-col md:flex-row gap-16">
        <!-- Ліва колонка: Типографіка -->
        <div class="flex-1 space-y-8">
          <div>
            <span
              class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-6 block">Typography</span>
            <div class="space-y-4">
              <div class="flex items-baseline gap-4">
                <span class="text-5xl font-black tracking-tighter italic">Aa</span>
                <div>
                  <p class="text-sm font-black uppercase tracking-widest">
                    Montserrat
                  </p>
                  <p class="text-[10px] text-neutral-400 uppercase">
                    Headings / Accents
                  </p>
                </div>
              </div>
              <div class="h-px bg-neutral-100 w-full"></div>
              <div class="flex items-baseline gap-4">
                <span class="text-4xl font-medium">Aa</span>
                <div>
                  <p class="text-sm font-black uppercase tracking-widest">
                    Inter / Oswald
                  </p>
                  <p class="text-[10px] text-neutral-400 uppercase">
                    Body text / Interface
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Права колонка: Кольорова палітра -->
        <div class="flex-1">
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-6 block">Color
            Palette</span>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <!-- Колір 1 -->
            <div class="space-y-2">
              <div class="h-20 w-full rounded-2xl bg-neutral-950 border border-neutral-800 flex items-end p-3">
                <span class="text-[9px] font-bold text-neutral-500">#0A0A0A</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Deep Obsidian
              </p>
            </div>
            <!-- Колір 2 -->
            <div class="space-y-2">
              <div class="h-20 w-full rounded-2xl bg-neutral-400 border border-neutral-200 flex items-end p-3">
                <span class="text-[9px] font-bold text-neutral-100">#A3A3A3</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Steel Grey
              </p>
            </div>
            <!-- Колір 3 -->
            <div class="space-y-2">
              <div class="h-20 w-full rounded-2xl bg-neutral-100 border border-neutral-200 flex items-end p-3">
                <span class="text-[9px] font-bold text-neutral-400">#F5F5F5</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Mist White
              </p>
            </div>
            <!-- Колір 4 (Акцентний) -->
            <div class="space-y-2">
              <div class="h-20 w-full rounded-2xl bg-orange-600 flex items-end p-3 shadow-lg shadow-orange-600/20">
                <span class="text-[9px] font-bold text-orange-100">#EA580C</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Forge Ember
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Технічний стек (додаткові деталі) -->
      <div
        class="mt-16 flex flex-wrap gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div class="flex items-center gap-3">
          <Icon name="logos:laravel" size="24" />
          <span class="text-xs font-bold uppercase tracking-widest">
            Laravel Backend
          </span>
        </div>
        <div class="flex items-center gap-3">
          <Icon name="logos:tailwindcss-icon" size="24" />
          <span class="text-xs font-bold uppercase tracking-widest">
            Tailwind CSS
          </span>
        </div>
      </div>
    </section>

    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        <!-- Виклик -->
        <div class="p-8 bg-violet-100 rounded-2xl border border-violet-200">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="size-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg shadow-black/20">
              <Icon name="ph:lightning-bold" size="16" />
            </div>
            <h3 class="font-black uppercase tracking-tight text-lg">Виклик</h3>
          </div>
          <p class="text-neutral-800 text-sm leading-relaxed">
            Продажі через соцмережі не передавали преміальність виробів. Я мав
            структурувати каталог та побудувати довіру через професійну
            презентацію складних технічних характеристик металу, зробивши вибір
            для клієнта зрозумілим та естетичним.
          </p>
        </div>

        <!-- Рішення -->
        <div class="p-8 bg-black text-white rounded-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="size-8 bg-white text-black rounded-full flex items-center justify-center">
              <Icon name="ph:framer-logo-bold" size="16" />
            </div>
            <h3 class="font-black uppercase tracking-tight text-lg text-white">
              Рішення
            </h3>
          </div>
          <p class="text-neutral-400 text-sm leading-relaxed">
            Я зробив ставку на макро-фотографію та чисту типографіку. Впровадив
            інтерактивну форму кастомного замовлення та розробив детальний
            технічний паспорт для кожного ножа, що перетворило сайт на
            повноцінний інструмент для професійних продажів.
          </p>
        </div>
      </div>

      <div class="mt-16 max-w-3xl">
        <h2 class="text-xl font-black mb-6 border-b-2 border-black inline-block pb-1 uppercase tracking-tighter italic">
          Моя філософія в проєкті
        </h2>
        <p class="text-neutral-700 leading-relaxed text-lg font-medium">
          У цьому проєкті я відмовився від зайвих декоративних елементів, щоб
          надати слово матеріалам. Поєднання глибоких темних відтінків з
          акцентними фотографіями сталі створює атмосферу майстерні, де
          народжуються справжні артефакти. Для мене цей сайт став не просто
          цифровим продуктом, а органічним продовженням бренду майстра.
        </p>
      </div>
    </div>
  </ProjectLayout>
</template>
