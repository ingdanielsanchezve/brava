<template>
  <div class="candidate-card">
    <div class="candidate-details-wrapper">
      <div class="candidate-avatar-wrapper">
        <img class="candidate-avatar" :src="source.avatar" />
      </div>
      <div class="candidate-details">
        <div class="candidate-name">
          <text-highlight :queries="searchTerm"> {{ source.name }} </text-highlight>
        </div>
        <div class="candidate-title">
          <text-highlight :queries="searchTerm"> {{ source.title }} </text-highlight>
        </div>
        <div class="candidate-location">
          <text-highlight :queries="searchTerm"> {{ source.address + ', ' + source.city }} </text-highlight>
        </div>

        <div class="candidate-select">
          mark as siutable
        </div>
      </div>
    </div>
    <div class="candidate-contact-wrapper">
      <div class="candidate-email">
        <text-highlight :queries="searchTerm"> {{ source.email }} </text-highlight>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Candidate',
  props: {
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
  }
}
</script>

<style lang="scss">
.candidate-card {
  background: #FAFAFA;
  max-height: 136px;
  display: grid;
  grid-template-columns: 2fr auto;
  margin-top: 21px
}

.candidate-details-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 28px;
}

.candidate-avatar-wrapper {
  background-color: #bbbbbb;
  height: 136px;
  width: 134px;
}

.candidate-avatar {
  height: 136px;
  width: 134px;
}

.candidate-details {
  padding-top: 10px;
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

.candidate-select {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  color: #009688;
  text-transform: uppercase;
  margin-right: 4px;
  padding-top: 14.5px;
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