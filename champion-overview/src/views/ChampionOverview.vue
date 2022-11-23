<template>
  <h1>League of Legends Champion Overview</h1>
  <h4>For more information click on a picture</h4>
  <div class="card-container">
    <ChampionCard v-for="champion in champions.data" :key="champion.name" :champion="champion"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChampionService from "../services/ChampionService";
import ChampionCard from "../components/ChampionCard.vue"

export default defineComponent ({
  name: 'ChampionView',
  components: {
    ChampionCard
  },
  data () {
    return {
      champions: {}
    }
  },
  created () {
    ChampionService.getAllChampions()
        .then((response: { data: {} }) => {
          this.champions = response.data
        })
        .catch((error: any) => {
          console.log(error)
        })
  }
})
</script>
