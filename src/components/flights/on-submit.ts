import * as yup from 'yup'
// type instead of interfaces
export interface FlightsProps {
  fromLocation: string,
  toLocation: string,
  dateFly: Date,
  passengers: string
}

const requiredString = (object = yup.string()) =>  object.required('This field is required');

export const schema = yup.object({
  fromLocation: requiredString(),
  toLocation: requiredString(),
  passengers: requiredString(),
  // todo with DRY
  // dateFly: requiredString(yup.date()),
})

export const onSubmit = (data: FlightsProps): void => {
  console.log(data)
}