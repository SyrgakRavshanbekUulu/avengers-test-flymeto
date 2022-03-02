import { Input } from 'antd';
import { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { FieldProps } from './field-types';

export type InputProps = FieldProps & {
  icon?: ReactNode,
  dataList?: string[],
  control: any,
}

export const InputField = ({
  label,
  error,
  control,
  name,
  icon,
  dataList = [],
  size = 'large',
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
            size='large'
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