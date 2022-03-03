import { InputProps } from 'antd';
import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { FieldProps } from '../field-types';
// type not use interfaces
export interface InputFieldProps extends InputProps, FieldProps {
  icon?: ReactNode,
  dataList?: string[],
  control: Control<FieldValues | any>, // pls remove any
}
