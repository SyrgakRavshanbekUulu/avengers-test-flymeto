import { DatePickerProps } from 'antd';
import { FieldProps } from '@common/types';
import { Control, FieldValues } from 'react-hook-form';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';

export type DataPickerFieldProps = FieldProps & DatePickerProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}