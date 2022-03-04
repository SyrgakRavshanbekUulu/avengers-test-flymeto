import { Layout } from 'antd'
import { Flights, HeaderComponent } from '../components'

export const MainLayout = (): JSX.Element => {
  const { Header, Content } = Layout
  return (
    <Layout className='layout'>
      <Header>
        <HeaderComponent />
      </Header>
      <Content>
        <Flights />
      </Content>
    </Layout>
  )
}