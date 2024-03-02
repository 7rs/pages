import { component$, useSignal } from "@builder.io/qwik";
import "@styles/qwik.styl";

export const Tabs = component$(() => {
  const tabs = useSignal([
    ((
      <>
        <p>alpha</p>
      </>
    ),
    (
      <>
        <p>beta</p>
      </>
    )),
  ]);
  const index = useSignal(0);

  return (
    <>
      <div>
        {tabs.value.map((tab, i) => {
          return <button onClick$={() => (index.value === 0 ? (index.value = 1) : (index.value = 0))}>tab</button>;
        })}
      </div>
      <div>
        {/* {tabs.value.map((_, i) => {
          return <article class={[tabs.value[i], { active: true }]}>tab</article>;
        })} */}
        {<p>{index.value}</p>}
      </div>
    </>
  );
});
