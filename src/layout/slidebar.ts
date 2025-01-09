import useStoreSlidebar from '@/store/slidebar';
import { computed } from 'vue';

export default () => {
  const storeSlidebar = useStoreSlidebar();

  const unfold = computed(() => storeSlidebar.unfold);

  function open() {
    storeSlidebar.open(!unfold.value);
  }

  return {
    unfold,
    open,
  }
}