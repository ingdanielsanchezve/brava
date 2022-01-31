<template>
  <div class="candidate-card" :class="{'is-candidate-suitable': isCandidateSuitable}">
    <div class="candidate-details-wrapper">
      <div class="candidate-avatar-wrapper">
        <img class="candidate-avatar" :src="source.avatar" />
      </div>
      <div class="candidate-details">
        <div class="candidate-detail-wrapper">
          <div class="candidate-info-wrapper">
            <div class="candidate-name">
              <text-highlight :queries="searchTerm"> {{ source.name }} </text-highlight>
            </div>
            <div class="candidate-title">
              <text-highlight :queries="searchTerm"> {{ source.title }} </text-highlight>
            </div>
            <div class="candidate-location">
              <text-highlight :queries="searchTerm"> {{ source.address + ', ' + source.city }} </text-highlight>
            </div>
          </div>
          <div class="candidate-contact-wrapper">
            <div class="candidate-email">
              <text-highlight :queries="searchTerm"> {{ source.email }} </text-highlight>
            </div>
          </div>
        </div>

        <div class="candidate-select">
          <a @click.prevent="setCandidateSuitable(source)">
            {{ isCandidateSuitable ? 'Skip selection' : 'Mark as suitable' }}
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Candidate',
  props: {
    index: {
        type: Number
    },
    source: {
      type: Object,
      default () {
        return {}
      }
    },
    searchTerm: {
      type: String,
      default: ''
    },
  },
  computed: {
    isCandidateSuitable () {
      return this.$store.getters['candidates/isCandidateSuitable'](this.source.email)
    }
  },
  methods: {
    setCandidateSuitable (candidate) {
      this.$store.dispatch('candidates/TOGGLE_CANDIDATE_SUITABILITY', candidate)
    }
  }
}
</script>

<style lang="scss">
.candidate-card {
  background: #FAFAFA;
  max-height: 136px;
  display: grid;
  grid-template-columns: 2fr auto;
  margin-top: 21px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);

  .text__highlight {
    background: #fff73b;
  }

  &.is-candidate-suitable {
    border: 1px solid #4765FF;
    filter: drop-shadow( 0px 2px 2px rgba(0, 0, 0, 0.24));
  }
}

.candidate-details-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
}

.candidate-avatar-wrapper {
  background-color: #bbbbbb;
  height: 134px;
  width: 134px;
}

.candidate-avatar {
  height: 134px;
  width: 134px;
}

.candidate-detail-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-left: 1.75em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  .is-candidate-suitable & {
    border-bottom: none;
  }
}

.candidate-contact-wrapper,
.candidate-info-wrapper {
  padding-top: 0.625em;
}

.candidate-details {
  .candidate-select {
    padding-left: 2em;
    padding-top: 0.9em;

    a {
      font-size: 14px;
      font-weight: 500;
      line-height: 16.41px;
      color: #009688;
      text-transform: uppercase;
      text-align: center;
    }
  }
}

.candidate-name {
  display: block;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}

.candidate-title {
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}

.candidate-location {
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.candidate-email {
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  justify-content: end;
  text-align: right;
  margin-top: 10px;
  margin-right: 9px;
}
</style>