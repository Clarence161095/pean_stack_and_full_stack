export async function getGraph() {
  const response = await fetch('http://localhost:5674/graphs');
  // wait 3s
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return await response.json();
}

export async function postGraph(graph) {
  const response = await fetch('http://localhost:5674/graphs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(graph)
  });

  const lastUpdated = new Date().toISOString() + Math.random() * 1000000;
  localStorage.setItem('lastUpdated', lastUpdated);

  await putLastUpdated(lastUpdated)
  return await response.json();
}

export async function getLastUpdated() {
  const response = await fetch('http://localhost:5674/isAnnouncementUpdated/1');
  return await response.json();
}

export async function putLastUpdated(lastUpdated) {
  const response = await fetch('http://localhost:5674/isAnnouncementUpdated/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lastUpdated": lastUpdated
    })
  });
  return await response.json();
}