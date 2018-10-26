import axios from 'axios'
import { API_ROOT } from '../_config/config'

const submitProduct = async values => {
  let res
  try {
    res = await axios.post(`${API_ROOT}/products`, values)
  } catch (err) {
    res = err
  }
  return handleResponse(res)
}

const handleResponse = res => {
  return res.status === 200 ? res : Promise.reject(res)
}

export const productService = {
  submitProduct
}
