import * as yup from 'yup'

const requiredString = (object: yup.DateSchema | yup.StringSchema = yup.string()) => object.required('This field is required');

export const schema = yup.object({
  fromLocation: requiredString(),
  toLocation: requiredString(),
  passengers: requiredString(),
  dateFly: requiredString(yup.date())
})