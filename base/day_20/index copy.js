import envConfig from './envConfig.js';

const mode = {
  cronJob: 'cron-job',
  cron: 'cron',
  upload: 'upload-image'
}

const server = () => {
  if(envConfig.mode === mode.cronJob) {
    console.log('Thực hiện logic cronjob');
  } else if(envConfig.mode === mode.cron) {
    console.log('Thực hiện logic cron');
  } else {
    if (envConfig.mode === mode.upload) {
      console.log('Thực hiện logic upload');

      // call API ...
    }
  }
}

server()

// UPFILE_FOR_USER_08008080_20230925215355_12312312314
// Lambda send message 

// cron_SQS

// upload_SQS
// profile_SQS

// {
//   location: UPFILE_FOR_USER_08008080_20230925215355_12312312314
// }
