var Index = require('../app/controllers/index');
var Movie = require('../app/controllers/movie');
var User = require('../app/controllers/user');
var Comment = require('../app/controllers/comment')
var Category = require('../app/controllers/category')
var Begin = require('../app/controllers/begin')
var Daohang = require('../app/controllers/daohang')
/*var Yule = require('../app/controllers/yule')
var Error1 = require('../app/controllers/error')
var Jingdian = require('../app/controllers/jingdian')
var Liuyan = require('../app/controllers/liuyan')
var Fangzhang = require('../app/controllers/fangzhang')*/
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var _ = require('underscore');

module.exports = function(app) {
//判断用户
app.use((req,res,next)=>{
  var _user = req.session.user;
    app.locals.user = _user; 
    return next();
})
//begin,开场动画
app.get('/',Begin.begin)
//gushi,仙剑廿载
app.get('/gushi',Daohang.gushi)
//yule.仙剑娱乐
app.get('/yule',Daohang.yule);
//jingdian，仙剑经典
app.get('/jingdian',Daohang.jingdian)
//liuyan，檀越留言
app.get('/liuyan',Daohang.liuyan)
app.get('/fangzhang',Daohang.fangzhang)
//index.page,主页
app.get('/index',Index.index);
//信息错误页
app.get('/error',Daohang.error);
//user，用户页。
app.post('/user/signup',User.signup);
app.post('/user/signin',User.signin);
app.get('/signin',User.showSignin);
app.get('/signup',User.showSignup);
app.get('/logout',User.logout);
app.get('/admin/user/list', /*User.signinRequired, User.adminRequired,*/ User.list);
app.delete('/admin/user/list',/*User.signinRequired, User.adminRequired,*/User.del);
app.get('/admin/user/new', /*User.signinRequired, User.adminRequired,*/ User.new)
//movie
app.get('/movie/:id',Movie.detail);
/*app.get('/category/:id',category.detail);
app.get('/user/:id',user.detail);*/
app.get('/admin/movie/new',/*User.signinRequired, User.adminRequired,*/Movie.new);
app.get('/admin/movie/update/:id',/*User.signinRequired, User.adminRequired,*/Movie.update);
app.get('/admin/category/update/:id',/*User.signinRequired, User.adminRequired,*/Category.update);
app.get('/admin/user/update/:id',/*User.signinRequired, User.adminRequired,*/User.update);
app.post('/admin/user', /*User.signinRequired, User.adminRequired,*/ User.save)
//有问题.
app.post('/admin/movie',multipartMiddleware,Movie.savePoster,/*User.signinRequired, User.adminRequired,*/Movie.save);
app.get('/admin/movie/list',/*User.signinRequired, User.adminRequired,*/Movie.list);
app.delete('/admin/movie/list',/*User.signinRequired, User.adminRequired,*/Movie.del);
app.post('/user/comment', /*User.signinRequired,*/ Comment.save);
app.get('/admin/category/new', /*User.signinRequired, User.adminRequired,*/ Category.new)
app.post('/admin/category', /*User.signinRequired, User.adminRequired,*/ Category.save)
app.get('/admin/category/list', /*User.signinRequired, User.adminRequired,*/ Category.list)
app.delete('/admin/category/list',/*User.signinRequired, User.adminRequired,*/Category.del);
//results，搜索结果页
app.get('/results',Index.search);





}