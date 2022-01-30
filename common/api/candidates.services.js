import { CANDIDATES_URL } from '@/common/const/app.const'

export default class CandidatesService {
  async getCandidates (axios) {
    const candidates = await axios.$get(CANDIDATES_URL)
    return candidates
  }
}

export const candidatesService = new CandidatesService()
