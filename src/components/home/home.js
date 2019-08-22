import React from 'react'
import './home.css';
import { Layout, Menu, Icon, Dropdown, Breadcrumb } from 'antd';
import { Route, Switch, Link } from 'dva/router';
//路由页面
import ProblemPage from '../Efrom/Problem';
import ItemUploadPage from "../Efrom/ItemUpload";
import WeeklyPage from "../Efrom/Weekly";
import IndexPage from "../Efrom/Index";
import LeavePage from "../Efrom/Leave";
//左侧菜单数据
import nav from "./nav.js";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
//用户下拉退出菜单
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                <Icon type="logout" />  退出
        </a>
        </Menu.Item>
    </Menu>
);



export default class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        user: '李思鑫',
        openKeys: ['sub1'],
        nav: nav,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };


    render() {
        return (
            <div style={{ height: '100%' }}>
                <Layout style={{ height: '100%' }}>
                    <Header style={{ height: '50px', lineHeight: '50px', background: '#428bca', padding: '0px 10px' }}>
                        <img style={{ display: 'inline-block', width: '190px', height: '50px', }} src={require('../../assets/logo.png')} alt="" />
                        <Dropdown overlay={menu} >
                            <a className="ant-dropdown-link" href="" style={{ float: 'right', color: '#fff' }}>
                                {this.state.user} <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Header>
                    <Layout style={{ height: 'calc(100% - 50px)' }}>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ background: '#eee', }}>
                            <div className="logo" />
                            <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} style={{ width: '100%', background: '#eee', fontSize: '14px' }}>
                                {this.state.nav.map((item, index) => {
                                    return (
                                        <SubMenu style={{ background: '#eee', margin: '0px' }}
                                            key={item.key}
                                            title={item.title}>
                                            {
                                                item.options.map((it, ind) => {
                                                    return (
                                                        <Menu.Item key={it.key}><Link to={it.url}>{it.title}</Link></Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    )
                                })}
                            </Menu>
                        </Sider>
                        <Layout style={{ height: '100%' }}>
                            <Header style={{ background: '#fff', height: '40px', lineHeight: '40px', padding: 0, }}>
                                <Icon
                                    style={{ marginLeft: "20px", float: 'left', height: '40px', lineHeight: '40px', verticalAlign: 'middle' }}
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                {/*----------- 面包屑----------- */}
                                <Breadcrumb style={{ float: 'left', marginLeft: '20px', height: '40px', lineHeight: '40px', verticalAlign: 'middle' }}>
                                    <Breadcrumb.Item>学员后台</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href="">Application Center</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>技术问题</Breadcrumb.Item>
                                </Breadcrumb>
                            </Header>
                            <Content
                                style={{
                                    minHeight: 'auto',
                                    margin: '24px 16px',
                                    padding: 24,
                                    background: '#fff',
                                }}
                            >
                                <Switch>
                                    <Route path="/problem" component={ProblemPage}></Route>
                                    <Route path='/itemupload' component={ItemUploadPage}></Route>
                                    <Route path='/weekly' component={WeeklyPage}></Route>
                                    <Route path='/index' component={IndexPage}></Route>
                                    <Route path='/leave' component={LeavePage}></Route>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div >
        );
    }
}

// ReactDOM.render(<SiderDemo />, mountNode);

