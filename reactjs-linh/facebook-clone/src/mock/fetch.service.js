import envConfig from '../config/env.config';

const list = [
    {id: 1, name:"Pham Tuan Linh", type:"user", notification:"1 new messenger", img:"assets/anh1.png"},
    {id: 2, name:"Hoi ca canh", type:"group", notification:"2 new messenger",img:"assets/anh1.png"},
    {id: 3, name:"Hoang Duoc Su", type:"user", notification:"",img:"assets/anh1.png"},
    {id: 4, name:"Âu Dương Phong", type:"user", notification:"10 new messenger",img:"assets/anh1.png"},
    {id: 5, name:"Hội suger Baby", type:"group", notification:"10 new messenger",img:"assets/anh1.png"},
]

const users = []

export function _fetch(url) {
    const isLocal = envConfig.env === 'local'
    if(isLocal) {
        function mockData(data) {
            return new Promise((resolve) => {
                resolve(data)
            })
        }
        switch (url) {
            case 'list-suggest':
                return mockData(list)
            case 'list-user':
                return mockData(users)
            default:
                return new Promise((_, reject) => {reject('Please give me a url')})
        }
    } else {
        const prefixApi = envConfig.prefixApi
        return fetch(prefixApi + url)
    }
}
