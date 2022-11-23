<template>
  <router-link :to="{ name: 'ChampionInfo', params: { id: champion.id }}">
    <div class="card">
      <h2 class="card-title">{{ champion.name }}</h2>
      <img class="overviewImage" :src="baseURL + champion.id + imgExtension" :alt="champion.name">
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChampionCard.vue",
  props: {
    champion: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      baseURL: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/',
      imgExtension: '_0.jpg',
      champions: {}
    }
  }
})
</script>
