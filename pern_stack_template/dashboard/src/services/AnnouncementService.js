export async function getAnnouncement() {
  const response = await fetch('http://localhost:5674/announcements');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await response.json();
}

export async function createAnnouncement(announcement) {
  const response = await fetch('http://localhost:5674/announcements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(announcement),
  });
  return await response.json();
}
