class Company {
  constructor () {}
  getName () {}
}

class Facebook extends Company {
  constructor (name) {
    super()
    this.name = name
  }
  getName () {
    return this.name
  }
}

class Apple extends Company {
  constructor (title) {
    super()
    this.title = title
  }
  getName () {
    return this.title
  }
}

class Google extends Company {
  constructor (tenant) {
    super()
    this.tenant = tenant
  }
  getName () {
    return this.tenant
  }
}

const listCompanies = [
  new Facebook('Facebook Inc.'),
  new Apple('Apple Inc.'),
  new Google('Google LLC')
]

// --------------------------------------------
function getNameOfCompany (company) {
  return company.getName(company)
}

listCompanies.forEach(company => {
  console.log(getNameOfCompany(company))
})