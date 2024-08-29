const path = require('path')
const cors = require('cors')
const express = require('express');  
const coverage = require('istanbul-middleware');

console.log("DEBUG")
coverage.hookLoader('src_im', { verbose: true });

const app = express();  
const PORT = process.env.PORT || 3000;  

app.use(cors());


// console.log(path.resolve(__dirname, 'src_im'))
  
// 中间件、路由等  
app.get('/', (req, res) => {  
  res.send('Hello from Express!');  
});  

app.use('/coverage', coverage.createHandler({ verbose: true, resetOnGet: true }));

  
app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);  
});

