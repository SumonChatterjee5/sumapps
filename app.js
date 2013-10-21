
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  ,   _ = require('underscore')
  , cons = require('consolidate')
  , fs = require('fs')
  , mysql = require('mysql');

var app = express();

var pool;

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');
app.set('view options', {layout: false});

app.engine('html', cons.underscore);

app.set('view engine', 'html');

app.use(express.bodyParser());

app.use(express.methodOverride());

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

app.use(function(err, req, res, next) {

    res.send(500, { error: err });
});

app.get('/showAddRequirement', function(req, res) {

    res.render('memberspacebck');

});



app.post('/upload', function(req, res, next) {


    console.log("/upload");
    fs.readFile(req.files.fileInfo.path, function (err, data) {
        if (err) throw err;

        var fileName = req.files.fileInfo.name;

        req.session.filename = fileName;
        var newPath = __dirname + "/testUpload/"+ fileName;

        fs.writeFile(newPath, data, function (err) {
            res.json({"success":"true"});

        });
    });
});

app.post('/requirement/save', function(req, res, next) {
	//var res1 = res;
    //console.log(JSON.stringify(req));

    var reqClientName = req.body.requirementClientName;
    var reqCompanyName = req.body.requirementCompanyName;
    var reqEmailId = req.body.requirementEmailid;
    var reqContactNumber = req.body.requirementContactNumber;
	var reqProjectName = req.body.requirementProjectName;
    var reqProjectInformation = req.body.requirementProjectInformation;
    var reqSeedURL = req.body.requirementSeedURL;
	var reqOutputFormat = req.body.requirementOutputFormat;
    var reqDataSchema = req.body.requirementDataSchema;
    var reqSampleFile;
    if(req.session.filename) {
        reqSampleFile = req.session.filename;
    }
    //var reqSampleFile = req.body.requirementSampleFile;
	var reqDataCrawlFrequency = req.body.requirementDataCrawlFrequency;
    var reqOtherRequirements = req.body.requirementOtherRequirements;

    //console.log(reqOtherRequirements);
    //res.json({success:true});



    pool.getConnection(function(err, connection) {
        if(err) {
            next(err);
        } else {
            var insertrequirementpromptcloud = "Insert into requirementPromptCloud(reqpcClientName, reqpcCompanyName, reqpcEmailid, reqpcContactNumber, reqpcProjectName, reqpcProjectInformation, reqpcSeedURL, reqpcOutputFormat, reqpcDataSchema, reqpcSampleFile, reqpcDataCrawlFrequency, reqpcOtherRequirements) Values('"+reqClientName+"', '"+reqCompanyName+"', '"+reqEmailId+"', '"+reqContactNumber+"', '"+reqProjectName+"', '"+reqProjectInformation+"', '"+reqSeedURL+"', '"+reqOutputFormat+"', '"+reqDataSchema+"', '"+reqSampleFile+"', '"+reqDataCrawlFrequency+"', '"+reqOtherRequirements+"')";

            connection.query(insertrequirementpromptcloud, function(err, result) {
                if(err) {
                    next(err);
                } else {
                    if(result) {
                        res.json({success:true});

                    } else {
                        res.json({success:false});
                    }

                }

            });

        }
        connection.end();
    });

});

app.get('/requirement/show', function(req, res, next) {
        pool.getConnection(function(err, connection) {
            if(err) {
                next(err);
            } else {
                var selectrequirementPromptCloud = "Select * from requirementPromptCloud";

			   connection.query(selectrequirementPromptCloud, function(err, result) {
		       if(err) {
		           next(err);
		       } else {
	           		if(result) {
						res.json({data:result});
	           		} else {
	                	res.json({success:false})
	           		}

				}
				});
            }
            connection.end();
        });
});


app.use(function(err, req, res, next) {

    console.error(err);

    res.send(500, { error: err });
});

http.createServer(app).listen(app.get('port'), function(){

    pool  = mysql.createPool({
        host     : 'localhost',
        port: '3306',
        database: 'test',
        user     : 'root',
        password : 'root',
        connectionLimit:10,
        queueLimit:0
    });
});
