// static page
// About
exports.about = function(req, res, next) {
	res.render('static/about');
	//res.redirect('http://pomelo.netease.com/');
};

// FAQ
exports.faq = function(req, res, next) {
	//res.render('static/faq');
	res.redirect('https://github.com/NetEase/pomelo/wiki/%E4%B8%AD%E6%96%87FAQ');
};