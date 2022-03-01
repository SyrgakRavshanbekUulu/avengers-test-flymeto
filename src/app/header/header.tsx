import { Button, Col, Menu, Row, Space } from 'antd'
import { GlobalOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import styles from './header.module.css'
import Avatar from 'antd/lib/avatar/avatar'

export const HeaderComponent = () => {
  const { Item } = Menu
  return (
    <Row justify='space-between'>
      <Col>
        FLYMETO
      </Col>
      <Col>
        <Menu mode='horizontal' className={styles.menu}>
          <Item key='flights'>
            Flights
          </Item>
          <Item key='hotels'>
            Hotels
          </Item>
          <Item key='bundles'>
            Bundles
          </Item>
        </Menu>
      </Col>
      <Col>
        <Space>
          <div className={styles.language}>
            <Button icon={<GlobalOutlined />} shape='circle' type='text' />
            EN/ENG
          </div>
          <Button icon={<NotificationOutlined />} type='text' />
          <Avatar size={32} icon={<UserOutlined />} />
        </Space>


      </Col>
    </Row>
  )
}