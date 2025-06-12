<script lang="ts">
  import { onMount } from "svelte";
  import type { MarkdownHeading } from "astro";

  interface Props {
    headings?: MarkdownHeading[];
    excludeHeadings?: string[];
  }

  let { headings = [], excludeHeadings = [], ...props }: Props = $props();
  headings = headings.filter((heading) => !excludeHeadings.includes(heading.slug));

  const HEADER_HEIGHT_VARIABLE_NAME = "--header-height";
  const DEFAULT_HEADER_HEIGHT = 64;

  let oldY = $state(0);
  let oldHeading = $state(0);
  let offsets: number[] = $state([]);
  let headerHeight = $state(0);

  function rawStyleToNumber(rawStyle: string) {
    if (rawStyle.length <= 0) {
      return 0;
    }

    return Number.parseInt(rawStyle.replace("px", "")) || 0;
  }

  function getHeaderHeight(
    variableName: string = HEADER_HEIGHT_VARIABLE_NAME,
    defaultHeight: number = DEFAULT_HEADER_HEIGHT,
  ) {
    return rawStyleToNumber(getComputedStyle(document.body).getPropertyValue(variableName)) || defaultHeight;
  }

  function getMainStart() {
    return document.querySelector("main").offsetTop;
  }

  function calcOffsets(mainStart: number) {
    return headings.map((heading, i) => {
      const headingElement = document.getElementById(heading.slug);
      const headingHeight =
        headingElement.offsetHeight + (i === 0 ? 0 : rawStyleToNumber(getComputedStyle(headingElement).height));

      return mainStart + headingElement.offsetTop - headingHeight;
    });
  }

  function updateActiveHeadingIfNeeded() {
    const currentY = Math.round(window.scrollY) + headerHeight;
    if (currentY === oldY) {
      return requestAnimationFrame(updateActiveHeadingIfNeeded);
    }
    oldY = currentY;

    let currentHeading = 0;
    if (offsets[0] < oldY) {
      for (; currentHeading < offsets.length - 1; currentHeading++) {
        if (offsets[currentHeading] <= oldY && oldY < offsets[currentHeading + 1]) {
          break;
        }
      }
    }

    if (currentHeading !== oldHeading) {
      oldHeading = currentHeading;
    }

    return requestAnimationFrame(updateActiveHeadingIfNeeded);
  }

  onMount(() => {
    console.debug("Mounted: TableOfContents");

    headerHeight = getHeaderHeight();
    offsets = calcOffsets(getMainStart());

    requestAnimationFrame(updateActiveHeadingIfNeeded);
  });
</script>

<aside {...props}>
  <ul>
    {#each headings as heading, i}
      <a href={`#${heading.slug}`}>
        <li
          class={`text-xl p-2 border-l-1 border-[var(--color-base-content)]/25 ${i === oldHeading ? "color-red border-red" : ""}`}
          style={heading.depth > 2 && `margin-left: ${(heading.depth - 2) * 2}rem`}
        >
          {heading.text}
        </li>
      </a>
    {/each}
  </ul>
</aside>
