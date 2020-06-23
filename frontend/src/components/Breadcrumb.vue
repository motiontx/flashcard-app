<template>
<v-breadcrumbs :items="items">
  <template v-slot:divider>
    <v-icon>mdi-chevron-right</v-icon>
  </template>
</v-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumb',

  data: () => ({
    items: [{
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'Topics',
        disabled: true,
        href: '/topics',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
// ...
</style>
