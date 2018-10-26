/* global FormData */
export const toFormData = values => {
  let formData = new FormData()
  for (const key in values) {
    if (key === 'image') {
      formData.append(key, values[key][0])
    } else {
      formData.append(key, values[key])
    }
  }
  return formData
}
