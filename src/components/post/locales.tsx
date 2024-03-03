/** @jsxImportSource @builder.io/qwik */

import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Locale, getLangaugeLabel, IntervalTime } from '@lib/locale';

interface Props {
  locales: Array<Locale>;
  [key: string]: any;
}

export default component$((props: Props) => {
  if (props.locales == null || props.locales.length <= 0) {
    return;
  }
  const { locales, ...otherProps } = props;
  const activeLocaleIndex = useSignal(0);
  const hovering = useSignal(false);

  // https://qwik.dev/docs/components/tasks/#use-hook-rules
  // Why this fuckin' rule needed?
  useVisibleTask$(({ cleanup }) => {
    const interval = setInterval(() => {
      if (hovering.value) {
        return;
      }
      if (activeLocaleIndex.value === locales.length - 1) {
        activeLocaleIndex.value = 0;
      } else {
        activeLocaleIndex.value++;
      }
    }, IntervalTime);
    cleanup(() => clearInterval(interval));
  });

  // Don't worry about the fuckin' "React not found" message.
  return (
    <>
      <p post-title {...otherProps}>
        {locales[activeLocaleIndex.value].title}
      </p>
      <div post-locales {...otherProps}>
        {props.locales &&
          props.locales.map((locale, i) => {
            return (
              <a
                href={locale.slug}
                title={locale.title}
                onMouseEnter$={() => {
                  hovering.value = true;
                  activeLocaleIndex.value = i;
                }}
                onMouseLeave$={() => (hovering.value = false)}
                rel="noopener noreferrer"
                post-link
                {...otherProps}
              >
                {getLangaugeLabel(locale.lang)}
              </a>
            );
          })}
      </div>
    </>
  );
});
