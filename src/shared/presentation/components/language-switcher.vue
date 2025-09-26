<script setup>
import {useI18n} from "vue-i18n";
import {SelectButton as PvSelectButton} from "primevue";

const { t, locale, availableLocales } = useI18n()
</script>

<template>
 <pv-select-button v-model="locale" :options="availableLocales"/>

</template>

<style scoped>

</style>