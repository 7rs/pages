<script>
  // import('../../dist/pagefind/pagefind.js')
  //   .then((pagefind) => {
  //     pagefind.init();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  async function init() {
    const pagefind = import(/*webpackIgnore: true*/ '../../dist/pagefind/pagefind.js');
    await pagefind.options({
      bundlePath: '../../dist/pagefind/',
    });
    pagefind.init();

    return pagefind;
  }

  let pagefind;
  init()
    .then((_pagefind) => (pagefind = _pagefind))
    .catch((err) => {
      console.log('Failed import pagefind:', err);
      pagefind = undefined;
    });
</script>

<div></div>
