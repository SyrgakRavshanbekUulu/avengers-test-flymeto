import * as yup from 'yup'
export interface FlightsProps {
  fromLocation: string,
  toLocation: string,
  dateFly: Date | any, // todo remove any
  passengers: string
}

const requiredString = yup.string().required('This field is required');

export const schema = yup.object({
  fromLocation: requiredString,
  toLocation: requiredString,
  passengers: requiredString,
  dateFly: yup.date().required('Fill in the field'),
}).required();
// return Type
export const onSubmit = (data: FlightsProps) => {
  console.log(data)
}