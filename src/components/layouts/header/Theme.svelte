<script lang="ts">
  import { writable } from 'svelte/store';
  import Icon from '@iconify/svelte';

  const darkmode = writable(false);
</script>

{#key $darkmode}
  {#if $darkmode}
    <Icon
      icon="material-symbols:dark-mode"
      on:click={() => {
        console.log("pushed dark")
        $darkmode = false;
      }}
      {...$$restProps}
    />
  {:else}
    <!-- <Icon
      icon="material-symbols:light-mode-outline"
      on:click={() => {
        console.log("pushed ")
        $darkmode = true;
      }}
      {...$$restProps}
    /> -->
    <button on:click={() => {
      console.log("pushed ")
      $darkmode = true;
    }}>a</button>

  <input type="button" on:click={() => {
    console.log("pushed ")
    $darkmode = true;
  }} value="a" />
  {/if}
{/key}
