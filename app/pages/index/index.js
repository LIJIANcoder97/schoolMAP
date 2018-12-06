var close = true;
var url ='';
Page({
  data: {
    map:'45%',
    low:'45%',
    v:'../image/spread.png',
    welcome: '#DCDCDC',
    car: '#DCDCDC',
    other: '#DCDCDC',
    stduyBuild:'#FFFFFF',
    Door:'#DCDCDC',
    View:'#DCDCDC',
    libiary:'#DCDCDC',
    culture:'#DCDCDC',
    Home:'#DCDCDC',
    gym:'#DCDCDC',
    rest:'#DCDCDC',
    super:'#DCDCDC',
    content: '',
   longitude: 117.2778940201,
    latitude: 39.0616991837,
    scale:17,
    markers: [],
    points:[],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],

    currentList: [],
    toview:'',
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    this.setData({
      toview:'B'+e.markerId,
    })
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad:function(){
     build(this);
    
  },
  libiary:function(event){
    
    this.setData({
      welcome: '#DCDCDC',
      car: '#DCDCDC',
      other: '#DCDCDC',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#DCDCDC',
      libiary: '#FFFFFF',
      culture: '#DCDCDC',
      Home: '#DCDCDC',
      gym: '#DCDCDC',
      rest: '#DCDCDC',
      super: '#DCDCDC',
     
      longitude: 117.2761452198  ,
      latitude: 39.0619157789,
      scale: 18,
      markers:[{
        iconPath: "/resouse/icon/library.png",
        id: 36,
        title: "逸夫图书馆",
        latitude: 39.0631820142, 
        longitude: 117.2793585062,
        width: 32,
        height: 64
      },{
          iconPath: "/resouse/icon/library.png",
          id: 37,
          title: "H座阅览室",
          latitude: 39.0599997217, 
          longitude: 117.2790205479,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/library.png",
          id: 38,
          title: "西院图书馆",
          latitude: 39.0630528926,
          longitude: 117.2725725174,
          width: 32,
          height: 64
        }],
      currentList: [{
        id: 'B36', pic: "../image/YFL.jpg", text: '逸夫图书馆', latitude: 39.0631820142, longitude: 117.2793585062, content: '逸夫图书馆,现代化的建筑风格，内部有海量图书资源以及宽敞的自习室。一二层自习室通过公众号‘来选座’选座。',},
        { id: 'B37', pic: "../image/HIJ.jpg", text: 'H座阅览室', latitude: 39.0599997217, longitude: 117.2790205479, content: 'H座综合阅览室，近年新开设的阅览室，整合了西院图书馆资源，图书不能租借' },
        {
          id: 'B38', pic: "../image/XYL.jpg", text: '西院图书馆', latitude: 39.0630528926, longitude: 117.2725725174, content: '西苑图书馆这里安静典雅，爬山虎总是爬满围墙，内部多为考研学生自习。'},
      ]
    });
  },
  stduyBuild:function(event){
    build(this);
  },
  gym:function(){
    
    this.setData({
      welcome: '#DCDCDC',
      car: '#DCDCDC',
      other: '#DCDCDC',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#DCDCDC',
      libiary: '#DCDCDC',
      culture: '#DCDCDC',
      Home: '#DCDCDC',
      gym: '#FFFFFF',
      rest: '#DCDCDC',
      super: '#DCDCDC',
      longitude: 117.2769069672,
      latitude: 39.0584835004, 
      scale: 17,
      markers: [{
        iconPath: "/resouse/icon/gym.png",
        id: 39,
        title: "财大田径场",
        latitude: 39.0623906198, 
        longitude: 117.2821640968,
        width: 32,
        height:64
      }, {
          iconPath: "/resouse/icon/gym.png",
        id: 40,
        title: "操场",
          latitude: 39.0583085497, 
          longitude: 117.2767138481,
        width: 32,
        height: 64
        }, {
          iconPath: "/resouse/icon/gym.png",
          id: 41,
          title: "篮球场",
          latitude: 39.0585709756,
          longitude: 117.2785538435,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/gym.png",
          id: 42,
          title: "排球场",
          latitude: 39.0581127711, 
          longitude: 117.2786611319,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/gym.png",
          id: 43,
          title: "网球场",
          latitude: 39.0579628126, 
          longitude: 117.2779583931,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/gym.png",
          id: 44,
          title: "南门网球场",
          latitude: 39.0569714122, 
          longitude: 117.2746056318,
          width: 32,
          height: 64
        },{
          iconPath: "/resouse/icon/gym.png",
          id: 45,
          title: "南门篮球场",
          latitude: 39.0570880483, 
          longitude: 117.2750508785,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/gym.png",
          id: 46,
          title: "公寓篮球场",
          latitude: 39.0543095584, 
          longitude: 117.2747290134,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/gym.png",
          id: 47,
          title: "老体育馆",
          latitude: 39.0618991177, 
          longitude: 117.2755283117,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/gym.png",
          id: 48,
          title: "全运会场馆",
          latitude: 39.0595206993, 
          longitude: 117.2820621729,
          width: 32,
          height: 64
        }],
      currentList: [{
        id: 'B39', pic: "../image/GYM1.jpg", text: '财大田径场', latitude: 39.0623906198,
        longitude: 117.2821640968, content: '位于A-B座正背面，体育课选课、踢足球、跑步等多项体育活动均可在此进行。'
      },
        {
          id: 'B48', pic: "../image/GYM2.jpg", text: '全运会场馆', latitude: 39.0595206993,
          longitude: 117.2820621729, content: '新体育馆,曾是全运会女篮比赛的比赛场地，配有最先进的体育设备。新生开学典礼和毕业生毕业典礼都在此进行。'
        }, {
          id: 'B47', pic: "../image/GYM3.jpg", text: '老体育馆', latitude: 39.0618991177,
          longitude: 117.2755283117, content: '位于世纪大道旁，是体育课授课和运动员训练的主要场地，也包含着一些社团的活动室，一天都会陆陆续续有同学在此训练、锻炼。'
        }, {
          id: 'B46', pic: "../image/GGM.jpg", text: '公寓篮球场', latitude: 39.0543095584,
          longitude: 117.2747290134, content: '位于公寓中心，是体育课授课和学生锻炼的主要场地，社团纳新与活动都会在这里举行。'
        },
      ]
    });
  },
  stduyBuild: function (event) {
    build(this);
  },
 Door:function(){
   this.setData({
     welcome: '#DCDCDC',
     car: '#DCDCDC',
     other: '#DCDCDC',
     stduyBuild: '#DCDCDC',
     Door: '#FFFFFF',
     View: '#DCDCDC',
     libiary: '#DCDCDC',
     culture: '#DCDCDC',
     Home: '#DCDCDC',
     gym: '#DCDCDC',
     rest: '#DCDCDC',
     super: '#DCDCDC',
     longitude: 117.2766494751,
     latitude: 39.0579503160,
     scale: 16,
     markers:[{
       iconPath: "/resouse/icon/door.png",
       id: 13,
       title: "北门",
       latitude: 39.0637901324, 
       longitude: 117.2798681259,
       width: 32,
       height: 64
     },{
         iconPath: "/resouse/icon/door.png",
         id: 14,
         title: "北一门",
         latitude: 39.0634402568,
         longitude: 117.2729533911,
         width: 32,
         height: 64
       }, {
         iconPath: "/resouse/icon/door.png",
         id: 15,
         title: "地铁站门",
         latitude: 39.0636790000, 
         longitude: 117.2774190000,
         width: 32,
         height: 64
       }, {
         iconPath: "/resouse/icon/door.png",
         id: 16,
         title: "东南门",
         latitude: 39.0580169643, 
         longitude: 117.2793745995,
         width: 32,
         height: 64
       }, {
         iconPath: "/resouse/icon/door.png",
         id: 17,
         title: "南一门",
         latitude: 39.0570338958, 
         longitude: 117.2761988640,
         width: 32,
         height: 64
       }, {
         iconPath: "/resouse/icon/door.png",
         id: 65,
         title: "南二门",
         latitude: 39.0565173629, 
         longitude: 117.2741496563,
         width: 32,
         height: 64
       }, {
         iconPath: "/resouse/icon/door.png",
         id: 18,
         title: "公寓北门",
         latitude: 39.0562840887, 
         longitude: 117.2742247581,
         width: 32,
         height: 64
       }, {
         iconPath: "/resouse/icon/door.png",
         id: 19,
         title: "公寓东门",
         latitude: 39.0562132731, 
         longitude: 117.2765475512,
         width: 32,
         height: 64
       }, {
         iconPath: "/resouse/icon/door.png",
         id: 20,
         title: "公寓南门",
         latitude: 39.0530556613, 
         longitude: 117.2758877277,
         width: 32,
         height: 64
       }],
     currentList: [{
       id: 'B13', pic: "../image/BE.jpg", text: '北门', latitude: 39.0637901324,longitude: 117.2798681259,
     },
       {id: 'B14', pic: "../image/BE1.jpg", text: '北一门', latitude: 39.0634402568,longitude: 117.2729533911,},
       {
         id: 'B15', pic: "../image/DITIE.jpg", text: '地铁站门', latitude: 39.0636790000,
         longitude: 117.2774190000,},
       {
         id: 'B16', pic: "../image/ES.jpg", text: '东南门', latitude: 39.0580169643,
         longitude: 117.2793745995, },
       {
         id: 'B17', pic: "../image/S1.jpg", text: '南一门', latitude: 39.0570338958,
         longitude: 117.2761988640, },
       {
         id: 'B18', pic: "../image/GN.jpg", text: '南二门', latitude: 39.0565173629,
         longitude: 117.2741496563, },
       {
         id: 'B19', pic: "../image/GN.jpg", text: '公寓北门', latitude: 39.0562840887,
         longitude: 117.2742247581, },
       {
         id: 'B20', pic: "../image/GE.jpg", text: '公寓东门', latitude: 39.0562132731,
         longitude: 117.2765475512,},
       {
         id: 'B21', pic: "../image/GS.jpg", text: '公寓南门', latitude: 39.0530556613,
         longitude: 117.2758877277, },
     ]
   })
 },
  View:function(){
    this.setData({
      welcome: '#DCDCDC',
      car: '#DCDCDC',
      other: '#DCDCDC',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#FFFFFF',
      libiary: '#DCDCDC',
      culture: '#DCDCDC',
      Home: '#DCDCDC',
      gym: '#DCDCDC',
      rest: '#DCDCDC',
      super: '#DCDCDC',
      longitude: 117.2787791491,
      latitude: 39.0613034793, 
      scale: 19,
      markers:[{
        iconPath: "/resouse/icon/view.png",
        id: 67,
        title: "统计湖",
        latitude: 39.0612701567, 
        longitude: 117.2792083025,
        width: 32,
        height: 64
      }, {
          iconPath: "/resouse/icon/view.png",
          id: 68,
          title: "计量山",
          latitude: 39.0614909185, 
          longitude: 117.2782373428,
          width: 32,
          height: 64
        }],
      currentList: [{
        id: 'B67', pic: "../image/TJH.jpg", text: '统计湖', latitude: 39.0612701567, longitude: 117.2792083025, content:'统计湖,这里的四季是校园一到亮丽的风景，除了有迷人的景色，同时也是学生晨读圣地，里面还有萌萌的鸭子和带来好运的锦鲤。'},
        { id: 'B68', pic: "../image/JLS.jpg", text: '计量山', latitude: 39.0614909185, longitude: 117.2782373428, content: '计量山不是山，是一个用来存储建设用土形成的山丘。经过悉心打造，成为了一道风景。'},
      ]
    })
  },
  Home:function(){
    this.setData({
      welcome: '#DCDCDC',
      car: '#DCDCDC',
      other: '#DCDCDC',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#DCDCDC',
      libiary: '#DCDCDC',
      culture: '#DCDCDC',
      Home: '#FFFFFF',
      gym: '#DCDCDC',
      rest: '#DCDCDC',
      super: '#DCDCDC',
      longitude: 117.2750508785,
      latitude: 39.0547177991, 
      scale: 18,
      markers:[{
        iconPath: "/resouse/icon/home.png",
        id: 21,
        title: "1号楼",
        latitude: 39.0564590444, 
        longitude: 117.2759628296,
        width: 32,
        height: 64
      },{
          iconPath: "/resouse/icon/home.png",
          id: 22,
          title: "2号楼",
          latitude: 39.0560841387, 
          longitude: 117.2748363018,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 23,
          title: "3号楼",
          latitude: 39.0556092554, 
          longitude: 117.2760593891,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 24,
          title: "4号楼",
          latitude: 39.0546511477, 
          longitude: 117.2766065598,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 25,
          title: "5号楼",
          latitude: 39.0540346194,
          longitude: 117.2769659758,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 26,
          title: "6号楼",
          latitude: 39.0537763424, 
          longitude: 117.2761183977,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 27,
          title: "7号楼",
          latitude: 39.0558758570,
          longitude: 117.2741925716,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 28,
          title: "8号楼",
          latitude: 39.0553968066, 
          longitude: 117.2730714083,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 29,
          title: "研究生楼",
          latitude: 39.0550052325, 
          longitude: 117.2734093666,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 30,
          title: "10号楼",
          latitude: 39.0546094906, 
          longitude: 117.2735434771,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 31,
          title: "11号楼",
          latitude: 39.0539221441, 
          longitude: 117.2736239433,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 32,
          title: "12号楼",
          latitude: 39.0537430163,
          longitude: 117.2742354870,
          width: 32,
          height: 64
        },{
          iconPath: "/resouse/icon/home.png",
          id: 33,
          title: "13号楼",
          latitude: 39.0533014436, 
          longitude: 117.2752547264,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 34,
          title: "14号楼",
          latitude: 39.0531764697, 
          longitude: 117.2742408514,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/home.png",
          id: 35,
          title: "15号楼",
          latitude: 39.0550552208, 
          longitude: 117.2764831781,
          width: 32,
          height: 64
        }],
      currentList: [{
        id: 'B21', pic: "../image/Home.jpg", text: '一号楼', latitude: 39.0564590444, longitude: 117.2759628296, content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'},
        {
          id: 'B22', pic: "../image/Home.jpg", text: '二号楼', latitude: 39.0560841387,
          longitude: 117.2748363018, content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B23', pic: "../image/Home.jpg", text: '三号楼', latitude: 39.0556092554,
          longitude: 117.2760593891, content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B24', pic: "../image/Home.jpg", text: '四号楼', latitude: 39.0546511477,
          longitude: 117.2766065598, content: ',大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B25', pic: "../image/Home.jpg", text: '五号楼', latitude: 39.0540346194,
          longitude: 117.2769659758, content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B26', pic: "../image/Home.jpg", text: '六号楼', latitude: 39.0537763424,
          longitude: 117.2761183977,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B27', pic: "../image/Home.jpg", text: '七号楼', latitude: 39.0558758570,
          longitude: 117.2741925716,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B28', pic: "../image/Home.jpg", text: '八号楼', latitude: 39.0553968066,
          longitude: 117.2730714083,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B29', pic: "../image/Home.jpg", text: '研究生楼', latitude: 39.0550052325,
          longitude: 117.2734093666,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B30', pic: "../image/Home.jpg", text: '十号楼', latitude: 39.0546094906,
          longitude: 117.2735434771,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B31', pic: "../image/Home.jpg", text: '十一号楼', latitude: 39.0539221441,
          longitude: 117.2736239433,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B32', pic: "../image/Home.jpg", text: '十二号楼', latitude: 39.0537430163,
          longitude: 117.2742354870,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B33', pic: "../image/Home.jpg", text: '十三号楼', latitude: 39.0533014436,
          longitude: 117.2752547264,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B34', pic: "../image/Home.jpg", text: '十四号楼', latitude: 39.0531764697,
          longitude: 117.2742408514,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        }, {
          id: 'B35', pic: "../image/Home.jpg", text: '十五号楼', latitude: 39.0550552208,
          longitude: 117.2764831781,content: '大学四年的温馨小窝,相信经过你精心的装饰,这里会成为你的另一个家'
        },
      ]
    });
  },
  rest:function(){
      this.setData({
        welcome: '#DCDCDC',
        car: '#DCDCDC',
        other: '#DCDCDC',
        stduyBuild: '#DCDCDC',
        Door: '#DCDCDC',
        View: '#DCDCDC',
        libiary: '#DCDCDC',
        culture: '#DCDCDC',
        Home: '#DCDCDC',
        gym: '#DCDCDC',
        rest: '#FFFFFF',
        super: '#DCDCDC',
        longitude: 117.2778725624,
        latitude: 39.0599164137,
        scale: 17,
        markers:[{
          iconPath: "/resouse/icon/res.png",
          id: 50,
          title: "A座食堂",
          latitude: 39.0630737187, 
          longitude: 117.2807908058,
          width: 32,
          height: 64
        }, {
            iconPath: "/resouse/icon/res.png",
            id: 51,
            title: "东院食堂",
            latitude: 39.0619407706, 
            longitude: 117.2777438164,
            width: 32,
            height: 64
          }, {
            iconPath: "/resouse/icon/res.png",
            id: 52,
            title: "心园餐厅",
            latitude: 39.0623198104, 
            longitude: 117.2766816616,
            width: 32,
            height: 64
          }, {
            iconPath: "/resouse/icon/res.png",
            id: 53,
            title: "西院食堂",
            latitude: 39.0623572977, 
            longitude: 117.2718000412,
            width: 32,
            height: 64
          }, {
            iconPath: "/resouse/icon/res.png",
            id: 54,
            title: "西院回民餐厅",
            latitude: 39.0623448020, 
            longitude: 117.2714674473,
            width: 32,
            height: 64
          }, {
            iconPath: "/resouse/icon/res.png",
            id: 55,
            title: "干训餐厅",
            latitude: 39.0629612577, 
            longitude: 117.2709685564,
            width: 32,
            height: 64
          }, {
            iconPath: "/resouse/icon/res.png",
            id: 56,
            title: "z座食堂",
            latitude: 39.0617200102, 
            longitude: 117.2748094797,
            width: 32,
            height: 64
          }, {
            iconPath: "/resouse/icon/res.png",
            id: 57,
            title: "公寓食堂",
            latitude: 39.0553259901, 
            longitude: 117.2750240564,
            width: 32,
            height: 64
          }, {
            iconPath: "/resouse/icon/res.png",
            id: 58,
            title: "公寓回民餐厅",
            latitude: 39.0554384633, 
            longitude: 117.2748738527,
            width: 32,
            height: 64
          }],
        currentList: [{
          id: 'B50', pic: "../image/A.jpg", text: 'A座食堂', latitude: 39.0630737187, longitude: 117.2807908058, content: 'A座餐厅可点餐，可自助，平常来聚会需要提前预约位置，这里也是老师经常光顾的地方。',
        },
          {id: 'B51', pic: "../image/DYR.jpg", text: '东院食堂', latitude: 39.0619407706,longitude: 117.2777438164, content: '东院学生餐厅位于二教对面，平时客流量很大。' },
        {
          id: 'B52', pic: "../image/XYR.jpg", text: '心园餐厅', latitude: 39.0623198104, longitude: 117.2766816616, content: '心园餐厅位于东院学生餐厅的西边留学生宿舍旁边，适合聚会。是一所“饭店点菜式”餐厅，平常来往留学生比较多。'
          }, {
          id: 'B53', pic: "../image/XYC.jpg", text: '西院食堂', latitude: 39.0623572977, longitude: 117.2718000412, content: '西院学生餐厅靠近研究生住宿，价格较低，菜量较大，满足你“大胃王”的需求。'
          }, {id: 'B54', pic: "../image/XYC.jpg", text: '西院回民餐厅', latitude: 39.0623448020,longitude: 117.2714674473, content: '西院回民餐厅位于西院食堂右侧'
          }, {
          id: 'B55', pic: "../image/GANXUN.jpg", text: '干训餐厅', latitude: 39.0629612577, longitude: 117.2709685564, content: '干训食堂位置在研究生宿舍区，较为隐蔽，价格实惠味道也很鲜美，是聚会的不二之选。。'
          }, {
          id: 'B56', pic: "../image/ZC.jpg", text: 'z座食堂', latitude: 39.0617200102, longitude: 117.2748094797, content: 'Z座餐厅早餐种类丰富多样，满足你吃货且养生的胃口，一顿早饭仅消费几块钱就可大饱一顿。'
          }, {
          id: 'B57', pic: "../image/GYC.jpg", text: '公寓食堂', latitude: 39.0553259901,longitude: 117.2750240564, content: '公寓餐厅不仅菜品样式丰富多样，而且还是社团、私人聚会，考试周复习的好去处。'
          }, {
          id: 'B58', pic: "../image/GYC.jpg", text: '公寓回民餐厅', latitude: 39.0554384633, longitude: 117.2748738527, content: '回民餐厅位于公寓餐厅的左侧，以特色的民族菜吸引学生。'
          }
        ]
      });
  },
  super:function(){
    this.setData({
      welcome: '#DCDCDC',
      car: '#DCDCDC',
      other: '#DCDCDC',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#DCDCDC',
      libiary: '#DCDCDC',
      culture: '#DCDCDC',
      Home: '#DCDCDC',
      gym: '#DCDCDC',
      rest: '#DCDCDC',
      super: '#FFFFFF',
      longitude: 117.2752547264 ,
      latitude: 39.0589333717, 
      scale: 17,
      markers:[{
        iconPath: "/resouse/icon/super.png",
        id: 59,
        title: "东院超市",
        latitude: 39.0618158120,
        longitude: 117.2780603170,
        width: 32,
        height: 64
      }, {
          iconPath: "/resouse/icon/super.png",
          id: 60,
          title: "西院超市",
          latitude: 39.0623781240, 
          longitude: 117.2722131014,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/super.png",
          id: 61,
          title: "公寓食堂超市",
          latitude: 39.0553343215, 
          longitude: 117.2750616074,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/super.png",
          id: 62,
          title: "物美超市",
          latitude: 39.0552551737, 
          longitude: 117.2746431828,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/super.png",
          id: 63,
          title: "财大超市",
          latitude: 39.0537721767, 
          longitude: 117.2749221325,
          width: 32,
          height: 64
        }], currentList: [{
        id: 'B59', pic: "../image/CHCUN.jpg", text: '东院超市', latitude: 39.0618158120,
        longitude: 117.2780603170, content: '东苑和西苑的超市里面食品种类齐全，夏日还会有冷饮，水果。',
        },
        {
          id: 'B60', pic: "../image/CHCUN.jpg", text: '西院超市', latitude: 39.0623781240,
          longitude: 117.2722131014,content: '东苑和西苑的超市里面食品种类齐全，夏日还会有冷饮，水果。' },
        {
          id: 'B61', pic: "../image/CHCUN.jpg", text: '公寓食堂超市', latitude: 39.0553343215,
          longitude: 117.2750616074, content: '公寓食堂一层和二层均配备超市，内有饮料食物，生活用品，学习用品等。'
        }, {
          id: 'B62', pic: "../image/CHCUN.jpg", text: '物美超市', latitude: 39.0552551737,
          longitude: 117.2746431828, content: '物美超市内部有小的面点窗口，买来当早餐也是不错的选择。'
        }, {
          id: 'B63', pic: "../image/CHCUN.jpg", text: '"财大超市', latitude: 39.0537721767,
          longitude: 117.2749221325, content: '财大超市是公寓区最大的超市，里面还有西装小店，眼镜店等店面，物品一应俱全。'
        },
        ]
    });
  },
  culture:function(){
    this.setData({
      welcome: '#DCDCDC',
      car: '#DCDCDC',
      other: '#DCDCDC',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#DCDCDC',
      libiary: '#DCDCDC',
      culture: '#FFFFFF',
      Home: '#DCDCDC',
      gym: '#DCDCDC',
      rest: '#DCDCDC',
      super: '#DCDCDC',
      longitude: 117.2802972794,
      latitude: 39.0618324731, 
      scale: 18,
      markers:[{
        iconPath: "/resouse/icon/culture.png",
        id: 65,
        title: "月牙报告厅",
        latitude: 39.0633153008, 
        longitude: 117.2797983885,
        width: 32,
        height: 64
      },{
          iconPath: "/resouse/icon/culture.png",
          id: 66,
          title: "G座报告厅",
          latitude: 39.0601246835, 
          longitude: 117.2812092304,
          width: 32,
          height: 64
        }],
      currentList: [{
        id: 'B65', pic: "../image/yey.jpg", text: '月牙报告厅', latitude: 39.0633153008, longitude: 117.2797983885, content: '月牙报告厅在逸夫图书馆旁。 月牙和G座有高大上的报告厅，是举办晚会、表彰会、大型讲座和座谈会等重要活动的首选圣地',},
        { id: 'B66', pic: "../image/G.jpg", text: 'G座报告厅', latitude: 39.0601246835, longitude: 117.2812092304, content: '月牙报告厅在逸夫图书馆旁。 月牙和G座有高大上的报告厅，是举办晚会、表彰会、大型讲座和座谈会等重要活动的首选圣地', },
      ]
    });
  },
  close:function(){
    if(close){
      this.setData({
          map:'90%',
          low:'0%',
        v: '../image/retract.png',
      })
    close=false;
    }
    else {
      this.setData({
        map: '45%',
        low: '45%',
          v: '../image/spread.png',
      })
      close = true;
    }
  },
  car:function(){
    this.setData({
      welcome: '#DCDCDC',
      car: '#FFFFFF',
      other: '#DCDCDC',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#DCDCDC',
      libiary: '#DCDCDC',
      culture: '#DCDCDC',
      Home: '#DCDCDC',
      gym: '#DCDCDC',
      rest: '#DCDCDC',
      super: '#DCDCDC',
      longitude: 117.2804903984,
      latitude: 39.0618991177, 
      scale: 18,
      markers:[{
        iconPath: "/resouse/icon/car.png",
        id: 69,
        title: "财大停车场",
        latitude: 39.0609952449, 
        longitude: 117.2822982073,
        width: 32,
        height: 64
      },{
          iconPath: "/resouse/icon/car.png",
          id: 70,
          title: "迎新临时停靠处",
          latitude: 39.0628321357, 
          longitude: 117.2794497013,
          width: 32,
          height: 64
      }]
    })
  },
  other:function(){
    this.setData({
      welcome: '#DCDCDC',
      car: '#DCDCDC',
      other: '#FFFFFF',
      stduyBuild: '#DCDCDC',
      Door: '#DCDCDC',
      View: '#DCDCDC',
      libiary: '#DCDCDC',
      culture: '#DCDCDC',
      Home: '#DCDCDC',
      gym: '#DCDCDC',
      rest: '#DCDCDC',
      super: '#DCDCDC',
      longitude: 117.2783768177,
      latitude: 39.0624739249, 
      scale: 16,
      markers:[{
        iconPath: "/resouse/icon/other1.png",
        id: 71,
        title: "财大医务室",
        latitude: 39.0627946486, 
        longitude: 117.2754961252,
        width: 32,
        height: 64
      }, {
          iconPath: "/resouse/icon/super.png",
          id: 72,
          title: "大润发购物广场",
          latitude: 39.0681967496, 
          longitude: 117.2808122635,
          width: 32,
          height: 64
        }, {
          iconPath: "/resouse/icon/super.png",
          id: 73,
          title: "人人乐购物广场",
          latitude: 39.0543428842, 
          longitude: 117.2687637806,
          width: 32,
          height: 64
        }],
      currentList: [{
        id: 'B100', pic: "../image/JKfactory.jpg", text: '神秘', latitude: 39.0545386734, longitude: 117.2745680809, content: '感谢大家使用我们的产品，这里是官方--Mirror科技。作为工作室的第一款产品，会有许多不足的地方，或是UI不够新潮，或是文稿不够细腻，或是使用体验不够好。但是我们会继续完善它，如果您对我们的产品感兴趣,欢迎搜索微信号"jkfactory"--Mirror科技，关注我们，官网:"www.mirrorer.top/Mirrorclub"。获取更多资讯。鸣谢：  文稿【杜俊】，UI【黄本子老师】【冯义城】，程序【李健】【冯义城】。',
      }
      ]
    })
  },
  Daohang:function(e){
    wx.openLocation({
      latitude: Number(e.latitude),
      longitude: Number(e.longitude),

      scale: 28
    })
  },
  onShareAppMessage: function () {

    return {

      title: '天财校园导览',

      path: 'pages/index/index'

    }
  },
})

function build(that) {
  
  that.setData({
    welcome: '#DCDCDC',
    car: '#DCDCDC',
    other: '#DCDCDC',
    stduyBuild: '#FFFFFF',
    Door: '#DCDCDC',
    View: '#DCDCDC',
    libiary: '#DCDCDC',
    culture: '#DCDCDC',
    Home: '#DCDCDC',
    gym: '#DCDCDC',
    rest: '#DCDCDC',
    super: '#DCDCDC',
    longitude: 117.2793316841,
    latitude: 39.0614492654, 
    scale: 18,
    markers: [{
      iconPath: "/resouse/icon/stduyBulid1.png",
      id: 1,
      title: "A座",
      latitude: 39.0631736838,
      longitude: 117.2803616524,
      width: 32,
      height: 64
    }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
      id: 2,
      title: "B座",
      latitude: 39.0624697596,
      longitude: 117.2808122635,
      width: 32,
        height: 64
    }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
      id: 3,
      title: "C座",
      latitude: 39.0620282415,
      longitude: 117.2810053825,
      width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 4,
        title: "D座",
        latitude: 39.0615325716, 
        longitude: 117.2810268402,
        width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 5,
        title: "E座",
        latitude: 39.0610743863, 
        longitude: 117.2811126709,
        width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 6,
        title: "F座",
        latitude: 39.0605828750, 
        longitude: 117.2811180353,
        width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 7,
        title: "H座",
        latitude: 39.0601121873, 
        longitude: 117.2794711590,
        width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 8,
        title: "I座",
        latitude: 39.0596123386, 
        longitude: 117.2795087099,
        width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 9,
        title: "J座",
        latitude: 39.0592332842, 
        longitude: 117.2794926167,
        width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 10,
        title: "K座",
        latitude: 39.0608869459, 
        longitude: 117.2779852152,
        width: 32,
        height: 64
      }, {
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 11,
        title: "L座",
        latitude: 39.0603995988,
        longitude: 117.2780817747,
        width: 32,
        height: 64
      } ,{
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 12,
        title: "M座",
        latitude: 39.0598039477, 
        longitude: 117.2782373428,
        width: 32,
        height: 64
      },{
        iconPath: "/resouse/icon/stduyBulid1.png",
        id: 64,
        title: "第2教学楼",
        latitude: 39.0631403621, 
        longitude: 117.2778242826,
        width: 32,
        height: 64
      }],
    currentList: [{
      id: 'B1', pic: "../image/BA.jpg", text: 'A座', latitude: 39.0631736838, longitude: 117.2803616524, content:'A-B座一楼有自助餐厅，计算机类课程大部分在二层授课，三楼还有配备齐全的健身房和游泳池。'},
      { id: 'B2', pic: "../image/BA.jpg", text: 'B座', latitude: 39.0624697596, longitude: 117.2808122635, content:'A-B座一楼有自助餐厅，计算机类课程大部分在二层授课，三楼还有配备齐全的健身房和游泳池。'},
      { id: 'B3', pic: "../image/CDEF.jpg", text: 'C座', latitude: 39.0620282415, longitude: 117.2810053825, content:' C、D、E、F座内置上课或自习教室，一楼配备有自助售货机。'},
      { id: 'B4', pic: "../image/CDEF.jpg", text: 'D座', latitude: 39.0615325716, longitude: 117.2810268402, content: ' C、D、E、F座内置上课或自习教室，一楼配备有自助售货机。' },
      { id: 'B5', pic: "../image/CDEF.jpg", text: 'E座', latitude: 39.0610743863, longitude: 117.2811126709, content: ' C、D、E、F座内置上课或自习教室，一楼配备有自助售货机。'},
      { id: 'B6', pic: "../image/CDEF.jpg", text: 'F座', latitude: 39.0605828750, longitude: 117.2811180353, content: ' C、D、E、F座内置上课或自习教室，一楼配备有自助售货机。'},
      { id: 'B7', pic: "../image/HIJ.jpg", text: 'H座', latitude: 39.0601121873, longitude: 117.2794711590, content:' H-I座靠近统计湖，里面有宽敞安静的阅览自习室，同时内部也会开放许多教室供大家自习、举办班级活动。'},
      { id: 'B8', pic: "../image/HIJ.jpg", text: 'I座', latitude: 39.0596123386, longitude: 117.2795087099, content: ' H-I座靠近统计湖，里面有宽敞安静的阅览自习室，同时内部也会开放许多教室供大家自习、举办班级活动。'},
      { id: 'B9', pic: "../image/HIJ.jpg", text: 'J座', latitude: 39.0592332842, longitude: 117.2794926167, content: ' H-I座靠近统计湖，里面有宽敞安静的阅览自习室，同时内部也会开放许多教室供大家自习、举办班级活动。'},
      { id: 'B10', pic: "../image/KL.jpg", text: 'K座', latitude: 39.0608869459, longitude: 117.2779852152, content: ' 校卡补办处位于K座一楼。综合性艺术展厅位于K - L座之间，平时艺术活动展览都在于此弥漫着浓厚的艺术气息。' },
      { id: 'B11', pic: "../image/KL.jpg", text: 'L座', latitude: 39.0603995988, longitude: 117.2780817747, content: ' 校卡补办处位于K座一楼。综合性艺术展厅位于K - L座之间，平时艺术活动展览都在于此弥漫着浓厚的艺术气息。'},
      {
        id: 'B12', pic: "../image/M.jpg", text: 'M座', latitude: 39.0598039477, longitude: 117.2782373428, content: '几乎全部由阶梯大教室组成，建筑设计感强烈，环境舒适，氛围典雅，是众多教学楼中最靠近学生公寓的一座。坐落其背后的是大面积生态园区，超大绿化，满眼绿意，推窗见景，享受悠悠宁静情怀。M座时常播放交响乐曲，据悉是某知名大牌国际交响乐团前来为同学们演奏的，目的是让M座时刻保持与国际化接轨！气度不凡，大家风范！坐拥旺地，升值在旺！' },
      { id: 'B64', pic: "../image/2JAO.jpg", text: '第二教学楼', latitude: 39.0631403621, longitude: 117.2778242826, content: '二教,历史悠久，内部多为机房实验室、老师办公室。' }
    ]
  })
}
