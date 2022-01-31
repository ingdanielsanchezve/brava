<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-6 is-offset-2">
        <div class="card">
          <div class="card-content">
            <div class="field input-wrapper">
              <p class="control has-icons-left">
                <input ref="searchTerm" v-model="searchTerm" class="input" type="text" @input="filterCandidatesList">
                <span class="icon is-small is-left">
                  <fa icon="search" />
                </span>
              </p>
            </div>
            <ul v-if="!isCandidateListLoaded" class="candidates-list">
              <CandidateSkeleton v-for="index in 4" :key="index" />
            </ul>
            <virtual-list
              v-else
              class="candidates-list"
              :data-key="'email'"
              :data-sources="candidatesList"
              :data-component="candidateComponent"
              :extra-props="{ searchTerm: searchTerm }"
              :keep="100"
            />
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
import VirtualList from 'vue-virtual-scroll-list'

export default {
  name: 'IndexPage',
  components: {
    Card,
    CandidateSkeleton,
    Candidate,
    VirtualList
  },
  props: {
    searchParam: {
      type: String,
      required: false,
      default: '',
    },
  },
  data () {
    return {
      candidateComponent: Candidate,
      searchTerm: this.searchParam,
      filteredList: [],
      suitableUsers: [],
    }
  },
  watch: {
    searchTerm (newVal, oldVal) {
      if (newVal.length && newVal !== oldVal) {
        this.$router.push('/search/' + newVal)
      } else {
        this.$router.push('/')
      }
    }
  },
  computed: {
    candidatesList () {
      return this.searchTerm.length > 0
        ? this.filteredList
        : this.candidates
    },
    candidates () {
      return this.$store.getters['candidates/getCandidates']()
    },
    isCandidateListLoaded () {
      return this.candidates.length > 0
    }
  },
  async created () {
    if (!this.isCandidateListLoaded) {
      await this.$store.dispatch('candidates/LOAD_CANDIDATES')
    }
  },
  mounted () {
    console.log("🚀 ~ file: CandidatesList.vue ~ line 92 ~ mounted ~ this.isCandidateListLoaded", this.isCandidateListLoaded)
    console.log("🚀 ~ file: CandidatesList.vue ~ line 94 ~ mounted ~ this.searchTerm.length", this.searchTerm)
    this.$refs.searchTerm.focus()
    if (this.searchTerm.length > 0) {
      this.filterCandidatesList()
    }
  },
  methods: {
    filterCandidatesList () {
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
  font-size: 24px;
  line-height: 28.13px;
  color: rgba(0, 0, 0, 0.75);
  height: 48px;

  &:active,
  &:focus {
    border: none;
    box-shadow: none;
  }
}

.control.has-icons-left {
  .icon{
    height: 48px;
  }
}

.input-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.1875em 2.3em 0 1.5em;
  z-index: 2;
  font-size: 1rem;
}

.candidates-list {
  max-height: 70vh;
  overflow-y: scroll;
  padding-top: 2.5em;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.16)
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    background: #4D4D4D;
    height: 40px;
  }
}
</style>
