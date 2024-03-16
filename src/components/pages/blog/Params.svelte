<script lang="ts">
  import qs from 'qs';

  const filter: { [key: string]: string } = qs.parse(window.location.search.slice(1));
</script>

<section>
  {#each Object.keys(filter) as key}
    {#if Array.isArray(filter[key])}
      <h2>{key}</h2>
      <ul>
        {#each filter[key] as item}
          <li>{item}</li>
        {/each}
      </ul>
    {:else}
      <h2>{key}</h2>
      <p>{filter[key]}</p>
    {/if}
  {/each}
</section>

<style lang="stylus">
  @import "../../../styles/api.styl"

  section
    flex(column, 1rem)
</style>
