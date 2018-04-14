
// pages/index/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: 0,
    windowHeight: 0,
    listData: [
      { "date": "2017年11月13号15h", "price": "0.7元" },
      { "date": "2017年11月13号12h", "price": "0.5元" },
      { "date": "2017年11月13号9h", "price": "0.6元" },
      { "date": "2017年11月13号6h", "price": "0.6元" },
      { "date": "2017年11月13号3h", "price": "0.8元" },
      { "date": "2017年11月13号0h", "price": "0.6元" },
      { "date": "2017年11月12号21h", "price": "0.6元" },
      { "date": "2017年11月12号18h", "price": "0.4元" },
      { "date": "2017年11月12号15h", "price": "0.9元" },
      { "date": "2017年11月12号12h", "price": "0.6元" },
      { "date": "2017年11月12号9h", "price": "0.7元" },
      { "date": "2017年11月12号6h", "price": "0.5元" },
      { "date": "2017年11月12号3h", "price": "0.6元" },
      { "date": "2017年11月11号24h", "price": "0.7元" },
      { "date": "2017年11月11号21h", "price": "0.6元" },
      { "date": "2017年11月11号18h", "price": "0.5元" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var win_width = res.windowWidth;
        var win_height = res.windowHeight;
        that.setData({
          windowWidth: win_width,
          windowHeight: win_height,
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