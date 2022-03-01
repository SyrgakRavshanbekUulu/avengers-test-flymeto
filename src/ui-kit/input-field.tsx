import { Input } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ReactNode } from 'react';
import { Controller, FieldError } from 'react-hook-form';

// TODO remove spaces

export interface InputProps {
  label?: string, // duplacted types from date-picker-field.tsx
  error?: FieldError, // duplacted types from date-picker-field.tsx
  icon?: ReactNode,
  dataList?: Array<string>, // string[]
  control: any, // no any
  name: string, // duplacted types from date-picker-field.tsx
  placeholder?: string, // duplacted types from date-picker-field.tsx
  size?: SizeType
}

export const InputField = ({
  label,
  error,
  control,
  name,
  icon,
  dataList = [],
  ...props }: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            onChange={(e) => field.onChange(e)}
            value={field.value}
            prefix={icon}
            list='data'
            {...props}
          />
        )}
      />
      {/* no inline styles */}
      {error && <label style={{ color: 'red' }}>{error.message}</label>}
      <datalist id='data'>
        {/* l -???? */}
        {dataList.map((l) => <option value={l} key={l} />)}
      </datalist>
    </>
  )
}