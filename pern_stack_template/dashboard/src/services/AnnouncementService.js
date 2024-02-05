export async function getAnnouncement() {
  const response = await fetch('http://localhost:5674/announcements');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await response.json();
}

export async function createAnnouncement(announcement) {
  // wait 2 second throw mock error with message: 'Mock error: Dữ liệu đã tồn tại!'
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject(new Error('Mock error: Dữ liệu đã tồn tại!'));
  //   }, 3000);
  // });

  const response = await fetch('http://localhost:5674/announcements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(announcement),
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await response.json();
}
