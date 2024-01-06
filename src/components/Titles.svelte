<script lang="ts">
  import { onMount } from 'svelte';
  import { Titles } from '@lib/blog'

  export let titles: Array<Titles>;
  console.log(titles)

  let index = 0;
  onMount(() => {
    console.log("why not working")
    const interval = setInterval(() => {
      console.log("why not working")
      index = index == 2 ? 0 : 2;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

{ index }
