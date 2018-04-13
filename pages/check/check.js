// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      { "date": "2018年4月13号", "generation": "12kW·h" },
      { "date": "2018年4月12号", "generation": "13kW·h" },
      { "date": "2018年4月11号", "generation": "11kW·h" },
      { "date": "2018年4月10号", "generation": "10kW·h" },
      { "date": "2018年4月9号", "generation": "14kW·h" },
      { "date": "2018年4月8号", "generation": "12kW·h" },
      { "date": "2018年4月7号", "generation": "11kW·h" },
      { "date": "2018年4月6号", "generation": "10kW·h" },
      { "date": "2018年4月5号", "generation": "14kW·h" },
      { "date": "2018年4月4号", "generation": "13kW·h" },
      { "date": "2018年4月3号", "generation": "11kW·h" },
      { "date": "2018年4月2号", "generation": "12kW·h" },
      { "date": "2018年4月1号", "generation": "13kW·h" },
      { "date": "2018年3月31号", "generation": "12kW·h" },
      { "date": "2018年3月30号", "generation": "11kW·h" },
      { "date": "2018年3月29号", "generation": "14kW·h" },
      { "date": "2018年3月28号", "generation": "10kW·h" },
      { "date": "2018年3月27号", "generation": "9kW·h" },
      { "date": "2018年3月26号", "generation": "15kW·h" },
      { "date": "2018年3月25号", "generation": "10kW·h" },
      { "date": "2018年3月24号", "generation": "15kW·h" },
      { "date": "2018年3月23号", "generation": "12kW·h" },
      { "date": "2018年3月22号", "generation": "14kW·h" },
      { "date": "2018年3月21号", "generation": "13kW·h" },
      { "date": "2018年3月20号", "generation": "12kW·h" },
      { "date": "2018年3月19号", "generation": "11kW·h" },
      { "date": "2018年3月18号", "generation": "14kW·h" },
      { "date": "2018年3月17号", "generation": "13kW·h" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        
        that.setData({
         
        })
        
      }
    })
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})