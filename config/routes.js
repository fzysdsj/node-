var Index = require('../app/controllers/index');
var Movie = require('../app/controllers/movie');
var User = require('../app/controllers/user');
var Comment = require('../app/controllers/comment')
var Category = require('../app/controllers/category')
var Begin = require('../app/controllers/begin')
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
//kaishi page
app.get('/',Begin.begin)
//index.page
app.get('/index',Index.index);
//user
app.post('/user/signup',User.signup);
app.post('/user/signin',User.signin);
app.get('/signin',User.showSignin);
app.get('/signup',User.showSignup);
app.get('/logout',User.logout);
app.get('/admin/user/list', /*User.signinRequired, User.adminRequired,*/ User.list);
app.delete('/admin/user/list',/*User.signinRequired, User.adminRequired,*/User.del);
//movie
app.get('/movie/:id',Movie.detail);
/*app.get('/category/:id',category.detail);
app.get('/user/:id',user.detail);*/
app.get('/admin/movie/new',/*User.signinRequired, User.adminRequired,*/Movie.new);
app.get('/admin/movie/update/:id',/*User.signinRequired, User.adminRequired,*/Movie.update);
//有问题.
app.post('/admin/movie',multipartMiddleware,Movie.savePoster,/*User.signinRequired, User.adminRequired,*/Movie.save);
app.get('/admin/movie/list',/*User.signinRequired, User.adminRequired,*/Movie.list);
app.delete('/admin/movie/list',/*User.signinRequired, User.adminRequired,*/Movie.del);
app.post('/user/comment', /*User.signinRequired,*/ Comment.save);
app.get('/admin/category/new', /*User.signinRequired, User.adminRequired,*/ Category.new)
app.post('/admin/category', /*User.signinRequired, User.adminRequired,*/ Category.save)
app.get('/admin/category/list', /*User.signinRequired, User.adminRequired,*/ Category.list)
app.delete('/admin/category/list',/*User.signinRequired, User.adminRequired,*/Category.del);
//results
app.get('/results',Index.search);





}