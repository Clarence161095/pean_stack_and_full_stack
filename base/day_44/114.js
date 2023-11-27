let config = {
    alert: setInterval(() => {
      console.log('Alert!')
    }, 1000)
  }
  clearInterval(config.alert);
  config = null; //việc set config = null chỉ làm thay đổi địa chỉ của config chứ ko clear interval đã set ban đầu 
// -> đáp án C 
