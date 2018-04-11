//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: '.',
    userInfo: {},
    hasUserInfo: false,
    windowWidth: 0,
    windowHeight: 0,
    progress_txt: '50%', 
    per: 0.5,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //大圆 https://www.cnblogs.com/mingforyou/p/4476183.html
  //https://segmentfault.com/a/1190000013219501
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(4);// 设置圆环的宽度
    ctx.setStrokeStyle('#F4F5F8'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath();//开始一个新的路径
    ctx.arc(90, 75, 70, 0.9 * Math.PI, 2.1 * Math.PI, false);
    //设置一个原点(90,105)，半径为70的圆的路径到当前路径
    ctx.stroke();//对当前路径进行描边
    ctx.draw();
  },
  //绘制进度
  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "deepskyblue");
    gradient.addColorStop("0.5", "deepskyblue");
    gradient.addColorStop("1.0", "deepskyblue");
    context.setLineWidth(8);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0.9到2.1为一周 。 -Math.PI / 1.2 将起始角设在0.9点钟位置 ，结束角通过改变 step 的值确定
    context.arc(90, 75, 70, 0.9 * Math.PI, step * Math.PI / 1.2 - 0.9 * Math.PI, false);
    context.stroke();
    context.draw()
  },
  //确定进度，并调用drawCircle绘制进度
  change_Circle: function(){
    this.drawCircle(0.5);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var win_width = res.windowWidth;
        var win_height = res.windowHeight;
        that.setData({
          windowWidth: win_width,
          windowHeight: win_height+100,
        })
        //console.log(res.windowWidth)  
        //console.log(res.windowHeight) 
      }
    })   
  },

  onReady: function () {
    this.drawProgressbg();
    //this.drawCircle(2);
    this.change_Circle();
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
