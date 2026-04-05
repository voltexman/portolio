<script setup>
import { ref, watch, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const isMenuOpen = ref(false);
const router = useRouter();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Блокуємо скрол основної сторінки, коли меню відкрите
if (process.client) {
  watch(isMenuOpen, (val) => {
    document.body.style.overflow = val ? "hidden" : "";
  });
}

// 1. Функція для керування скролом
const updateScroll = (val) => {
  if (process.client) {
    document.body.style.overflow = val ? "hidden" : "";
  }
};

// 2. Слідкуємо за зміною стану меню
watch(isMenuOpen, (val) => {
  updateScroll(val);
});

// 3. ПРИМУСОВЕ СКИНУТТЯ при зміні сторінки (вирішує вашу проблему)
router.afterEach(() => {
  isMenuOpen.value = false;
  updateScroll(false);
});

// 4. Очищення при видаленні компонента (про всяк випадок)
onUnmounted(() => {
  updateScroll(false);
});

const links = [
  { name: "Головна", to: "/" },
  { name: "Про мене", to: "/about" },
  { name: "Мої роботи", to: "/projects" },
];
</script>

<template>
  <div class="min-h-screen bg-neutral-50 flex">
    <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] w-full">
      <!-- Ліва колонка (чорна) -->
      <aside
        class="bg-white px-5 py-2.5 lg:p-5 flex flex-col sticky top-0 z-40 transition-all border-b shadow-lg lg:shadow-none shadow-black/3"
        :class="isMenuOpen ? 'h-screen lg:h-screen' : 'h-20 lg:h-screen'"
      >
        <!-- Фото + ім'я -->
        <div class="flex gap-2 lg:mx-auto">
          <div class="size-16 aspect-square rounded-full bg-neutral-50">
            <NuxtImg
              src="/person.png"
              class="size-full object-cover object-top rounded-full p-0.5 border-2 border-neutral-300 grayscale-15 contrast-110"
            />
          </div>

          <div class="flex flex-col self-center">
            <h1
              class="font-[Montserrat] text-2xl text-nowrap font-bold leading-none"
            >
              Лісовий Євгеній
            </h1>
            <div
              class="text-neutral-400 font-[Oswald] text-sm font-semibold tracking-widest uppercase mt-1 text-nowrap"
            >
              WEB-розробник
            </div>
          </div>

          <button
            type="button"
            @click="toggleMenu"
            class="flex lg:hidden self-center ms-auto"
          >
            <Icon name="mynaui:chevron-down" style="color: gray" size="18" />
          </button>
        </div>

        <!-- Головне меню -->
        <nav
          class="w-full mt-auto flex-col gap-1"
          :class="isMenuOpen ? '' : 'hidden lg:flex'"
        >
          <!-- Пункти меню -->
          <NuxtLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            class="group relative flex items-center h-12 px-4 rounded-lg transition-all duration-500 ease-out hover:bg-neutral-50"
            active-class="is-active"
          >
            <!-- Порядковий номер (сірий, стає чорним при активності) -->
            <span
              class="text-[9px] font-black text-neutral-300 mr-4 transition-colors duration-500 group-hover:text-neutral-900 group-[.is-active]:text-black"
            >
              0{{ index + 1 }}
            </span>

            <!-- Текст посилання -->
            <span
              class="text-xs font-semibold uppercase tracking-wide text-neutral-500 transition-all duration-500 group-hover:text-black group-hover:pl-2 group-[.is-active]:text-black group-[.is-active]:pl-2"
            >
              {{ link.name }}
            </span>

            <!-- Вертикальна лінія-акцент (зліва) -->
            <div
              class="absolute left-0 w-1 h-0 bg-black rounded-full transition-all duration-500 ease-in-out group-[.is-active]:h-6 group-hover:h-4"
            ></div>

            <!-- Фонова плашка для активного стану -->
            <div
              class="absolute inset-0 -z-10 bg-neutral-900/[0.02] border border-neutral-200/50 opacity-0 scale-95 transition-all duration-500 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 rounded-xl"
            ></div>
          </NuxtLink>
        </nav>

        <NuxtLink
          to="/order"
          class="mt-auto group relative w-full items-center justify-between overflow-hidden rounded-xl bg-neutral-950 px-6 py-4 transition-all duration-500 hover:bg-black hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)]"
          :class="isMenuOpen ? 'flex' : 'hidden lg:flex'"
        >
          <!-- Текстовий блок -->
          <div class="relative z-10 flex flex-col items-start gap-0.5">
            <span
              class="text-[10px] font-black uppercase tracking-[0.2em] text-white"
            >
              Замовити проект
            </span>
            <span
              class="text-[9px] font-medium uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-neutral-400"
            >
              Обговорити ідею
            </span>
          </div>

          <!-- Іконка з динамічним фоном -->
          <div
            class="relative flex size-9 items-center justify-center rounded-xl bg-white/40 transition-all duration-500 group-hover:bg-white group-hover:text-black"
          >
            <Icon
              name="ph:arrow-right-bold"
              size="16"
              class="transition-transform duration-500 group-hover:translate-x-0.5"
            />
          </div>

          <!-- Легкий блік при ховері -->
          <div
            class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
          ></div>
        </NuxtLink>

        <!-- Contact -->
        <div class="mt-5" :class="isMenuOpen ? '' : 'hidden lg:block'">
          <div class="space-y-2.5 text-sm">
            <div class="flex justify-center items-center gap-2.5">
              <Icon name="mynaui:envelope" style="color: black" size="16" />
              <span class="text-neutral-700">voltexman@gmail.com</span>
            </div>
            <div class="flex justify-center items-center gap-2.5">
              <Icon
                name="mynaui:telephone-call"
                style="color: black"
                size="16"
              />
              <span class="text-neutral-700">+380 (63) 416 36 48</span>
            </div>
            <div class="flex justify-center items-center gap-2.5">
              <Icon name="mynaui:location" style="color: black" size="16" />
              <span class="text-neutral-700">Україна, Вінниця</span>
            </div>
          </div>
        </div>

        <!-- Соціальні мережі -->
        <div
          class="mt-5 mx-auto gap-2.5"
          :class="isMenuOpen ? 'flex' : 'hidden lg:flex'"
        >
          <Icon name="mynaui:brand-facebook" style="color: gray" size="22" />
          <Icon name="mynaui:brand-instagram" style="color: gray" size="25" />
          <Icon name="mynaui:brand-telegram" style="color: gray" size="25" />
        </div>
      </aside>

      <!-- Права колонка -->
      <div class="bg-neutral-50 min-h-screen">
        <slot name="header" />

        <div class="px-6 py-10 flex items-center">
          <div class="max-w-3xl mx-auto w-full">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
