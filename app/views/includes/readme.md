github+hexo+node搭建个人博客
方丈遗少杜三贱，2017年3月22日，丁酉廿三。

在进行具体操作之前，我们需要在本地安装以下软件：
1.git
2.node
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install -g hexo-cli
npm install hexo --save
hexo -v
hexo init
hexo s -g
hexo d -g
git config --global user.name
git config --global user.email
npm install hexo-deployer-git --save
hexo d -g
yourname.github.io