// @ts-ignore
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAllChampions() {
        return apiClient.get('/12.22.1/data/en_US/champion.json')
    },
    getChampionById(id: string) {
        return apiClient.get('/12.22.1/data/en_US/champion/' + id + '.json')
    }
}