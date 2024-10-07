const conversationLastTime = {};

app.post("/api/send-message", (req, res) => {
  const { conversation_id, content, sender } = req.body;
  const send_time = new Date().toISOString().slice(0, 19).replace("T", " ");

  const query = `
        INSERT INTO messages (conversation_id, content, sender, send_time)
        VALUES ($1, $2, $3, $4)
    `;
  const values = [conversation_id, content, sender, send_time];

  pool.query(query, values, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`Message added with ID: ${results.insertId}`);
  });

  conversationLastTime[conversation_id] = send_time;
  return res.json({ send_time });
});

app.get("/api/messages", (req, res) => {
  const { conversation_id } = req.query;

  pool.query("SELECT * FROM messages WHERE conversation_id = $1", [conversation_id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.get("/api/conversation-last-time", (req, res) => {
  const { conversation_id } = req.query;

  if (!conversationLastTime[conversation_id]) {
    // query database
    pool.query(
      "SELECT send_time FROM messages WHERE conversation_id = $1 ORDER BY send_time DESC LIMIT 1",
      [conversation_id],
      (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rows.length > 0) {
          conversationLastTime[conversation_id] = results.rows[0].send_time;
        }
      }
    );
  }

  return res.json({ lastTime: conversationLastTime[conversation_id] });
});
