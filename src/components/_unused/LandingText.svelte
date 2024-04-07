<script lang="ts">
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { fly } from 'svelte/transition';

  export let words = ['Nothing...'];
  const duration = 500;
  const intervalTime = 3000;
  const activeIndex = writable(0);

  const interval = setInterval(() => {
    $activeIndex = $activeIndex + 1 === words.length ? 0 : $activeIndex + 1;
  }, intervalTime);

  onDestroy(() => clearInterval(interval));
</script>

<hgroup>
  <h1>
    <span id="fast">Fast</span> and <span id="simple">Simple,</span>
  </h1>
  {#key $activeIndex}
    <p id={`variable-${$activeIndex + 1}`} in:fly={{ duration: duration, y: '-5rem' }} out:fly={{ duration: duration, y: '5rem' }}>
      {words[$activeIndex]}
    </p>
  {/key}
</hgroup>

<style lang="stylus">
  @import "../../../../styles/api.styl"

  :root
    --text-size 2rem
    @media screen and (min-width widths.medium)
      --text-size 4rem
    @media screen and (min-width widths.large)
      --text-size 3.25rem
    @media screen and (min-width widths.largest)
      --text-size 4rem
    --text-height calc(var(--text-size) * var(--golden-ratio))

  gradient = {
    red: linear-gradient(45deg, #FF0000, #FF80FF),
    blue: linear-gradient(315deg, #0000FF, #FF80FF),
    green: linear-gradient(90deg, #80FFFF, #80FF80, #FFFF80),
    cyan: linear-gradient(90deg, #80d0ff, #80ffd0),
    purple: linear-gradient(90deg, #FF8080, #FF80FF, #8080FF),
  }

  $clip-text
    background-clip text
    color transparent
    filter drop-shadow(0 0 8px black)

  hgroup
    --gradient-red linear-gradient(45deg, #FF0000, #FF80FF)
    --gradient-blue linear-gradient(315deg, #0000FF, #FF80FF)
    --gradient-green linear-gradient(90deg, #80FFFF, #80FF80, #FFFF80)
    --gradient-cyan linear-gradient(90deg, #80d0ff, #80ffd0)
    --gradient-purple linear-gradient(90deg, #FF8080, #FF80FF, #8080FF)

    position absolute
    top 0
    width 100%

    h1, p
      sans(var(--text-size), var(--text-height))
      font-weight 900
      text-align center

    h1
      text-shadow 0 0 8px black
      color white
      span
        text-shadow initial
        @extend $clip-text
        &#fast
          background-image var(--gradient-red)
        &#simple
          background-image var(--gradient-blue)

    p
      @extend $clip-text
      position absolute
      top 100%
      width 100%

      // https://purgecss.com/safelisting.html
      /*! purgecss start ignore */
      &#variable-1
        background-image var(--gradient-green)
      &#variable-2
        background-image var(--gradient-cyan)
      &#variable-3
        background-image var(--gradient-purple)
      /*! purgecss end ignore */
</style>
