const observer = {
  subscribes: [],
  subscribe: function (fn) {
    this.subscribes.push(fn)
  },
  unsubscribe: function (fn) {
    this.subscribes = this.subscribes.filter(subscribe => subscribe !== fn)
  },
  notify: function (data) {
    this.subscribes.forEach(subscribe => subscribe(data))
  }
}

