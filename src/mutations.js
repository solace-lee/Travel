export default {
  changeCity (state, city) {
    state.cities = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
