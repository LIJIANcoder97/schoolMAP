//logs.js

Page({
  data:{
    longitude:0.00000,
    latitude:0.000000,
    makers:[]
  },
  onShareAppMessage: function () {

    return {

      title: '天财校园导览',

      path: 'pages/index/index'

    }
  },
  onLoad: function (options){
    this.setData({
      longitude: options.longitude,
      latitude: options.latitude,
      markers:[{ 
        id:100,
        longitude: options.longitude,
        latitude: options.latitude,
        iconPath: "/resouse/icon/other.png",
        title:'TOUCH打开街景图',
        width: 32,
        height: 64
      }],
      
  })
  },
  tap:function(){
    wx.openLocation({
      latitude: Number(this.data.latitude),
      longitude: Number(this.data.longitude),
      name: '街景图',
      scale: 28
    })
  }
})
function test(that){
  wx.openLocation({
    latitude: Number(that.data.latitude) ,
    longitude: Number(that.data.longitude) ,
    name:'街景图',
    scale: 28
  })
}
