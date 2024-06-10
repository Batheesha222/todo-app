const app = require("./app")
const PORT = process.env.PORT || 8000; //8000 port is optional if PORT missing

// listen sever
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
