var mongoose = require('mongoose')
var Category =require('../models/category') 
//mongoose.model('Category')
var Movie = require('../models/movie')
var Comment = require('../models/comment');
var _ = require('underscore');

// admin new page
exports.new = function(req, res) {
  res.render('category_admin', {
    title: '方丈阁 后台分类录入页',
    category: {}

  })
  console.log("我是新的");
}
/*exports.detail=function(req,res){
  console.log('enter detail');
  var id = req.params.id;
  Category.update({_id: id},{$inc: {PV: 1}},function(err){
    if(err) {
      console.log(err);
    }
  })
 Category.findById(id,function(err,movie) {
           res.render('category_detail',{
                title:'方丈阁',
                category: category
              })
   
  })
}*/
exports.update = function(req,res) {
  var id = req.params.id;
  if(id){

    Category.findById(id,function(err,category) {
      res.render('category_admin',{
        title:"方丈阁  人物分类后台更新页",
        category: category
      })
   
    })
  }
}
//分类信息更新
// admin post movie
exports.save = function(req, res) {
  var _category = req.body.category
   var id = req.body.category._id
  var category = new Category(_category)
 var categotyObj = req.body.category
 var _category
if (id) {
    Category.findById(id, function(err, category) {
      if (err) {
        console.log(err)
        console.log("我是错误信息")
      }

      _category = _.extend(category, categoryObj)
      _category.save(function(err, category) {
        if (err) {
          console.log(err)
          console.log("我是保存时的错误信息");
        }

        res.redirect('/category/' + category._id)
      })
    })
  }

/*  category.save(function(err, category) {
    if (err) {
      console.log(err)
    }

    res.redirect('/admin/category/list')
  })*/
}

// catelist page
exports.list = function(req, res) {
  Category.fetch(function(err, categories) {
    if (err) {
      console.log(err)
    }

    res.render('categorylist', {
      title: '方丈阁 分类列表页',
      categories: categories
    })
  })
}


//categorylist删除
exports.del = function(req,res) {
  var id = req.query.id;
  if(id) {
    Category.remove({_id: id},function(err,category) {
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
