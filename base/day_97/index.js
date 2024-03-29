// ---------------- Behind the scene ----------------
const mockMapURL = {
  'getUser/123': 'userNameOf123',
  'getDepartment/userNameOf123': 'departmentOf123',
  'getDepartmentInfo/departmentOf123': 'departmentInfoOf123'
}

function myFetch (url, callback) {
  setTimeout(() => {
    callback(mockMapURL[url])
  }, 1000)
}

// ---------------- Your code ----------------

myFetch('getUser/123', userName => {
  console.log(userName)
  myFetch(`getDepartment/${userName}`, department => {
    console.log(department)
    myFetch(`getDepartmentInfo/${department}`, departmentInfo => {
      console.log(departmentInfo)
    })
  })
})

fetch('getUser/123')
  .then(userName => {
    console.log(userName)
    return fetch(`getDepartment/${userName}`)
  })
  .then(department => {
    console.log(department)
    return fetch(`getDepartmentInfo/${department}`)
  })
  .then(departmentInfo => {
    console.log(departmentInfo)
  })

// fetch('getUser/123').then(userName => {
//   console.log(userName)
//   fetch(`getDepartment/${userName}`).then(department => {
//     console.log(department)
//     fetch(`getDepartmentInfo/${department}`).then(departmentInfo => {
//       console.log(departmentInfo)
//     })
//   })
// })

// ---------------- Your code ----------------

// function name(params) {
//   return {
//     name: 'name',
//     age: 20,
//     then: function() {
//       console.log('then');
//       return this;
//     },
//     catch: function() {
//       console.log('catch');
//       return this;
//     }
//   }
// }

// const nameObj = name();
// nameObj.name
// nameObj.then()

// name().name
// name().then()
