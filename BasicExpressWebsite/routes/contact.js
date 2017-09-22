var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'spatil557@gmail.com',
			pass: 'Shubh@m/.;\'7gm'
		}
	});

	var mailOptions = {
		from : 'John Doe <johndoe@gmail.com>',
		to : 'spatil557@gmail.com',
		subject : 'Web submission',
		text : 'You have a new submission. Name'+req.body.name
	};

	transporter.sendMail(mailOptions,function(error,info){
		if(error){
			console.log(error);
			res.redirect('/');
		}
		else{
			console.log('message sent'+info.response);
			res.redirect('/'); 
		}

	})
});

module.exports = router;
