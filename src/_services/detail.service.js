import axios from 'axios'
import { API_ROOT } from '../_config/config'
import { toFormData } from '../_helpers'

const submitDetails = async (values, id) => {
  let data = toFormData(values)
  let res
  try {
    res = await axios.post(`${API_ROOT}/products/${id}/details`, data)
  } catch (err) {
    res = err
  }
  return handleResponse(res)
}

const handleResponse = res => {
  return res.status === 200 ? res : Promise.reject(res)
}

export const detailService = {
  submitDetails
}
