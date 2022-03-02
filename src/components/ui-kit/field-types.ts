import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { FieldError } from 'react-hook-form';

export type FieldProps = {
  label?: string,
  error?: FieldError,
  placeholder?: string,
  size?: SizeType,
  name: string,
  className?: string
}