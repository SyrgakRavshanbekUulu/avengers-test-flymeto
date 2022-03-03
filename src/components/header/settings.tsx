import { GlobalOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Space } from 'antd'
import styles from './header.module.css'

export const Settings = (): JSX.Element => {
  return (
    <Space>
      <div className={styles.language}>
        {/* pls use span */}
        <Button icon={<GlobalOutlined />} shape='circle' type='text' />
        EN/ENG
      </div>
      {/* pls use span instead of Button Component */}
      <Button icon={<NotificationOutlined />} type='text' />
      <Avatar size={32} icon={<UserOutlined />} />
    </Space>
  )
}