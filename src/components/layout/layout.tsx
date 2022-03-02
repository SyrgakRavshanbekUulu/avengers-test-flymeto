import { Layout } from 'antd'
import { Flights } from '../../feature'
import { HeaderComponent } from '../header/header'
import styles from './layout.module.css'

export const LayoutComponent = (): JSX.Element => {
  const { Header, Content } = Layout
  return (
    <Layout className={styles.layout}>
      <Header>
        <HeaderComponent />
      </Header>
      <Content>
        <Flights />
      </Content>
    </Layout>
  )
}