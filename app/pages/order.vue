<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { orderSchema, type OrderForm } from "~/schemas/order";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const { defineField, handleSubmit, isSubmitting, resetForm } =
  useForm<OrderForm>({
    validationSchema: toTypedSchema(orderSchema),
    initialValues: {
      projectType: "Візитка",
      budget: "unspecified",
    },
  });

const [projectType] = defineField("projectType");
const isSubmitted = ref(false);

const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch("/api/send-telegram", {
      method: "POST",
      body: values,
    });
    resetForm();
    isSubmitted.value = true;
  } catch (error) {
    console.error(error);
    alert("Сталася помилка. Спробуйте пізніше або напишіть мені в месенджер.");
  }
});
</script>

<template>
  <NuxtLayout>
    <div v-if="isSubmitted"
      class="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-700">
      <!-- Стильна іконка успіху -->
      <div class="relative mb-10">
        <div class="absolute inset-0 bg-black/5 rounded-full scale-150 animate-pulse"></div>
        <div
          class="relative size-20 bg-black text-white rounded-full flex items-center justify-center shadow-2xl shadow-black/20">
          <Icon name="ph:check-bold" size="36" />
        </div>
      </div>

      <!-- Текстовий блок -->
      <div class="space-y-4 max-w-sm">
        <h2 class="text-3xl font-black uppercase tracking-tighter leading-none">
          Заявку <span class="text-neutral-400 italic">отримано</span>
        </h2>

        <p class="text-sm font-medium text-neutral-500 leading-relaxed tracking-wide uppercase">
          Дякую за довіру. Я перегляну деталі вашого проєкту та зв'яжуся з вами
          протягом робочого дня.
        </p>
      </div>

      <!-- Кнопка повернення або додаткова дія -->
      <div class="mt-12 flex flex-col items-center gap-6">
        <button @click="isSubmitted = false"
          class="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-black transition-all duration-300">
          <span>Надіслати ще один запит</span>
          <Icon name="ph:arrow-right" class="group-hover:translate-x-1 transition-transform" size="14" />
        </button>
      </div>
    </div>

    <form v-else @submit="onSubmit" class="space-y-6">
      <header class="mb-16">
        <span class="text-xs font-black tracking-widest text-neutral-400 mb-4">
          Контакти та деталі
        </span>
        <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-stone-950 italic">
          Розпочнімо щось <br />
          <span class="not-italic text-stone-300 leading-none">особливе разом.</span>
        </h1>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Ваше ім`я</FormLabel>
            <FormControl>
              <Input placeholder="Євгеній" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Контакти -->
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Пошта</FormLabel>
            <FormControl>
              <Input placeholder="example@gmail.com" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="phone">
          <FormItem>
            <FormLabel>Номер телефону</FormLabel>
            <FormControl>
              <Input placeholder="+380 (63) 123-45-67" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>

      <!-- Тип проєкту (Radio Buttons стилізовані) -->
      <div class="flex flex-col gap-4">
        <label class="text-[10px] font-black uppercase tracking-widest text-neutral-400">Тип сайту</label>
        <div class="flex flex-wrap gap-2">
          <label v-for="type in [
            'Лендінг',
            'Візитка',
            'Корпоративний',
            'Магазин',
            'Комбінований',
            'Не можу визначити',
          ]" :key="type"
            class="cursor-pointer border px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            :class="projectType === type
                ? 'bg-black text-white border-black'
                : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400'
              ">
            <input type="radio" v-model="projectType" :value="type" class="hidden" />
            {{ type }}
          </label>
        </div>
      </div>

      <FormField v-slot="{ field }" name="budget">
        <FormItem class="flex flex-col gap-2">
          <FormLabel class="text-[10px] font-black uppercase tracking-widest text-neutral-400">
            Орієнтовний бюджет
          </FormLabel>

          <Select :model-value="field.value" @update:model-value="field.onChange">
            <FormControl>
              <SelectTrigger
                class="bg-neutral-100 border-none p-6 rounded-xl text-sm font-bold focus:ring-2 ring-black/5 h-auto">
                <SelectValue placeholder="Оберіть бюджет" />
              </SelectTrigger>
            </FormControl>

            <SelectContent class="rounded-xl border-neutral-100 shadow-xl">
              <SelectGroup>
                <SelectItem value="unspecified" class="font-medium">
                  Не визначено
                </SelectItem>
                <SelectItem value="small" class="font-medium">
                  5,000 грн — 10,000 грн
                </SelectItem>
                <SelectItem value="medium" class="font-medium">
                  10,000 грн — 25,000 грн
                </SelectItem>
                <SelectItem value="large" class="font-medium">
                  25,000+
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <FormMessage class="text-[10px] uppercase font-bold italic" />
        </FormItem>
      </FormField>

      <!-- Опис -->
      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel>Про проект</FormLabel>
          <FormControl>
            <Textarea placeholder="Опишіть ваш проект" v-bind="componentField" class="h-40" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Кнопка відправки -->
      <button type="submit" :disabled="isSubmitting"
        class="w-fit bg-black text-white ms-auto px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-neutral-800 transition-all disabled:bg-neutral-300">
        {{ isSubmitting ? "Відправка..." : "Надіслати запит" }}
      </button>
    </form>
  </NuxtLayout>
</template>
