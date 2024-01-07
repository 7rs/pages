<script lang="ts">
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  import { onDestroy } from 'svelte';

  // import { Titles } from "@scripts/lib/blog"
  // I have no idea why this would be the case, but the above code cannot be used.
  import * as blog from "@lib/blog";
  const { Titles, Locales } = blog;

  const intervalTime = 7500;
  // console.info("Interval time is:", intervalTime);

  // These values must be given.
  export let titles: Array<Titles>;
  // console.info("Received `titles`:", titles.length);
  export let locales: Array<Locales>;
  // console.info("Received `locales`:", locales.length);

  export let publishedAt: string;

  const hovering = writable(false);
  const index = writable(0);

  // If the language link is hovered, changes the title as it has a language.
  const enableHovering = (lang) => {
    $hovering = true;
    $index = titles.findIndex((t) => t.lang == lang);
    // console.info("The element hovered [lang]:", lang);
  };

  // Automates title changes.
  const disableHovering = () => {
    $hovering = false;
    // console.info("The element isn't hovering.");
  };

  // Changes the title at regular intervals.
  // If only one language is supported, doesn't change it.
  if (locales.length > 1) {
    const interval = setInterval(() => {
      if ($hovering) {
        return;
      }

      $index = $index == 1 ? 0 : 1;
      console.info("A title has been automatically changed:", titles[$index].title);
    }, intervalTime);

    onDestroy(() => clearInterval(interval));
  }

  const getLanguageName = (lang) => {
    switch (lang) {
      case "ja":
        return "日本語";
      case "en":
        return "English";
      default:
        return lang;
    }
  };
</script>

<article>
  <h1>{titles[$index].title}</h1>
  {#if publishedAt}
    <p class="published-at">{publishedAt}</p>
  {/if}
  <div>
    {#each locales as locale}
      <a
        on:mouseenter={() => {
          enableHovering(locale.lang);
        }}
        on:mouseleave={disableHovering}
        href={locale.slug}>{getLanguageName(locale.lang)}</a
      >
    {/each}
  </div>
</article>

<style lang="stylus">
  @import "../styles/api.styl"

  article
    padding 0.5rem 1rem
    display grid
    background colors.widget
    border-radius 1rem
    grid-template-rows 2fr 1fr
    grid-template-columns 1fr 1fr
    grid-template-areas \
      "title        title" \
      "published-at langs";
    align-items center
    &:hover
      background rgba(colors.widget-hovered, 0.2)
      @media (prefers-color-scheme dark)
        background rgba(colors.dark.widget-hovered, 0.2)

    .published-at
      grid-area published-at
      sans(1.5rem, 1.5rem)
      text-align start

    h1
      grid-area title

    div
      grid-area langs
      display flex
      justify-content flex-end
      gap 1rem
      align-content center
      align-items center

    a
      height 2.5rem
      width 7rem
      sans(1.5rem, 2.5rem)
      text-align center
      background rgba(0, 0, 0, 0.2)
</style>
