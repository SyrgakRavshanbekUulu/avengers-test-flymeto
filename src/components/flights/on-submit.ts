import * as yup from 'yup'

const requiredString = (object = yup.string()) => object.required('This field is required');

export const schema = yup.object({
  fromLocation: requiredString(),
  toLocation: requiredString(),
  passengers: requiredString(),
  // todo with DRY
  // dateFly: requiredString(yup.date()),
})

export interface FlightsProps extends yup.InferType<typeof schema> { }

export const onSubmit = (data: FlightsProps): void => {
  console.log(data)
}