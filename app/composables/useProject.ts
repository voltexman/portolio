export function useProject() {
  const route = useRoute();

  const isProject = computed(() => {
    const path = route.path.replace(/\/$/, "");

    return path.startsWith("/project") && path !== "/projects";
  });

  return { isProject };
}
