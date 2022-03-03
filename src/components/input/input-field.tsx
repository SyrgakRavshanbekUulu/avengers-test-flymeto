import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import styles from './input-field.module.css'
import { InputFieldProps } from './type';

// return type
export const InputField = ({
  label,
  // error,
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
        render={({ field, fieldState }) => {
          console.log(fieldState.error?.message, 'pls use' );

          return <>
          <Input
          onChange={(e) => field.onChange(e)}
          value={field.value}
          prefix={icon}
          // !!dataList.length
          list={!!dataList.length ? 'data' : ''}
          size='large'
          {...props}
        />
        {fieldState.error?.message && <label className={styles.errorMessage}>{fieldState.error?.message}</label>}
        </>
        }}
      />
      
      <datalist id='data'>
        {dataList.map((list) => <option value={list} key={list} />)}
      </datalist>
    </>
  )
}