import * as yup from 'yup'
export interface FlightsProps {
  fromLocation: string,
  toLocation: string,
  dateFly: Date | any,
  passengers: string
}

export const schema = yup.object({
  fromLocation: yup.string().required('Fill in the field'),
  toLocation: yup.string().required('Fill in the field'),
  passengers: yup.string().required('Fill in the field'),
  dateFly: yup.date().required('Fill in the field'),
}).required();

export const onSubmit = (data: FlightsProps) => {
  console.log(data)
}