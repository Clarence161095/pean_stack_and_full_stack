const readline = require('readline');

const app = {
  core: async () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    async function continuousInput() {
      while (true) {
        const input = await new Promise((resolve) => {
          rl.question('Input a CURL: ', resolve);
        });
        function use(...prompt) {
          const [route = '/', // TODO middleware here
            callBack = (req, res) => { }] = prompt;
          const req = { originUrl: route }
          req.param = route.split('/')[1]
          const res = {}
          res.send = (content) => {
            console.log(`<html><body><div>${content.name}</div ></body ></html>`)
          }
          callBack(req, res)
        }
        const [method = 'GET', route = '', body = {}] = input.split(' ');
        switch (method) {
          case 'GET': // Check API corresponding Controller
            use(route, (req, res) => {
              console.log('req', res);
              // TODO... Call Controller -> DAL -> SQL... MVC
              const mockData = {
                name: 'This is name of id ' + req.param
              }
              res.send(mockData)
            })
            break;
          case 'POST':
            break;
          default:
            break;
        }
      }
    }
    await continuousInput();
  },
  db: {
    sinhVien: [
      { name: 'tuan' }, { name: 'linh' }
    ]
  },
  async main() {
    console.log('Start and listening on keyboard...');
    await this.core();
    console.log('The app is ended!');
    return this;
  },
}.main();
