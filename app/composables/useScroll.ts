import { ref, onMounted, onUnmounted } from "vue";

export function useScroll() {
  const isScrolled = ref<boolean>(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };

  onMounted(() => window.addEventListener("scroll", handleScroll));
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));

  return { isScrolled };
}
