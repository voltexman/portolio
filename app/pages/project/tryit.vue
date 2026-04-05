<template>
  <NuxtLayout>
    <template #header>
      <section class="relative h-150 overflow-hidden group">
        <NuxtImg
          src="/project-3.jpg"
          class="size-full object-center object-cover"
        />
      </section>
      <div
        class="bg-neutral-100 border-b border-e-neutral-200 h-18 px-6 lg:px-12 flex items-center justify-between sticky top-20 lg:top-0 z-20"
      >
        <div class="flex gap-2 lg:gap-4">
          <div>
            <div class="text-sm font-semibold text-neutral-800">Клієнт</div>
            <div class="text-sm font-medium text-neutral-700">Мамай Руслан</div>
          </div>
          <div class="hidden lg:block">
            <div class="text-sm font-semibold text-neutral-800">Стек</div>
            <div class="text-sm font-medium text-neutral-700 flex gap-2">
              <span>Laravel</span><span>Tailwindcss</span>
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-neutral-800">Рік</div>
            <div class="text-sm font-medium text-neutral-700">2026</div>
          </div>
        </div>

        <NuxtLink
          to="http://www.tryit.com.ua"
          target="_blank"
          external
          class="bg-neutral-900 px-4 py-2 flex items-center gap-1 rounded-full text-white text-sm"
          >Перейти
          <Icon name="ph:arrow-up-right" size="16" />
        </NuxtLink>
      </div>
    </template>

    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 py-10 border-b border-neutral-100"
    >
      <!-- Задача -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:target-bold" class="text-neutral-400" size="14" />
          <span
            class="text-[10px] font-black uppercase tracking-widest text-neutral-400"
            >Ціль</span
          >
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          Створення швидкої та сучасної онлайн-екосистеми для замовлення
          клінінгу
        </p>
      </div>

      <!-- Результат -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon
            name="ph:chart-line-up-bold"
            class="text-neutral-400"
            size="14"
          />
          <span
            class="text-[10px] font-black uppercase tracking-widest text-neutral-400"
            >Ефект</span
          >
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          +45% до швидкості завантаження сторінок
        </p>
      </div>

      <!-- Об'єм роботи -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:stack-bold" class="text-neutral-400" size="14" />
          <span
            class="text-[10px] font-black uppercase tracking-widest text-neutral-400"
            >Масштаб</span
          >
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          12 унікальних сторінок та зручна адмін-панель
        </p>
      </div>

      <!-- Статус -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:check-circle-bold" class="text-green-500" size="14" />
          <span
            class="text-[10px] font-black uppercase tracking-widest text-neutral-400"
            >Статус</span
          >
        </div>
        <p class="text-sm font-bold text-neutral-950 leading-tight">
          Проєкт запущено та активно підтримується
        </p>
      </div>
    </div>

    <section class="mt-10">
      <div class="flex flex-col md:flex-row gap-16">
        <!-- Ліва колонка: Типографіка -->
        <div class="flex-1 space-y-8">
          <div>
            <span
              class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-6 block"
              >Typography</span
            >
            <div class="space-y-4">
              <div class="flex items-baseline gap-4">
                <span class="text-5xl font-black tracking-tighter italic"
                  >Aa</span
                >
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
          <span
            class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-6 block"
            >Color Palette</span
          >
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <!-- Колір 1 - Темний основний -->
            <div class="space-y-2">
              <div
                class="h-20 w-full rounded-2xl bg-neutral-950 border border-neutral-800 flex items-end p-3"
              >
                <span class="text-[9px] font-bold text-neutral-500"
                  >#0A0A0A</span
                >
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Deep Navy
              </p>
            </div>

            <!-- Колір 2 - Світлий нейтральний -->
            <div class="space-y-2">
              <div
                class="h-20 w-full rounded-2xl bg-neutral-100 border border-neutral-200 flex items-end p-3"
              >
                <span class="text-[9px] font-bold text-neutral-400"
                  >#F8F9FA</span
                >
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Soft White
              </p>
            </div>

            <!-- Колір 3 - Рожевий акцент -->
            <div class="space-y-2">
              <div
                class="h-20 w-full rounded-2xl bg-emerald-500 flex items-end p-3 shadow-lg shadow-emerald-500/20"
              >
                <span class="text-[9px] font-bold text-white">#10B981</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Fresh Emerald
              </p>
            </div>

            <!-- Колір 4 - Помаранчевий акцент -->
            <div class="space-y-2">
              <div
                class="h-20 w-full rounded-2xl bg-orange-500 border border-orange-600 flex items-end p-3 shadow-lg shadow-orange-500/20"
              >
                <span class="text-[9px] font-bold text-white">#F97316</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Vivid Orange
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Технічний стек (додаткові деталі) -->
      <div
        class="mt-16 flex flex-wrap gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
      >
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
              class="size-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg shadow-black/20"
            >
              <Icon name="ph:lightning-bold" size="16" />
            </div>
            <h3 class="font-black uppercase tracking-tight text-lg">Виклик</h3>
          </div>
          <p class="text-neutral-800 text-sm leading-relaxed">
            Клієнти часто обирали клінінгові послуги через соцмережі, але сайт
            не передавав професійність і надійність компанії. Потрібно було
            створити сучасний каталог послуг, показати чистоту та якість роботи,
            зробити процес замовлення максимально простим і зрозумілим.
          </p>
        </div>

        <!-- Рішення -->
        <div class="p-8 bg-black text-white rounded-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="size-8 bg-white text-black rounded-full flex items-center justify-center"
            >
              <Icon name="ph:framer-logo-bold" size="16" />
            </div>
            <h3 class="font-black uppercase tracking-tight text-lg text-white">
              Рішення
            </h3>
          </div>
          <p class="text-neutral-400 text-sm leading-relaxed">
            Зробив акцент на якісних фотографіях «до і після», чистій
            типографіці та інтуїтивній навігації. Впровадив зручну форму
            швидкого замовлення, детальний опис кожної послуги з розрахунком
            вартості та інтерактивний калькулятор, що перетворило сайт на
            потужний інструмент для зростання продажів.
          </p>
        </div>
      </div>

      <div class="mt-16 max-w-3xl">
        <h2
          class="text-xl font-black mb-6 border-b-2 border-black inline-block pb-1 uppercase tracking-tighter italic"
        >
          Моя філософія в проєкті
        </h2>
        <p class="text-neutral-700 leading-relaxed text-lg font-medium">
          У цьому проєкті я відмовився від зайвої декоративності, щоб чистота і
          порядок говорили самі за себе. Поєднання глибоких темних відтінків з
          яскравими акцентними фотографіями чистоти створює відчуття надійності
          та професійності. Для мене цей сайт став не просто цифровим продуктом,
          а справжнім продовженням репутації компанії «Чистота Про» — майстрів
          бездоганної чистоти.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
