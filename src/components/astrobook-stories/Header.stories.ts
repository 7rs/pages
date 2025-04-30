import Header from '@components/Header.astro';

export default {
  component: Header,
};

export const Empty = {
  args: {},
};

export const Full = {
  args: {
    headerText: '7rs.dev',
  },
};
