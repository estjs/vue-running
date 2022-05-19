export const isDark = useDark()
export const isVertical = ref(false)
export const toggleDark = useToggle(isDark)
export const toggleLayout = useToggle(isVertical)
