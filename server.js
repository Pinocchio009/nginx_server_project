const express = require('express');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
  res.status(200).json({
      slackUsername: 'Pinocchio',
      backend: true,
      age: 23,
      bio: 'i am a boy trying to make it'
  
  })
})
app.listen(PORT,()=>{
  console.log(`serving on port ${PORT}`)
})