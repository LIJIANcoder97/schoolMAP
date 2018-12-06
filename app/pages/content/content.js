Page({
  data:{
    pic:'',
    title:'',
    content:'',
    longitude: '',
    latitude: '',
  },
  onLoad: function (options){
    this.setData({
      title: options.title,
      pic: options.pic,
      content: options.content,
      longitude: options.longitude,
      latitude: options.latitude,
    })
  },
  onShareAppMessage: function () {

    return {

      title: '天财校园导览',

      path: 'pages/index/index'

    }
  },

})