export const appViewConfig = {
    avatar: {
        src: new URL("@/assets/avator.jpg", import.meta.url).href,
        size: 60,
        shape: 'square'
    },
    tags: [
      {
        color: 'success',
        text: 'vuejs'
      },
      {
        color: 'blue',
        text: 'eggjs'
      },
      {
        color: 'success',
        text: 'echarts'
      },
      {
        color: 'success',
        text: 'typescript'
      }            
    ],
    menu: [
        {text: '首页',  type: 'default', handle: () => console.log('你好我是首页')},
        {text: '归档',  type: 'default'},
        {text: '赞助列表',  type: 'dashed'},
        {text: '关于我们',  type: 'primary'},
    ]
}