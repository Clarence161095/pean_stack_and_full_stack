import express from 'express';
import router from './routes/routes';

const app = express();
app.use(express.json());

app.get('', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ message: 'Server is running' });
});

app.use('/api', router);

// // GET - Lấy tất cả items
// app.get('/api/items', async (_req: Request, res: Response<ApiResponse<Item[]>>) => {
//   const client = await connectDB();
//   try {
//     const { rows } = await client.sql<Item>`
//       SELECT * FROM items ORDER BY created_at DESC
//     `;
//     res.json({ data: rows });
//   } catch (error) {
//     res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
//   } finally {
//     await disconnectDB(client);
//   }
// });

// // GET - Lấy item theo id
// app.get('/api/items/:id', async (req: Request<{ id: string }>, res: any) => {
//   const client = await connectDB();
//   try {
//     const { rows } = await client.sql<Item>`
//       SELECT * FROM items WHERE id = ${parseInt(req.params.id)}
//     `;
//     if (rows.length === 0) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json({ data: rows[0] });
//   } catch (error) {
//     res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
//   } finally {
//     await disconnectDB(client);
//   }
// });

// // POST - Tạo item mới
// app.post(
//   '/api/items',
//   async (req: Request<{}, {}, CreateItemDTO>, res: Response<ApiResponse<Item>>) => {
//     const { name, description } = req.body;
//     const client = await connectDB();
//     try {
//       const { rows } = await client.sql<Item>`
//       INSERT INTO items (name, description)
//       VALUES (${name}, ${description || null})
//       RETURNING *
//     `;
//       res.status(201).json({ data: rows[0] });
//     } catch (error) {
//       res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
//     } finally {
//       await disconnectDB(client);
//     }
//   },
// );

// // PUT - Cập nhật item
// app.put('/api/items/:id', async (req: Request<{ id: string }, {}, UpdateItemDTO>, res: any) => {
//   const { name, description } = req.body;
//   const client = await connectDB();
//   try {
//     const { rows } = await client.sql<Item>`
//       UPDATE items
//       SET
//         name = COALESCE(${name}, name),
//         description = COALESCE(${description}, description)
//       WHERE id = ${parseInt(req.params.id)}
//       RETURNING *
//     `;
//     if (rows.length === 0) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json({ data: rows[0] });
//   } catch (error) {
//     res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
//   } finally {
//     await disconnectDB(client);
//   }
// });

// // DELETE - Xóa item
// app.delete('/api/items/:id', async (req: Request<{ id: string }>, res: any) => {
//   const client = await connectDB();
//   try {
//     const { rows } = await client.sql<Item>`
//       DELETE FROM items
//       WHERE id = ${parseInt(req.params.id)}
//       RETURNING *
//     `;
//     if (rows.length === 0) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json({ message: 'Item deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
//   } finally {
//     await disconnectDB(client);
//   }
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
