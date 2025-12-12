import express from 'express';
import app from '../src/app.js';
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// export default app;

