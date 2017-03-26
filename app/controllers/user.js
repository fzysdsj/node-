var mongoose = require('mongoose')
var User = require('../models/user');
//
exports.new = function(req, res) {
  res.render('user_admin', {
    title: '方丈阁 后台分类录入页',
    user: {}
  })
}

exports.update = function(req,res) {
  var id = req.params.id;
  if(id){

    User.findById(id,function(err,user) {
      res.render('user_admin',{
        title:"方丈阁  用户信息后台更新页",
        user: user
      })
   
    })
  }
}
exports.showSignup = function(req,res){
    res.render('signup',{
      title:'注册页面'
     
    })
}
exports.showSignin = function(req,res){
    res.render('signin',{
      title:'登陆页面'
     
    })
}

//signup 
exports.signup = function(req,res,next) {
  var _user = req.body.user;
  User.findOne({name: _user.name},function(err,user) {
    if(err) {
      console.log("我是错误信息");
      console.log(err);
    }
   else if(_user.name===""){
    console.log("我是错误信息");
    delete user;
    return res.redirect('/signup')
   }
 else if(user) {
      return res.redirect('/signin')
    }
 
    else {
 
  console.log("那是我的错喽？");
  var user = new User(_user);
  user.save(function(err,user){
    console.log("你是不是有错？");
    if(err){
      console.log(err);
      console.log("你妈隔壁");
    }
     return res.redirect('/signin');
  });
    }
  
  }); 
};
//signin page  登录成功模块
exports.signin = function(req,res) {
   //req.session.user =user;
   //console.log(req.session.user);
   var _user = req.body.user;
   var name = _user.name;
   var password = _user.password;
   User.findOne({name: name},function(err,user){
    if(err) {
      console.log(err);
    }
    if(!user) {
      return res.redirect('/signup')
    }
    user.comparePassword(password,function(err,isMatch){
     if(err) {
      console.log(err);
     }
     if(isMatch) {
      console.log("账号正确");
      req.session.user = user
      console.log(req.session.user);
      return res.redirect('/index');
     }
     else {
      return res.redirect('/signin');
      //跳转到登录失败界面，强吧。return res.redirect('/');
     }
    });
   });
};
//logout
exports.logout = function(req,res) {
   //req.session.user =user;
   delete req.session.user;
   //delete app.locals.user;
   res.redirect('/index');
};


//userlist page
exports.list = function(req,res){
  var user = req.session.user;
  User.fetch(function(err,users) {
    if(err){
      console.log(err);
    }
    res.render('userlist',{
      title:'方丈阁 用户列表页',
      users: users
    })
  })
}
exports.signinRequired = function(req, res, next) {
  var user = req.session.user;

  if (!user) {
    return res.redirect('/signin')
  }

  next()
}

exports.adminRequired = function(req, res, next) {
  var user = req.session.user

  if (user.role <= 10) {
    return res.redirect('/signin')
  }

  next()
}

//userlist删除
exports.del = function(req,res) {
  var id = req.query.id;
  if(id) {
    User.remove({_id: id},function(err,user) {
      if(err){
        console.log(err);
        res.json({success: 0});
      }
      else{
        res.json({success: 1});
      }
    })
  }
};
exports.save = function(req, res) {
  var _user = req.body.user
  var user = new User(_user)

  user.save(function(err, user) {
    if (err) {
      console.log(err)
    }

    res.redirect('/admin/user/list')
  })
}

//用户分类更新页
/*exports.update = function(req,res) {
  var id = req.params.id;
  if(id){

    User.findById(id,function(err,user) {
     
      res.render('admin',{
        title:"方丈阁  后台用户信息更新页",
        user: user
      })
    })
  }
}*/