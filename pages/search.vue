<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-6 is-offset-2">
        <div class="card">
          <div class="card-content">
            {{ candidatesList.length }} Records
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="searchTerm" class="input" type="text" @input="filterCandidatesList">
                <span class="icon is-small is-left">
                  <fa icon="search" />
                </span>
              </p>
            </div>
            <ul v-if="isLoadingList" class="candidates-list">
              <CandidateSkeleton v-for="index in 4" :key="index" />
            </ul>
            <ul v-else class="candidates-list">
              <Candidate v-for="(candidate, index) in candidatesList" :key="index" :candidate="candidate" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card'
import Candidate from '@/components/Candidate'
import CandidateSkeleton from '@/components/CandidateSkeleton'

export default {
  name: 'IndexPage',
  components: {
    Card,
    CandidateSkeleton,
    Candidate,
  },
  data () {
    return {
      searchTerm: '',
      filteredList: []
    }
  },
  computed: {
    candidatesList () {
      return this.searchTerm.length
        ? this.filteredList
        : this.candidates
    },
    candidates () {
      return this.$store.getters['candidates/getCandidates']()
    },
    isLoadingList () {
      return this.$store.getters['candidates/isLoadingList']()
    }
  },
  methods: {
    filterCandidatesList () {
      if (this.searchTerm.length <= 3) { return }

      this.filteredList = this.candidates.filter(candidate =>
        Object.values(candidate).some(data =>
          data.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    }
  }
}
</script>

<style lang="scss">
.card {
  background: #FFFFFF;
  min-width: 712px;
}

.input {
  background: #FAFAFA;
  border: none;
  border-radius: 2px;
  filter: drop-shadow( 0px 2px 2px rgba(0, 0, 0, 0.24));

  &:active,
  &:focus {
    border: none;
  }
}

.candidates-list {
  max-height: 70vh;
  overflow-y: scroll;
}
</style>
