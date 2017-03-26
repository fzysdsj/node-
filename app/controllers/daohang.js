exports.error = function(req,res){
    res.render('error',{
      title:'信息错误页'
     
    })
}

exports.fangzhang = function(req,res){
    res.render('fangzhang',{
      title:'方丈始末'
     
    })
}


exports.gushi = function(req,res){
    res.render('gushi',{
      title:'廿载仙剑'
     
    })
}

exports.jingdian = function(req,res){
    res.render('jingdian',{
      title:'仙剑经典'
     
    })
}

exports.liuyan = function(req,res){
    res.render('liuyan',{
      title:'檀越留言'
     
    })
}


exports.yule = function(req,res){
    res.render('yule',{
      title:'仙剑娱乐'
     
    })
}