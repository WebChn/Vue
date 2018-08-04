export default {
  changeCity (state, city) { // 第一个参数 值公共数据state
    state.city = city
    try {
      localStorage.city = city // 实现用户选择城市后 再次刷新界面 依旧是用户选的那个城市
    } catch (e) {}
  }
}
