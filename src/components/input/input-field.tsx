import { Input, InputProps } from 'antd';
import { ReactNode } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FieldProps } from '../field-types';
import styles from './input-field.module.css'

export interface InputFieldProps extends InputProps, FieldProps {
  icon?: ReactNode,
  dataList?: string[],
  control: Control<FieldValues | any>,
}

export const InputField = ({
  label,
  error,
  control,
  name = '',
  icon,
  dataList = [],
  size = 'large',
  ...props }: InputFieldProps) => {
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
            list={dataList.length > 0 ? 'data' : ''}
            size='large'
            {...props}
          />
        )}
      />
      {error && <label className={styles.errorMessage}>{error.message}</label>}
      <datalist id='data'>
        {dataList.map((list) => <option value={list} key={list} />)}
      </datalist>
    </>
  )
}