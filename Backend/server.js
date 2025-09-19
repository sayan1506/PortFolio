require("dotenv").config();
const app = require("./src/app");


const PORT = 3000; // define PORT

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
