import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { InputFieldProps } from './type';

export const InputField = ({
  label,
  control,
  name = '',
  icon,
  dataList = [],
  size = 'large',
  ...props }: InputFieldProps): JSX.Element => {
  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return <>
            <Input
              onChange={(e) => field.onChange(e)}
              value={field.value}
              prefix={icon}
              list={dataList.length ? 'data' : ''}
              size={size}
              {...props}
            />
            {fieldState.error?.message && <label className='errorLabel'>{fieldState.error?.message}</label>}
          </>
        }}
      />

      <datalist id='data'>
        {dataList.map((list) => <option value={list} key={list} />)}
      </datalist>
    </>
  )
}