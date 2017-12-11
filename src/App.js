import React, { Component } from 'react';
import NavBar from './components/Navbar';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Logo from './imgs/logo.png';
import './App.css';

const { Header, Content, Sider } = Layout;

class App extends Component {
    constructor(props){
        super(props);
        this.setMinHeight = this.setMinHeight.bind(this);
        this.state = {
            minHeight: 560
        }
    }

    setMinHeight(){
        this.setState({
            minHeight: window.innerHeight - 64
        });
    }

    componentDidMount(){
        this.setMinHeight();
        window.addEventListener('resize', () => {
            this.setMinHeight();
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }

  render() {
    return (
      <Layout>
          <Header className="header">
              <Link to="/" className="title">基于OBD的在用车排放现场监测云服务平台</Link>
              <img src={Logo} alt="logo"/>
          </Header>
          <Layout>
              <Sider width={256} style={{ backgroundColor: '#D9E5FD'}}>
                  <NavBar />
              </Sider>
              <Content style={{minHeight: this.state.minHeight}}>
                  {this.props.children}
               </Content>
          </Layout>
      </Layout>
    );
  }
}

export default App;
