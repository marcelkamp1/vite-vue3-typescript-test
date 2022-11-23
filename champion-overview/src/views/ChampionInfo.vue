<template>
  <div class="card">
    <div class="goBack">
      <button
          rel="noopener noreferrer"
          @click.prevent.stop="goBack"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </svg>
      </button>
    </div>
    <h1>{{ showName }}</h1>
    <img :src="baseURL + showName + imgExtension" :alt="showName">
    <div class="statTable">
      <table>
        <tr v-for="(value, stat, index) in getChampionAttribute" :key="index">
          <th>
            {{ stat }}
          </th>
          <td>
            {{ value }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ChampionService from "../services/ChampionService.ts";

export default {
  name: 'ChampionInfo',
  props: ['id'],
  data () {
    return {
      champion: {},
      baseURL: 'https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/',
      imgExtension: '.png',
      championInfo: {}
    }
  },
  created () {
    ChampionService.getChampionById(this.id)
        .then(response => {
          this.champion = response.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {
    goBack () {
      return window.history.back()
    }
  },
  computed: {
    showName () {
      for (let id in this.champion.data) {
        if (id === Object.values(this.champion.data)[0].id) {
          return id
        }
      }
    },
    getChampionAttribute () {
      if (this.champion.data) {
        ({stats: this.championInfo} = Object.values(this.champion.data)[0]);
        return this.championInfo
      }
    }
  }
}
</script>