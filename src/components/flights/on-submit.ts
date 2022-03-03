import * as yup from 'yup'

const requiredString = yup.string().required('This field is required');

export const schema = yup.object({
  fromLocation: requiredString,
  toLocation: requiredString,
  passengers: requiredString,
  dateFly: yup.date().required('Fill in the field'),
})

export interface FlightsProps extends yup.InferType<typeof schema> { }

export const onSubmit = (data: FlightsProps): void => {
  console.log(data)
}