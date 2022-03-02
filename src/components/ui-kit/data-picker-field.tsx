import { Control, Controller, FieldValues } from 'react-hook-form';
import { DatePicker } from 'antd'
import { FieldProps } from './field-types';

export type DataPickerProps = FieldProps & {
  control: Control<FieldValues | any>,
}

export const DataPickerField = ({
  label,
  error,
  control,
  name,
  size = 'large',
  className,
  ...props
}: DataPickerProps) => {
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
      {/* TODO no inline styles */}
      {error && <label style={{ color: 'red' }}>{error.message}</label>}
    </>
  )
}