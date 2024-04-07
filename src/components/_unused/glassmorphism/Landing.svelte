<script lang="ts">
  import { writable } from 'svelte/store';

  let buttonTexts = ['Get Started', 'Are you ready?'];
  const buttonTextIndex = writable(0);
</script>

<section>
  <a
    href="https://github.com/7rs/pages"
    on:mouseenter={() => {
      $buttonTextIndex = 1;
    }}
    on:mouseleave={() => {
      $buttonTextIndex = 0;
    }}
  >
    {buttonTexts[$buttonTextIndex]}
  </a>
</section>

<style lang="stylus">
  @import "../../styles/api.styl"

  a
    background white
    padding 1rem
    sans(3rem)
    text-decoration none
    border-radius 16px
</style>
