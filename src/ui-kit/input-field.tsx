import { Input } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ReactNode } from 'react';
import { Controller, FieldError } from 'react-hook-form';



export interface InputProps {
  label?: string,
  error?: FieldError,
  icon?: ReactNode,
  dataList?: Array<string>,
  control: any,
  name: string,
  placeholder?: string,
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
      {error && <label style={{ color: 'red' }}>{error.message}</label>}
      <datalist id='data'>
        {dataList.map((l) => <option value={l} key={l} />)}
      </datalist>
    </>
  )
}