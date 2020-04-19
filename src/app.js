import express from "express";

const app = express();

app.listen(3000, function () {
  console.log(`Server is listening on port 3000`);
});

export default app;
