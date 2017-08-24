import { get } from '../get'

const getAdData = () => {
  return get('/api/homead')
}

export { getAdData }
