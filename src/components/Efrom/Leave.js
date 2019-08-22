import React, { Component } from 'react';
import { Input, Button, Table, Calendar, Alert } from 'antd';
import moment from 'moment';
import request from '../../utils/request'
const { TextArea } = Input;
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '10%',
        render: text => <a>{text}</a>,
    },
    {
        title: '请假理由',
        className: 'reason',
        width: '30%',
        dataIndex: 'reason',

    },
    {
        title: '班主任审批',
        className: 'banzhuren',
        width: '10%',
        dataIndex: 'banzhuren',

    },
    {
        title: '讲师审批',
        width: '10%',
        dataIndex: 'teacher',
    },
    {
        title: '请假时间',
        width: '20%',
        dataIndex: 'leaveTime',
    },
    {
        title: '创建时间',
        width: '20%',
        dataIndex: 'time',
    }
];
//选择日期回调



export default class ProblemPage extends Component {
    constructor() {
        super()
        this.state = {
            name: '李思鑫',
            reason: '',
            openKeys: ['sub1'],
            //表格数据
            data: [],
            //显示日历
            showTime: 'none',
            value: moment('2017-01-25'),
            selectedValue: moment('2017-01-25'),
        }
    };
    //页面初始化数据挂载
    async componentDidMount() {
        let body = `name=${this.state.name}`
        let table = await request('http://localhost:3000/qf/chaXunLeave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body
        })
        // console.log(table.data)
        this.setState({
            data: table.data
        })
    };
    //点击显示日历
    showCalendar() {
        if (this.state.showTime == "none") {
            this.setState({
                showTime: 'block'
            })
        } else {
            this.setState({
                showTime: 'none'
            })
        }

    };
    //选择日期
    onSelect = value => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = value => {
        this.setState({ value });
    };

    //监听输入框变化实现数据双向流动
    nameChange(e) {
        this.setState({
            name: e.target.value
        })
    };
    contentChange(e) {
        this.setState({
            reason: e.target.value
        })
    };

    //清除输入框内容
    clearInput = () => {
        this.setState({
            name: '',
            reason: '',
        })
    };

    //时间戳转化
    addZero(m) { return m < 10 ? '0' + m : m };
    Format(shijianchuo) {
        //shijianchuo是整数，否则要parseInt转换
        var time = new Date(shijianchuo);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        return y + '-' + this.addZero(m) + '-' + this.addZero(d) + ' ';
    }

    //新增插入请假记录
    insertLeave = async () => {
        // console.log(this.state.name, this.state.reason)
        let shijianchuo = (new Date()).getTime();
        let banzhuren = '未通过'
        let teacher = '未通过'
        let leaveTime = this.state.selectedValue.format('YYYY-MM-DD')
        let time = this.Format(shijianchuo)
        if (this.state.name && this.state.reason) {
            let body = `key=${shijianchuo}&name=${this.state.name}&reason=${this.state.reason}&banzhuren=${banzhuren}&teacher=${teacher}&leaveTime=${leaveTime}&time=${time}`
            let data = await request('http://localhost:3000/qf/insertLeave', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body
            })
            console.log(data.data)
            this.setState({
                data: data.data
            })
        } else {
            alert('请完善内容')
        }
    };

    render() {
        return (
            <div>
                <div className="box-content" style={{ width: '100%', border: '1px solid #ccc', margin: 'auto', padding: '16px 12px' }}>
                    <div>
                        <span style={{ color: 'red', display: 'inline-block', width: '15%', textAlign: 'right' }}>学员姓名:</span>
                        <Input onChange={this.nameChange.bind(this)} placeholder="" value={this.state.name} style={{ width: '200px', display: 'inline-block', marginLeft: '10px' }} />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <span style={{ color: 'red', display: 'inline-block', verticalAlign: 'top', width: '15%', textAlign: 'right' }}>请假理由:</span>
                        <TextArea onChange={this.contentChange.bind(this)} rows={4} value={this.state.reason} style={{ width: '590px', display: 'inline-block', verticalAlign: 'top', marginLeft: '10px' }} />
                    </div>
                    <div style={{ marginTop: '20px', position: 'relative' }}>
                        <span style={{ color: 'red', display: 'inline-block', verticalAlign: 'top', width: '15%', textAlign: 'right' }}>请假时间:</span>
                        <Button onClick={this.showCalendar.bind(this)} style={{ marginLeft: '20px', }} icon="calendar">
                            选择
                        </Button>
                        <div style={{ display: this.state.showTime, position: 'absolute', left: '270px', top: '0px', zIndex: '10', width: 600, border: '1px solid #d9d9d9', borderRadius: 4, backgroundColor: '#fff' }}>
                            <Alert
                                message={`你选择的时间是: ${this.state.selectedValue.format('YYYY-MM-DD')}`}
                            />
                            <Calendar value={this.state.value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
                        </div>

                    </div>

                    <div style={{ margin: "30px auto", width: '40%', marginTop: '30px' }}>
                        <Button onClick={this.insertLeave} type="primary" icon="check">申请</Button>
                        <Button onClick={this.clearInput} icon="undo" style={{ marginLeft: '50px', backgroundColor: '#eee', }}>返回</Button>
                    </div>
                </div>

                {/* 请假记录渲染表格 */}
                <div style={{ marginTop: '20px' }}>
                    <Table
                        columns={columns}
                        dataSource={this.state.data}
                        bordered
                    />
                </div>

            </div >
        )
    }


}


