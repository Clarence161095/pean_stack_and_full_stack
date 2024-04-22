const facebook = {
  name: 'Facebook Inc.',
  address: {
    street: '1 Hacker Way',
    city: 'Menlo Park',
    state: 'CA',
    zip: '94025'
  }
}

const apple = {
  title: 'Apple Inc.',
  info: {
    address: {
      street: '1 Infinite Loop',
      city: 'Cupertino',
      state: 'CA',
      zip: '95014'
    }
  }
}

function getNameOfCompany (company) {
  if (company.name) return company.name
  if (company.title) return company.title
  return company.name
}

console.log(getNameOfCompany(facebook)) // Facebook Inc.
console.log(getNameOfCompany(apple)) // Apple Inc.
