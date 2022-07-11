import { Layout, Menu } from 'antd';
import { MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;
const itensMenu = [
  {key:1,label:'Clientes'},
  {key:2,label:'Imóveis'},
  {key:3,label:'Pagamentos'},
];
const App = () => (
  <Layout>
    <Header 
      style={{
        paddingLeft:"0px",
        paddingRight:"10px",
        backgroundColor:'#05060b',
        position:'fixed',
        width:'100%'
      }}
    >
      <img 
        src="public/LogoGoldHouse.jpg" 
        height="100%"
        style={{float:"left",paddingRight:"20px"}}
      />
      <span style={{float:"right",color:"#ffffff"}}>
        Contato: 
        &nbsp;<WhatsAppOutlined style={{color:"#ffffff",backgroundColor:"green"}} /> (61) 99925-9798 
        &nbsp;<MailOutlined style={{color:"#000000",backgroundColor:"#ffffff"}} /> contato@goldhouse.com.br 
      </span>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={itensMenu}
        style={{height:"100%",backgroundColor:'#05060b'}}
      />
    </Header>
    <Content
      style={{
        padding: '70px 10px',
        backgroundColor: '#333333',
        color:'#ffffff',
        minHeight:'800px'
      }}
    >
      {[...Array(50).keys()].map((i)=>{
        return <div>Francisco Everton de Farias Filho</div>
      })}
    </Content>
  </Layout>
);

export default App;