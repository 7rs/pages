<script lang="ts">
  import { PagefindErrors, getErrorMessage } from '@pagesjs/pagefind';

  export let errorType: PagefindErrors;
  export let error;
export let reportUrl = 'https://github.com/7rs/pages/issues/new?template=report.yml';
</script>

<article data-error-message>
  {getErrorMessage(errorType, error)} <br />
  <a href={reportUrl} title="Link to Issue in Pages">Would you please create an Issue?</a>
</article>

<style lang="stylus">
  @import "../../styles/api.styl"

  [data-error-message]
    @extend $widget-glassmorphism
    padding 1rem
    set-font("sans", "input", "auto")
</style>
