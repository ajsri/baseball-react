class fetchStatus {
  constructor() {
    this.status = 'active';
    this.active = true
  }

  copy() {
    return Object.assign({}, this)
  }

  success() {
    return Object.assign({}, this, {
      status: 'success',
      active: false
    })
  }

  error(message) {
    return Object.assign({}, this, {
      status: 'error',
      active: false,
      message
    })
  }
}

export default fetchStatus