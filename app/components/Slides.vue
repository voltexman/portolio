<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = ref([
  {
    titleFirst: "Розробка сайтів",
    titleSecond: "будь-якої складності",
    description:
      "Створюю сучасні, швидкі, оптимізовані сайти, які працюють на результат. Знаходжу баланс, поєднцючи дизайн, високу швидкість та надійність для масштабування вашого бізнесу",
    image: "/header-creating-site.png",
    tags: [
      "Лендінг",
      "Візитка",
      "Корпоративний",
      "E-commerce",
      "Інтернет-магазин",
      "Каталог",
    ],
  },
  {
    titleFirst: "Оновлення та",
    titleSecond: "осучаснення сайтів",
    description:
      "Якщо ваш сайт застарів, втратив візуальну привабливість або повільно працює — не дозволяйте йому гальмувати ваш бізнес. Звертайтесь, і я виправлю це",
    image: "/header-rebrending.png",
    tags: [
      "рестайлінг",
      "редизайн",
      "ребрендінг",
      "SEO-friendly",
      "оновлення",
      "презентація",
    ],
  },
]);

const currentSlide = ref(0);
const slideDuration = 15000;
let timer = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

onMounted(() => {
  timer = setInterval(nextSlide, slideDuration);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <section
    class="relative min-h-120 lg:min-h-150 overflow-hidden bg-neutral-50 group"
  >
    <!-- Слайди з анімацією Fade -->
    <TransitionGroup name="fade">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        v-show="currentSlide === index"
        class="absolute inset-0 size-full"
      >
        <!-- Background image -->
        <NuxtImg
          :src="slide.image"
          alt=""
          class="absolute inset-0 size-full object-cover object-right transition-transform duration-1250 ease-out group-hover:scale-[1.03]"
          loading="eager"
          quality="90"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/45 lg:bg-transparent lg:bg-linear-to-r lg:from-black/25 lg:from-25% lg:via-black/20 lg:via-40% lg:to-transparent lg:to-75%"
        ></div>

        <!-- Content -->
        <div
          class="relative z-10 mx-auto flex min-h-120 lg:min-h-150 max-w-7xl items-center px-6 lg:px-12"
        >
          <div class="w-full max-w-lg">
            <h1
              class="text-3xl font-black leading-[1.05] tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl"
            >
              <span class="text-3xl lg:text-6xl">{{ slide.titleFirst }}</span>
              <br />
              <span
                class="bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
              >
                {{ slide.titleSecond }}
              </span>
            </h1>

            <div
              class="mt-5 lg:mt-10 max-w-2xl text-base leading-6 lg:leading-7 text-neutral-300 sm:text-lg lg:text-xl"
            >
              {{ slide.description }}
            </div>

            <!-- Теги -->
            <div class="mt-5 flex flex-wrap gap-1">
              <span
                v-for="tag in slide.tags"
                :key="tag"
                class="px-3 py-1 flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-white bg-neutral-100/40 backdrop-blur-xs rounded-full border border-neutral-100/40"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-10 flex flex-wrap">
              <NuxtLink
                to="/order"
                class="inline-flex rounded-full bg-white text-black px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Обговорити проєкт
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>

    <!-- ТАЙМБАР (Progress Bar) -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-neutral-200/20 z-20">
      <div
        :key="currentSlide"
        class="h-full bg-linear-to-r from-black/20 to-white/30 transition-none animate-progress"
        :style="{ animationDuration: slideDuration + 'ms' }"
      ></div>
    </div>
  </section>
</template>

<style scoped>
/* Плавне зникнення та поява слайдів */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Анімація таймбару */
@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.animate-progress {
  animation-name: progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
</style>
