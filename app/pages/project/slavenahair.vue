<template>
  <NuxtLayout>
    <template #header>
      <section class="relative h-150 overflow-hidden group">
        <NuxtImg
          src="/project-2.jpg"
          class="size-full object-center object-cover"
        />
      </section>
      <div
        class="bg-neutral-100 border-b border-e-neutral-200 h-18 px-6 lg:px-12 flex items-center justify-between sticky top-20 lg:top-0 z-20"
      >
        <div class="flex gap-2 lg:gap-4">
          <div>
            <div class="text-sm font-semibold text-neutral-800">Клієнт</div>
            <div class="text-sm font-medium text-neutral-700">
              Комісар Максим
            </div>
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
          to="http://www.slavenahair.com"
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
          Створення преміального онлайн-магазину слов’янського волосся
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
                <span class="text-5xl font-black tracking-tighter">Aa</span>
                <div>
                  <p class="text-sm font-black uppercase tracking-widest">
                    Lora
                  </p>
                  <p class="text-[10px] text-neutral-400 uppercase">
                    Headings / Elegant accents
                  </p>
                </div>
              </div>
              <div class="h-px bg-neutral-100 w-full"></div>
              <div class="flex items-baseline gap-4">
                <span class="text-4xl font-medium">Aa</span>
                <div>
                  <p class="text-sm font-black uppercase tracking-widest">
                    Inter
                  </p>
                  <p class="text-[10px] text-neutral-400 uppercase">
                    Body text / Interface
                  </p>
                </div>
              </div>
              <div class="h-px bg-neutral-100 w-full"></div>
              <div class="flex items-baseline gap-4">
                <span class="text-4xl font-semibold tracking-tight">Aa</span>
                <div>
                  <p class="text-sm font-black uppercase tracking-widest">
                    Oswald
                  </p>
                  <p class="text-[10px] text-neutral-400 uppercase">
                    Accents / Bold titles
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

            <!-- Колір 3 - Коричневий -->
            <div class="space-y-2">
              <div
                class="h-20 w-full rounded-2xl bg-amber-800 flex items-end p-3 shadow-lg shadow-amber-800/20"
              >
                <span class="text-[9px] font-bold text-amber-100">#78350F</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Rich Brown
              </p>
            </div>

            <!-- Колір 4 - Золотистий -->
            <div class="space-y-2">
              <div
                class="h-20 w-full rounded-2xl bg-amber-500 flex items-end p-3 shadow-lg shadow-amber-500/20"
              >
                <span class="text-[9px] font-bold text-amber-950">#D97706</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-tighter">
                Golden Honey
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Технічний стек -->
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
            Ринок слов’янського волосся дуже конкурентний, а більшість сайтів
            виглядають застаріло або надто агресивно. Потрібно було створити
            елегантний, преміальний і довірливий онлайн-магазин, який підкреслює
            натуральність, якість та красу слов’янського волосся.
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
            Створив чистий, мінімалістичний дизайн з акцентом на якісні
            фотографії волосся, детальні описи та зручний каталог. Додав
            інтерактивний підбір за довжиною, кольором і структурою, а також
            систему швидкого оформлення замовлення, що перетворило сайт на
            потужний преміальний канал продажів.
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
          У цьому проєкті я хотів, щоб сайт відображав справжню красу і цінність
          натурального слов’янського волосся. Лаконічний дизайн, делікатні
          акценти та тепла кольорова палітра створюють атмосферу розкоші та
          довіри. Для мене Slavena Hair — це не просто магазин, а місце, де
          кожна жінка може знайти частинку справжньої краси.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
