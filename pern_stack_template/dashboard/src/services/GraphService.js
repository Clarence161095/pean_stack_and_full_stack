

export async function getGraph() {
  const response = await fetch('http://localhost:5674/graphs');
  // wait 3s
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
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
  return await response.json();
}
