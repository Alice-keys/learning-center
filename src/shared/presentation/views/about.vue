<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
 <div class="align-content-start justify-content-start m-4">
   <h1>{{ t('about.tittle')}}</h1>
   <img src="/acme-logo.svg" alt="Acme Logo" width="200" height="200" />
   <p>{{ t('about.content')}}</p>
 </div>
</template>

<style scoped>

</style>