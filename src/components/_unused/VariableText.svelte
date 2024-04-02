<script lang="ts">
  import { writable } from 'svelte/store';
  import { onDestroy } from 'svelte';

  export let textList: string[] = [];
  const activeIndex = writable(0);

  export let intervalTime = 1000;

  const interval = setInterval(() => {
    $activeIndex = $activeIndex + 1 === textList.length ? 0 : $activeIndex + 1;
    console.log(`Active Text: ${textList[$activeIndex]}`)
  }, intervalTime);

  onDestroy(() => clearInterval(interval));
</script>

<p>
  {textList[$activeIndex]}
</p>
