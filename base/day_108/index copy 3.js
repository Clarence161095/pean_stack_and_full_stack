const listCompanies = [
  {
    name: 'Facebook Inc.',
    getName: (c) => c.name
  },
  {
    title: 'Apple Inc.',
    getName: (c) => c.title
  },
  {
    tenant: 'Google LLC',
    getName: (c) => c.tenant
  }
]

// --------------------------------------------
function getNameOfCompany (company) {
  return company.getName(company)
}

listCompanies.forEach(company => {
  console.log(getNameOfCompany(company))
})