import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class Navbar extends React.Component{
    render() {
        return (
            <div className="navbar">
                <Menu
                    style={{height: '100%', borderRight: 0}}
                    mode="inline"
                    theme="light"
                    defaultSelectedKeys={[]}
                    defaultOpenKeys={[]}
                >
                    <SubMenu key="sub1" title={<span>车辆及设备管理</span>}>
                        <Menu.Item key="1"><Link to="/info/car">车辆信息查询与管理</Link></Menu.Item>
                        <SubMenu key="sub1-1" title={<span>设备信息管理</span>}>
                            <Menu.Item key="2"><Link to="/info/device/device">设备信息</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/info/device/sim">SIM卡信息</Link></Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span>检查数据管理</span>}>
                        <Menu.Item key="4"><Link to="/data/real">检查现场</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/data/past">历史数据</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span>检查统计分析</span>}>
                        <Menu.Item key="6"><Link to="/statistics/exterior">外观检查统计</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/statistics/basis">OBD基本功能检查统计</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/statistics/emission">排放控制逻辑检查统计</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/statistics/datatable">数据统计报表</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/statistics/cloud">云诊断</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="11"><Link to="/recheck">复检库</Link></Menu.Item>
                    <SubMenu key="sub4" title={<span>故障代码统计</span>}>
                        <Menu.Item key="12"><Link to="/lib/normal">故障代码标准库</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/lib/total">故障代码统计库</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span>系统设置与管理</span>}>
                        <Menu.Item key="14"><Link to="/management/user">用户管理</Link></Menu.Item>
                        <Menu.Item key="15"><Link to="/management/department">环保部门管理</Link></Menu.Item>
                        <Menu.Item key="16"><Link to="/management/bulletin">系统公告</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Navbar;