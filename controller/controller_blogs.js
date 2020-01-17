exports.blogs_list = function (req, res) {
    res.locals = {  title: 'Blog List' };
    res.render('Blogs/blog_list');
};
exports.blogs_category =  function (req, res) {
    res.locals = {  title: 'Blog Category' };
    res.render('Blogs/blog_category');
};
