//引入express模块
express = require('express')
//引入mongoose模块
// mongoose = require('mongoose')
//引入bodyParser模块
// bodyParser = require('body-parser');
//引入todoListModel模块
// Task = require('./api/models/todoListModel')
//引入路由模块
routes = require('./api/routes/exchangeRoutes')
routes2 = require('./api/routes/todoListRoutes')
//实例化名字为app的express
const app = express()
//设置代表端口的port常量并赋值3000
const port = 8888
//开始监听，成功后输出Example app listening on 端口号
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//连接MongoDB数据库
// mongoose.connect('mongodb://localhost/Tododb',{useNewUrlParser:true,useUnifiedTopology:true});
//调用bodyParser中间件
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//注册路由
routes(app);
routes2(app);


// var express = require('express'),
//     app = express(),
//     port = process.env.PORT || 3000,
//     mongoose = require('mongoose'),
//     Task = require('./api/models/todoListModel'), //created model loading here
//     bodyParser = require('body-parser');
//
// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
//
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// var routes = require('./api/routes/todoListRoutes'); //importing route
// routes(app); //register the route
//
//
// app.listen(port);
//
//
// console.log('todo list RESTful API server started on: ' + port);




