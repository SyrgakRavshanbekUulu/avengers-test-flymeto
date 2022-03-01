import { Layout } from 'antd'
import { Flights } from '../../feature'
import { HeaderComponent } from '../header/header'
// no vars
import styles from './layout.module.css'

// return type
export const LayoutComponent = () => {
  const { Header, Content } = Layout
  return (
    <Layout>
      {/* style modules */}
      <Header style={{ backgroundColor: 'var(--gray)' }}>
        <HeaderComponent />
      </Header>
      <Content>
        <Flights />
      </Content>
    </Layout>
  )
}