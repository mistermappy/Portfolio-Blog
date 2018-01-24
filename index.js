const express = require('express');
const app = express();
const Post = require('./models/posts.js');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
  res.render('index', {title: 'My Website'})
});

app.get('/blog', (req, res)=>{

  Post.findAll()
      .then(posts => {
        res.render('blog', { posts: posts })
  })
});

app.post('/blog', (req, res)=>{
  //res.send('blog is live..')
  Post.sync()
      .then(()=>{
        return Post.create({
          title: req.body.title,
          message: req.body.message
        })
      })
      .then(()=>{
        res.redirect('/blog')
      })
});

app.get('/portfolio', (req, res)=>{
  res.render('portfolio')
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log('app is listening on port 3000')
});
