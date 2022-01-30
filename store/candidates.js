import { candidatesService } from '@/common/api/candidates.services'

export const state = () => ({
  candidates: [],
  loadingList: false
})

export const actions = {
  async LOAD_CANDIDATES ({ commit }) {
    commit('setIsLoadingList', true)
    try {
      const candidates = await candidatesService.getCandidates(this.$axios)
      commit('setCandidates', candidates)
    } catch (e) {
      console.error(e)
    } finally {
      commit('setIsLoadingList', false)
    }
  }
}

export const mutations = {
  setCandidates (state, candidates) {
    state.candidates = Object.freeze(candidates)
  },
  setIsLoadingList (state, isLoadingList) {
    state.loadingList = isLoadingList
  }
}

export const getters = {
  getCandidates: state => () => {
    return state.candidates
  },
  isLoadingList: state => () => {
    return state.loadingList
  }
}