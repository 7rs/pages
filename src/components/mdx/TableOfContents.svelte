<script lang="ts">
  import { onMount } from "svelte";
  import type { MarkdownHeading } from "astro";
  import clsx from "clsx";

  const HEADER_HEIGHT_VARIABLE_NAME = "--header-height";
  const DEFAULT_HEADER_HEIGHT = 64;
  const REM_SIZE = 16;

  interface Props {
    /** An headings array as received from Astro */
    headings?: MarkdownHeading[];

    /** An array of String not to be considered as headings */
    excludeHeadings?: string[];

    /**
     * Parent element containing heading elements.
     * Searched by querySelector and **must not use others than main.**
     */
    referenceElement: keyof HTMLElementTagNameMap;
  }
  let { headings = [], excludeHeadings = [], referenceElement = "main", ...props }: Props = $props();
  headings = headings.filter((heading) => !excludeHeadings.includes(heading.slug));

  let oldY = $state(0);
  let maxY = $state(0);
  let oldHeading = $state(0);
  let offsets: number[] = $state([]);
  let headerHeight = $state(0);

  /**
   * Converts the property taken from CSS to number.
   *
   * @param rawStyle A property taken from CSS
   */
  function rawStyleToNumber(rawStyle: string) {
    const matchs = rawStyle.match(/^([0-9]+(?:\.[0-9]+)?)(px|rem)$/);
    if (matchs == null) {
      return 0;
    }

    const n = Number.parseInt(matchs[1]);

    if (matchs[matchs.length - 1] === "rem") {
      return n * REM_SIZE;
    }

    return n;
  }

  /**
   * Returns a height of header element.
   *
   * @param variableName CSS variable name
   * @param defaultHeight Assumed height
   */
  function getHeaderHeight(
    variableName: string = HEADER_HEIGHT_VARIABLE_NAME,
    defaultHeight: number = DEFAULT_HEADER_HEIGHT,
  ) {
    return rawStyleToNumber(getComputedStyle(document.body).getPropertyValue(variableName)) || defaultHeight;
  }

  /**
   * Calculates the reference point for the heading elements and returns it.
   *
   * @param startPos A starting position of the referenced element as from the screen
   */
  function calcOffsets(startPos: number) {
    return headings.map((heading, i) => {
      const headingElement = document.getElementById(heading.slug);
      const headingHeight =
        headingElement.offsetHeight + (i === 0 ? 0 : rawStyleToNumber(getComputedStyle(headingElement).height));

      return startPos + headingElement.offsetTop - headingHeight;
    });
  }

  /** Updates color of the avtive heading. */
  function updateActiveHeadingIfNeeded() {
    const currentY = Math.round(window.scrollY) + headerHeight;
    if (currentY === oldY) {
      return requestAnimationFrame(updateActiveHeadingIfNeeded);
    }
    oldY = currentY;

    if (oldY - headerHeight >= maxY) {
      oldHeading = offsets.length - 1;

      return requestAnimationFrame(updateActiveHeadingIfNeeded);
    }

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
    console.debug(`Mounted: TableOfContents, Referenced: <${referenceElement}>, Headings: ${headings.length}`);

    headerHeight = getHeaderHeight();

    const reference = document.querySelector(referenceElement);
    maxY = reference.offsetHeight;
    offsets = calcOffsets(reference.offsetTop);

    requestAnimationFrame(updateActiveHeadingIfNeeded);
  });
</script>

<aside {...props}>
  <ul>
    {#each headings as heading, i}
      <a href={`#${heading.slug}`}>
        <li
          class={clsx([
            "border-l-1 p-2 pl-4 | hover:bg-base-100 hover:color-primary text-base | transition-all",
            i !== oldHeading ? "color-base-content border-[var(--color-base-content)]/25" : "border-info bg-base-100 color-info",
          ])}
          style={heading.depth > 2 && `padding-left: ${(heading.depth - 2) * 2}rem`}
        >
          {heading.text}
        </li>
      </a>
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    scrollbar-width: none;
  }
</style>
