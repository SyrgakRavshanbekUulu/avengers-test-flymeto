import { Controller } from 'react-hook-form';
import { DatePicker } from 'antd'
import { DataPickerFieldProps } from './type';

export const DataPickerField = ({
  label,
  control,
  name = '',
  size = 'large',
  className,
  ...props
}: DataPickerFieldProps): JSX.Element => {
  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field, formState }) => {
          return <>
            <DatePicker
              onChange={(e) => field.onChange(e)}
              value={field.value}
              size={size}
              className={className}
              {...props}
            />
            {formState.errors?.message && <label className='errorLabel'>{formState.errors.message}</label>}
          </>
        }}
      />
    </>
  )
}