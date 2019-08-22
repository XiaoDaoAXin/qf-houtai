import React, { Component } from 'react';
import { Button } from 'antd';
require('./css/index.css')
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            name: '李思鑫',
            sex: '男',
            headImg: 'http://qfzs.static.1000phone.net/img/2019-03-25/46b88728a2d018408c2c2d1e67a8c56e.jpg',
            personInfo: [
                {
                    key: 1,
                    title: '身份证号',
                    dec: '460033199401060877'
                },
                {
                    key: 2,
                    title: '手机号码',
                    dec: '13829256230'
                },
                {
                    key: 3,
                    title: 'QQ号码',
                    dec: '657848320'
                },
                {
                    key: 4,
                    title: '学号',
                    dec: 'GZ190413031'
                },
                {
                    key: 5,
                    title: '毕业学院',
                    dec: '太原科技大学  材料科学与工程学院'
                },
                {
                    key: 6,
                    title: '在校状态',
                    dec: '待业'
                },
                {
                    key: 7,
                    title: '学历',
                    dec: '本科'
                },
                {
                    key: 8,
                    title: '千锋班级',
                    dec: '广州HTML5就业班1905期'
                },
                {
                    key: 9,
                    title: '招生老师',
                    dec: '杨虎'
                },
                {
                    key: 10,
                    title: '报名日期',
                    dec: '2019-03-04'
                },
                {
                    key: 11,
                    title: '介绍人',
                    dec: '无'
                }
            ]
        }
    };

    render() {
        return (
            <div style={{ padding: '0px 25px' }}>
                <div style={{ overflow: 'hidden', paddingBottom: '5px', borderBottom: '1px dashed #ccc' }}>
                    <Button style={{ width: '100px', height: '30px', float: 'right', color: 'white' }} type="primary">修改</Button>
                </div>
                {/* ------个人信息列表------------- */}
                <div style={{ overflow: 'hidden', marginTop: '15px', }}>
                    <div style={{ float: 'left' }}>
                        <div style={{ width: '189px', height: '209px', padding: '4px', border: '1px solid #ccc' }}>
                            <img style={{ width: '180px', height: '200px' }} src={this.state.headImg} alt="" />
                        </div>
                        <div style={{ width: '189px', height: '28px', color: 'white', lineHeight: '28px', backgroundColor: '#3a87ad', textAlign: 'center', marginTop: '10px' }}>
                            <i style={{ display: 'inline-block', width: '14px', height: '14px', backgroundColor: '#b0d877', borderRadius: '50%', verticalAlign: 'middle' }}></i>
                            <span style={{ verticalAlign: 'middle', marginLeft: '5px' }}>{this.state.name}</span>
                            <span style={{ verticalAlign: 'middle', marginLeft: '20px' }}>{this.state.sex}</span>
                        </div>
                    </div>
                    <div style={{ float: 'left', border: '1px solid #dcebf7', marginLeft: '50px' }}>
                        {
                            this.state.personInfo.map((item, index) => {
                                return (
                                    <div style={{ paddingTop: '1px' }} key={index}>
                                        <span style={{ display: 'inline-block', width: '120px', padding: '6px 10px', color: '#336199', textAlign: 'right', backgroundColor: '#edf3f4' }}>{item.title}</span>
                                        <span style={{ display: 'inline-block', width: '590px', height: '28px', padding: '0px 10px', borderBottom: '1px dotted #d5e4f1' }}>{item.dec}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* ------我的消息------------- */}
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '16px', lineHeight: '36px' }}>[<b>我的消息</b>]</h1>
                    <table style={{ width: "100%" }}>
                        <tbody style={{ width: '100%' }}>
                            <tr style={{ width: '100%', backgroundColor: '#edf3f4', height: '32px', lineHeight: '32px' }}>
                                <th style={{ width: '90%', border: '1px solid #ddd', textIndent: '10px', }}>消息内容</th>
                                <th style={{ width: '10%', border: '1px solid #ddd', textIndent: '10px' }}>时间</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* ------班主任寄语------------- */}
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '16px', lineHeight: '36px' }}>[<b>班主任寄语</b>]</h1>
                    <table style={{ width: "100%" }}>
                        <tbody style={{ width: '100%' }}>
                            <tr style={{ width: '100%', backgroundColor: '#edf3f4', height: '32px', lineHeight: '32px' }}>
                                <th style={{ width: '10%', border: '1px solid #ddd', textIndent: '10px', }}>评价老师</th>
                                <th style={{ width: '80%', border: '1px solid #ddd', textIndent: '10px', }}>内容</th>
                                <th style={{ width: '10%', border: '1px solid #ddd', textIndent: '10px' }}>时间</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* ------千锋其他会员开通 ------------ */}
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '16px', lineHeight: '36px' }}>[<b>班主任寄语</b>]</h1>
                    <table style={{ width: "100%" }}>
                        <tbody style={{ width: '100%' }}>
                            <tr style={{ width: '100%', backgroundColor: '#edf3f4', height: '32px', lineHeight: '32px' }}>
                                <th style={{ width: '10%', border: '1px solid #ddd', textIndent: '10px', }}>产品名称</th>
                                <th style={{ width: '45%', border: '1px solid #ddd', textIndent: '10px', }}>产品描述</th>
                                <th style={{ width: '45%', border: '1px solid #ddd', textIndent: '10px' }}>开通信息</th>
                            </tr>
                            <tr style={{ fontSize: '12px', color: 'gray', lineHeight: '20px' }}>
                                <th style={{ width: '10%', border: '1px solid #ddd', textIndent: '10px', }}>扣丁学堂</th>
                                <th style={{ width: '45%', border: '1px solid #ddd', textIndent: '10px', }}>扣丁学堂大量免费线上视频，不定期更新，为您规划职业路线。官方网站:<a href=" http://www.codingke.com"> http://www.codingke.com</a></th>
                                <th style={{ width: '45%', border: '1px solid #ddd', textIndent: '10px', }}>
                                    <span style={{ color: 'red' }}>您还未开通扣丁学堂</span>
                                    <button style={{ width: '63px', height: '22px' }}>立即开通</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

