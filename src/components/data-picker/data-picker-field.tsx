import { Control, Controller, FieldValues } from 'react-hook-form';
import { DatePicker, DatePickerProps } from 'antd'
import { FieldProps } from '../field-types';
import styles from './data-picker.module.css'

export type DataPickerFieldProps = FieldProps & DatePickerProps & {
  control: Control<FieldValues | any>,
}

export const DataPickerField = ({
  label,
  error,
  control,
  name = '',
  size = 'large',
  className,
  ...props
}: DataPickerFieldProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            onChange={(e) => field.onChange(e)}
            value={field.value}
            size={size}
            className={className}
            {...props}
          />
        )}
      />
      {error && <label className={styles.errorMessage}>{error.message}</label>}
    </>
  )
}