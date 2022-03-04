import { InputProps } from 'antd';
import { ReactNode } from 'react';
import { Control } from 'react-hook-form';
import { FieldProps } from '../../common/types';

export type InputFieldProps = InputProps & FieldProps & {
  icon?: ReactNode,
  dataList?: string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}
