// TODO novars
import { Input } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { DatePicker } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext';

// TODO spaces

// use Types
export interface DataPickerProps {
  label?: string,
  error?: FieldError,
  control: any, // TODO remove any
  name: string,
  placeholder?: string,
  size?: SizeType,
  className?: string
}

export const DataPickerField = ({
  label,
  error,
  control,
  name,
  size,
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