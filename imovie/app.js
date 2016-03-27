var express = require('express');    
var port = process.env.PORT || 3000;
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('imooc started on port'+ port);


//index page
app.get('/',function(req, res){
  res.render('index',{
  	title:'imooc 首页',
    movies: [{
      title:'机械故障',
      _id: 1,
      poster: 'http://r4.ykimg.com/050E000051D3C5A5675839381701F678'
    },{
       title:'机械故障',
      _id: 2,
      poster: 'http://r4.ykimg.com/050E000051D3C5A5675839381701F678'
    },{
       title:'机械故障',
      _id: 3,
      poster: 'http://r4.ykimg.com/050E000051D3C5A5675839381701F678'
    },{
       title:'机械故障',
      _id: 4,
      poster: 'http://r4.ykimg.com/050E000051D3C5A5675839381701F678'
    },{
       title:'机械故障',
      _id: 5,
      poster: 'http://r4.ykimg.com/050E000051D3C5A5675839381701F678'
    },{
       title:'机械故障',
      _id: 6,
      poster: 'http://r4.ykimg.com/050E000051D3C5A5675839381701F678'
    }]
  });
});

//detail page
app.get('/movie/:id',function(req, res){
  res.render('detail',{
  	title:'imooc 详情',
    movie: {
      director: '蒂姆米勒',
      country: '美国',
      title: '死侍',
      year: 2014,
      poster: 'https://img1.doubanio.com/view/photo/raw/public/p2309264172.jpg',
      language: '英语',
      flash: 'http://player.youku.com/player.php/sid/XMTMwMDc5MjU2MA==/v.swf',
      summary: '该片是《X战警》系列电影的外传。讲述了前任特种兵韦德·威尔逊得了不治之症，而自愿加入“X武器计划”获得了快速自愈能力。在饱受虐待折磨后他成功逃脱并对Ajax进行追杀的故事。在原著漫画中，死侍本是个普通人，由于得了不治之症而自愿加入“X武器计划”，他如愿得到了金刚狼自我愈合的能力，但付出的代价是失去了容貌。史崔克将军把他作为失败品投入监狱折磨并继续研究，最终导致他的出逃。死侍是个亦正亦邪的角色，他拥有超越人类的力量、耐力、速度及自我愈合能力，精通各种武器，擅长搏击术，不过他的精神不太稳定。'
    }
  });
});

//admin page
app.get('/admin/movie',function(req, res){
  res.render('admin',{
  	title:'imooc 后台',
    movie: {
      title: '',
      director: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  });
});

//list page
app.get('/admin/list',function(req, res){
  res.render('list',{
  	title:'imooc 列表',
    movies: [{
      title: '死侍',
      _id: 1,
      director: '蒂姆米勒',
      country: '美国',
      year: 2014,
      flash: 'http://player.youku.com/player.php/sid/XMTMwMDc5MjU2MA==/v.swf',
      language: '英语'
    }]
  });
});