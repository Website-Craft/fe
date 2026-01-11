<template>
  <div class="card shadow-md">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          :to="item.route"
          v-slot="{ href, navigate, isActive }"
          custom
        >
          <a
            v-bind="props.action"
            :href="href"
            @click="navigate"
            class="flex align-items-center p-menuitem-link"
            :class="{ 'router-link-active': isActive }"
          >
            <span :class="['p-menuitem-icon font-medium', item.icon]" />
            <span class="p-menuitem-text font-medium">{{ item.label }}</span>
          </a>
        </router-link>

        <a v-else v-bind="props.action" class="flex align-items-center p-menuitem-link">
          <span :class="['p-menuitem-icon font-medium', item.icon]" />
          <span class="p-menuitem-text font-medium">{{ item.label }}</span>
          <i v-if="item.items" class="pi pi-angle-down ml-auto" />
        </a>
      </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

defineOptions({
  name: 'LayoutHeader',
})

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'About',
    icon: 'pi pi-star',
    route: '/about',
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt',
        route: '/projects/components',
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        route: '/projects/blocks',
      },
    ],
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    route: '/contact',
  },
])
</script>
