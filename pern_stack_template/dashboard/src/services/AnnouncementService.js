export async function getAnnouncement() {
  const response = await fetch('http://localhost:5674/announcements');
  return await response.json();
}

// eslint-disable-next-line no-unused-vars
export async function createAnnouncement(announcement) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Du lieu da ton tai'));
    }, 1000);
  });
  // const response = await fetch('http://localhost:5674/announcements', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(announcement),
  // });
  // return await response.json();
}
