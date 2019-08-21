import {
  Icon
} from "antd";
export default [{
  key: 'sub1',
  title: <p><Icon type="user" /> <span> 学员后台 </span></p>,
  options: [{
    key: 1,
    title: '技术问题',
    url: '/problem'
  },
  {
    key: 2,
    title: '项目上传',
    url: '/itemupload'
  }, {
    key: 3,
    title: '学员周报',
    url: '/weekly'
  }, {
    key: 4,
    title: '我的资料',
    url: '/index'
  }, {
    key: 5,
    title: '学员评价',
    url: '/evaluate'
  }, {
    key: 6,
    title: '教学测评',
    url: '/test'
  }
  ]
},
{
  key: 'sub2',
  title: <p><Icon type="appstore" /> <span>学员考勤 </span></p>,
  options: [{
    key: 7,
    title: '学员请假',
    url: '/leave'
  },
  {
    key: 8,
    title: '学员违纪',
    url: '/discipline'
  }
  ]
}
]
