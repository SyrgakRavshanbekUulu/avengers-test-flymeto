import { faArrowRightArrowLeft, faPlaneArrival, faPlaneDeparture, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Form, Row } from 'antd'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { onSubmit } from './onSubmit'
import { DataPickerField, InputField } from '..'

export const Flights = (): JSX.Element => {
  const locations: string[] = ['Bishkek', 'London', 'Paris']
  const { handleSubmit, control, setValue, getValues } = useForm({
    resolver: yupResolver(schema)
  })

  const swapLocation = (): void => {
    const from: string = getValues('fromLocation')
    const to: string = getValues('toLocation')
    setValue('fromLocation', to, { shouldValidate: true })
    setValue('toLocation', from, { shouldValidate: true })
  }

  return (
    <div className='flights__wrapper'>
      <Form onFinish={handleSubmit(onSubmit as () => void)}>
        <Row gutter={16}>
          <Col span={5}>
            <InputField
              name='fromLocation'
              control={control}
              label='From:'
              placeholder='Select Loacation'
              dataList={locations}
              icon={<FontAwesomeIcon icon={faPlaneDeparture} />}
            />
          </Col>

          <Col span={1}>
            <Button type='text' onClick={swapLocation}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </Button>
          </Col>

          <Col span={5}>
            <InputField
              name='toLocation'
              control={control}
              label='To:'
              placeholder='Select Loacation'
              dataList={locations}
              icon={<FontAwesomeIcon icon={faPlaneArrival} />}
            />
          </Col>

          <Col span={5}>
            <DataPickerField
              name='dateFly'
              control={control}
              placeholder='Select Date'
              className='flights__datePicker'
              label='Date'
            />
          </Col>

          <Col span={5}>
            <InputField
              name='passengers'
              control={control}
              label='Passangers & Cabin class'
              icon={<FontAwesomeIcon icon={faUser} />}
            />
          </Col>

          <Col span={3}>
            <Button htmlType='submit' type='primary'>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}