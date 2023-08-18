const store = {
  users: [
    {
      key: 'Tuan123'
    },
    {
      key: 'Linh'
    },
  ],
  info: {
    detail: {
      originDetail: {
        value: 'Ty',
        age: 25
      },
      value: 'Tuan',
      age: 25
    }
  },
  getInfo: function () {
    return "This is the info: " + JSON.stringify(this.info.detail)
  }
}

function builderStore(store) {
  return {
    ...store,
    getInfo: function () {
      return "This is the info: " + JSON.stringify(this.info.detail)
    }
  }
}

class Store {
  // attribute
  constructor(store) {
    this.info = store.info
  }

  getInfo() {
    return "This is the info: " + JSON.stringify(this.info.detail)
  }
}

function main() {
  console.log(JSON.stringify(store))
  const cloneStore1 = JSON.parse(JSON.stringify(store));
  const deepCloneStore1 = builderStore(JSON.parse(JSON.stringify(store)))
  const deepCloneStore2 = new Store(JSON.parse(JSON.stringify(store)))
  console.log('deepCloneStore2', deepCloneStore2.getInfo())
}
main()
