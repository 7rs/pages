/** @jsxImportSource @builder.io/qwik */

import { component$, useSignal } from '@builder.io/qwik';

interface Props {
  [key: string]: any;
}

export default component$((props: Props) => {
  const themes = ['system', 'light-mode', 'dark-mode'];
  const activeIndex = useSignal(0);

  const { ...otherProps } = props;

  return (
    <div
      class={themes[activeIndex.value]}
      onClick$={() => {
        document.body.classList.remove(themes[activeIndex.value]);
        activeIndex.value === themes.length - 1 ? (activeIndex.value = 0) : activeIndex.value++;
        document.body.classList.add(themes[activeIndex.value]);
      }}
      {...otherProps}
    ></div>
  );
});
