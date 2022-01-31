import { candidatesService } from '@/common/api/candidates.services'

export const state = () => ({
  candidates: [],
  suitableCandidates: []
})

export const actions = {
  async LOAD_CANDIDATES ({ commit }) {
    try {
      const candidates = await candidatesService.getCandidates(this.$axios)
      commit('setCandidates', candidates)
    } catch (e) {
      console.error(e)
    }
  },
  TOGGLE_CANDIDATE_SUITABILITY ({ commit }, candidate) {
    commit('toggleCandidateSuitable', candidate)
  }
}

export const mutations = {
  setCandidates (state, candidates) {
    state.candidates = Object.freeze(candidates)
  },
  toggleCandidateSuitable (state, candidate) {
    const index = state.suitableCandidates.findIndex(c => c.email === candidate.email)
    if (index === -1) {
      state.suitableCandidates.push(candidate)
    } else {
      state.suitableCandidates.splice(index, 1)
    }
  }
}

export const getters = {
  getCandidates: state => () => {
    return state.candidates
  },
  isCandidateSuitable: state => candidateEmail => {
    return state.suitableCandidates.find(c => c.email === candidateEmail)
  }
}