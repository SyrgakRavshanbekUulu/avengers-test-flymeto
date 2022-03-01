import { Layout } from 'antd'
import { Flights } from '../../feature'
import { HeaderComponent } from '../header/header'
import styles from './layout.module.css'

export const LayoutComponent = () => {
  const { Header, Content } = Layout
  return (
    <Layout>
      <Header style={{ backgroundColor: 'var(--gray)' }}>
        <HeaderComponent />
      </Header>
      <Content>
        <Flights />
      </Content>
    </Layout>
  )
}