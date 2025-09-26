<script setup>

import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";

const { t } = useI18n();
const router = useRouter();
const unavailableRoute = router.currentRoute.value.fullPath;

</script>

<template>
<div class="align-content-start justify-content-start m-4">
  <h1>{{ t('pageNotFound.tittle')}}</h1>
  <p>{{ t('pageNotFound.content', { route: unavailableRoute })}}</p>
  <router-link to="/home">{{ t('pageNotFound.link')}}</router-link>
</div>
</template>

<style scoped>

</style>