<template>
  <CandidatesList :search-param="$route.params.search" />
</template>

<script>
import CandidatesList from '@/components/CandidatesList'

export default {
  components: {
     CandidatesList
  }
}
</script>
