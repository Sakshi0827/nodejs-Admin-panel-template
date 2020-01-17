exports.blogs_list = function (req, res) {
    res.locals = {  title: 'Blog List' };
    res.render('Blogs/blogs_list');
};
exports.blogs_category =  function (req, res) {
    res.locals = {  title: 'Blog Category' };
    res.render('Blogs/blogs_category');
};
exports.add_blogs =  function (req, res) {
    res.locals = {  title: 'Add Blogs' };
    res.render('Blogs/add_blogs');
};
exports.add_blogs_category =  function (req, res) {
    res.locals = {  title: 'Add Blogs Category' };
    res.render('Blogs/add_blogs_category');
};
