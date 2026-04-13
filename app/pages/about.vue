<script setup lang="ts">
import { History, Lightbulb, CodeXml, Rocket } from 'lucide-vue-next';
</script>

<template>
  <NuxtLayout>
    <header class="text-center mb-20">
      <span class="text-xs font-black tracking-wider text-neutral-400 mb-4">
        Мій шлях
      </span>
      <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 leading-none">
        Більше ніж просто <br />
        <span class="not-italic text-neutral-400">рядки коду.</span>
      </h1>
    </header>

    <!-- Timeline -->
    <div class="relative">
      <!-- Центральна вертикальна лінія -->
      <div class="absolute left-1/2 top-12 bottom-12 w-px bg-neutral-200 hidden md:block"></div>

      <!-- Секція 1 -->
      <section class="relative mb-24 md:mb-32">
        <div class="grid md:grid-cols-2 gap-10 md:gap-20 items-start">

          <!-- Ліва колонка -->
          <div class="md:text-right">
            <h2 class="text-3xl font-bold tracking-tight text-neutral-900 mb-5">Магія нульових</h2>
            <p class="text-neutral-600 leading-relaxed text-balance">
              Все почалося ще в нульових, коли я був малим і вчився в школі. Моїм улюбленим моментом були походи в гості
              до дядька. Поки всі пили чай, я годинами спостерігав за тим, як він працює на громіздких комп’ютерах з
              величезними моніторами.
            </p>
          </div>

          <!-- Центральна іконка (тільки десктоп) -->
          <div
            class="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 size-12 rounded-full bg-white border border-neutral-200 items-center justify-center z-10">
            <History class="size-5 text-sky-500" />
          </div>

          <!-- Права колонка -->
          <div>
            <div
              class="aspect-video rounded-3xl bg-neutral-100 border border-neutral-200 overflow-hidden flex items-center justify-center group">
              <div class="text-neutral-300 group-hover:scale-110 transition-transform duration-700">
                <Icon name="ph:monitor-duotone" size="88" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Секція 2 -->
      <section class="relative mb-24 md:mb-32">
        <div class="grid md:grid-cols-2 gap-10 md:gap-20 items-start">

          <!-- Ліва колонка -->
          <div>
            <div class="p-9 rounded-3xl bg-neutral-900 text-blue-400 font-mono text-sm relative overflow-hidden group">
              <div class="absolute top-6 left-6 flex gap-1.5">
                <div class="size-3 rounded-full bg-red-500/60"></div>
                <div class="size-3 rounded-full bg-amber-500/60"></div>
                <div class="size-3 rounded-full bg-emerald-500/60"></div>
              </div>
              <div class="mt-10 opacity-75 group-hover:opacity-100 transition-opacity leading-relaxed">
                10 PRINT "HELLO WORLD"<br>
                20 GOTO 10<br>
                <span class="text-white font-medium">RUN_</span>
              </div>
              <div class="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Центральна іконка -->
          <div
            class="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 size-12 rounded-full bg-white border-2 border-neutral-100 items-center justify-center z-10">
            <Lightbulb class="size-5 text-amber-500" />
          </div>

          <!-- Права колонка -->
          <div class="">
            <h2 class="text-3xl font-bold tracking-tight text-neutral-900 mb-5">Білий код на синьому фоні</h2>
            <p class="text-neutral-600 leading-relaxed italic font-serif text-balance">
              Справжня магія відбувалася на екрані: бігучі рядки символів, які перетворювалися на реальні дії. Саме
              дядько відкрив для мене цей світ. Тоді я зрозумів: код — це не просто текст, це інструмент створення нових
              світів.
            </p>
          </div>
        </div>
      </section>

      <!-- Секція 3 -->
      <section class="relative">
        <div class="grid md:grid-cols-2 gap-10 md:gap-20 items-start">

          <!-- Ліва колонка -->
          <div class="md:text-right">
            <h2 class="text-3xl font-bold tracking-tight text-neutral-900 mb-5">Сучасні рішення</h2>
            <p class="text-neutral-600 leading-relaxed text-balance">
              З того часу захоплення переросло в професію. Я пройшов шлях до розробника, який створює складні цифрові
              продукти. Сьогодні я використовую цей досвід, щоб допомагати бізнесу ставати видимим і ефективним.
            </p>
          </div>

          <!-- Центральна іконка -->
          <div
            class="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 size-12 rounded-full bg-neutral-950 border-2 border-neutral-800 items-center justify-center z-10">
            <CodeXml class="size-5 text-white" />
          </div>

          <!-- Права колонка -->
          <div class="">
            <div class="p-8 rounded-3xl bg-white border border-neutral-100 flex flex-wrap gap-3">
              <span class="px-5 py-2 bg-neutral-50 text-xs font-semibold rounded-2xl">Vue / Nuxt</span>
              <span class="px-5 py-2 bg-neutral-50 text-xs font-semibold rounded-2xl">Laravel</span>
              <span class="px-5 py-2 bg-neutral-50 text-xs font-semibold rounded-2xl">Tailwind CSS</span>
              <span class="px-5 py-2 bg-neutral-50 text-xs font-semibold rounded-2xl">AI Integration</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Фінальний блок -->
    <div class="mt-20 p-12 md:p-16 rounded-3xl bg-neutral-50 border border-neutral-100 text-center">
      <Rocket class="size-12 mx-auto mb-8 text-neutral-400" />
      <h3 class="text-3xl font-bold italic font-serif text-neutral-900 mb-6">Моя філософія</h3>
      <p class="max-w-2xl mx-auto text-neutral-600 leading-relaxed">
        Для мене розробка — це не механічне написання коду. Це аналіз та пошук найкоротшого шляху до вирішення вашої
        задачі. Я вірю, що технології мають бути зрозумілими та служити людям.
      </p>
    </div>
  </NuxtLayout>
</template>