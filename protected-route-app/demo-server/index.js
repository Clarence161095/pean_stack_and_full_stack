const express = require("express");
const app = express();
const port = 4567;

let saveIpLogged = {
  "61_23_152_214_chrome_localhost_5173_cognito": "this is a token",
  "61_23_152_214_chrome_localhost_5173_incognito": null,
  "61_23_152_113_chrome_localhost_5173_cognito": null,
};

app.use(express.json());

app.post("/login/:ip", async (req, res) => {
  await logic2(req, res);
  await logic1(req, res);
});

const logic1 = async (req, res) => {
  const { ip } = req.params;
  if (saveIpLogged[ip]) {
    return res.status(200).send("You are already logged in");
  }
  // Do lot of things to authenticate user
  // 100 steps
  // await 200ms
  await new Promise((resolve) => setTimeout(resolve, 200));
  return res.status(200).send("You are logged in");
};

const logic2 = async (req, res) => {
  console.log("send message to queue", Math.random());
};

app.get("/check/:ip", async (req, res) => {
  const { ip } = req.params;

  if (saveIpLogged[ip]) {
    res.status(200).send("You are logged in");
  } else {
    res.status(401).send("You are not logged in");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
