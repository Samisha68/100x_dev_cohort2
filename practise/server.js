const express = require('express')
const app = express()
const port=3000

function calculatesum(n){
  let ans=0;
  for(let i=0; i<n; i++){
    ans+=i;
  }
  return ans;
}
//fs.readFile("path","utf-8",callback_function)
app.get('/', function(req, res){
    const n=req.query.n;
    const ans=calculatesum(n);
    res.send(ans.toString());
})


// app.post('/backend-api/conversation',function(req,res) {
//     res.send('hello world')
// })
// app.listen(3000, function() {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(port);
