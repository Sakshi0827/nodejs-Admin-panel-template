var express = require('express');
var router = express.Router();

// Dashboard
router.get('/', function (req, res) {
    res.locals = {  title: 'Dashboard' };
    res.render('Dashboard/dashboard');
});


// User
router.get('/user-list', function (req, res) {
    res.locals = {  title: 'User List' };
    res.render('User/user_list',{list:[{id:101,name:"abc"}]});
});
router.get('/user-role', function (req, res) {
    res.locals = {  title: 'User Roles' };
    res.render('User/user_roles');
});


// Location
router.get('/country', function (req, res) {
    res.locals = {  title: 'Country' };
    res.render('Location/country');
});
router.get('/state', function (req, res) {
    res.locals = {  title: 'State' };
    res.render('Location/state');
});
router.get('/city', function (req, res) {
    res.locals = {  title: 'City' };
    res.render('Location/city');
});


// Events
router.get('/event-list', function (req, res) {
    res.locals = {  title: 'Event List' };
    res.render('Event/event_list');
});
router.get('/event-category', function (req, res) {
    res.locals = {  title: 'Event List' };
    res.render('Event/event_category');
});


//Fitness Group
router.get('/fitness-group', function (req, res) {
    res.locals = {  title: 'Fitness Group' };
    res.render('Fitness-group/fitness_group');
});


//Company
router.get('/company', function (req, res) {
    res.locals = {  title: 'Company' };
    res.render('Company/company');
});


//Challenges
router.get('/challenges', function (req, res) {
    res.locals = {  title: 'Challenges' };
    res.render('Challenges/challenges');
});


//Blogs
router.get('/blog-list', function (req, res) {
    res.locals = {  title: 'Blog List' };
    res.render('Blogs/blog_list');
});
router.get('/blog-category', function (req, res) {
    res.locals = {  title: 'Blog Category' };
    res.render('Blogs/blog_category');
});


//
router.get('/ui-images', function (req, res) {
    res.locals = {  title: 'UI Images' };
    res.render('UiElements/ui_images');
})
router.get('/ui-lightbox', function (req, res) {
    res.locals = {  title: 'UI Lightbox' };
    res.render('UiElements/ui_lightbox');
})
router.get('/ui-modals', function (req, res) {
    res.locals = {  title: 'UI Modals' };
    res.render('UiElements/ui_modals');
})
router.get('/ui-pagination', function (req, res) {
    res.locals = {  title: 'UI Pagination' };
    res.render('UiElements/ui_pagination');
})
router.get('/ui-popover-tooltips', function (req, res) {
    res.locals = {  title: 'UI Popover tooltip' };
    res.render('UiElements/ui_popover_tooltips');
})
router.get('/ui-rangeslider', function (req, res) {
    res.locals = {  title: 'UI Range Slider' };
    res.render('UiElements/ui_rangeslider');
})
router.get('/ui-session-timeout', function (req, res) {
    res.locals = {  title: 'UI Session Timeout' };
    res.render('UiElements/ui_session_timeout');
})
router.get('/ui-progressbars', function (req, res) {
    res.locals = {  title: 'UI ProgressBars' };
    res.render('UiElements/ui_progressbars');
})
router.get('/ui-sweet-alert', function (req, res) {
    res.locals = {  title: 'UI Sweet Alert' };
    res.render('UiElements/ui_sweet_alert');
})
router.get('/ui-tabs-accordions', function (req, res) {
    res.locals = {  title: 'UI Tabs Accordions' };
    res.render('UiElements/ui_tabs_accordions');
})
router.get('/ui-typography', function (req, res) {
    res.locals = {  title: 'UI Typography' };
    res.render('UiElements/ui_typography');
})
router.get('/ui-video', function (req, res) {
    res.locals = {  title: 'UI Video' };
    res.render('UiElements/ui_video');
})

// Form Elements
router.get('/form-elements', function (req, res) {
    res.locals = {  title: 'Form Elements' };
    res.render('Forms/form_elements');
})
router.get('/form-validation', function (req, res) {
    res.locals = {  title: 'Form Validation' };
    res.render('Forms/form_validation');
})
router.get('/form-advanced', function (req, res) {
    res.locals = {  title: 'Form Advanced' };
    res.render('Forms/form_advanced');
})
router.get('/form-editors', function (req, res) {
    res.locals = {  title: 'Form Editors' };
    res.render('Forms/form_editors');
})
router.get('/form-uploads', function (req, res) {
    res.locals = {  title: 'Form Uploads' };
    res.render('Forms/form_uploads');
})
router.get('/form-xeditable', function (req, res) {
    res.locals = {  title: 'Form Xeditable' };
    res.render('Forms/form_xeditable');
})

// Charts
router.get('/charts-morris', function (req, res) {
    res.locals = {  title: 'Morris Chart' };
    res.render('Charts/charts_morris');
})
router.get('/charts-chartist', function (req, res) {
    res.locals = {  title: 'Chartist Chart' };
    res.render('Charts/charts_chartist');
})
router.get('/charts-chartjs', function (req, res) {
    res.locals = {  title: 'Charts Chartjs' };
    res.render('Charts/charts_chartjs');
})
router.get('/charts-flot', function (req, res) {
    res.locals = {  title: 'Charts Flot' };
    res.render('Charts/charts_flot');
})
router.get('/charts-c3', function (req, res) {
    res.locals = {  title: 'Charts C3' };
    res.render('Charts/charts_c3');
})
router.get('/charts-other', function (req, res) {
    res.locals = {  title: 'Charts Other' };
    res.render('Charts/charts_other');
})

//tables
router.get('/tables-basic', function (req, res) {
    res.locals = {  title: 'Basic Tables' };
    res.render('Tables/tables_basic');
})
router.get('/tables-datatable', function (req, res) {
    res.locals = {  title: 'Datatable Tables' };
    res.render('Tables/tables_datatable');
})
router.get('/tables-responsive', function (req, res) {
    res.locals = {  title: 'Responsive Tables' };
    res.render('Tables/tables_responsive');
})
router.get('/tables-editable', function (req, res) {
    res.locals = {  title: 'Editable Tables' };
    res.render('Tables/tables_editable');
})

//Icons  
router.get('/icons-material', function (req, res) {
    res.locals = {  title: 'Icons Material' };
    res.render('Icons/icons_material');
})
router.get('/icons-ion', function (req, res) {
    res.locals = {  title: 'Icons Ion' };
    res.render('Icons/icons_ion');
})
router.get('/icons-fontawesome', function (req, res) {
    res.locals = {  title: 'Icons Fontawesome' };
    res.render('Icons/icons_fontawesome');
})
router.get('/icons-themify', function (req, res) {
    res.locals = {  title: 'Icons Themify' };
    res.render('Icons/icons_themify');
})
router.get('/icons-dripicons', function (req, res) {
    res.locals = {  title: 'Icons Dripicons' };
    res.render('Icons/icons_dripicons');
})
router.get('/icons-typicons', function (req, res) {
    res.locals = {  title: 'Icons Typicons' };
    res.render('Icons/icons_typicons');
})

//Google Maps
router.get('/maps-google', function (req, res) {
    res.locals = {  title: 'Google Maps' };
    res.render('Maps/maps_google');
})
router.get('/maps-vector', function (req, res) {
    res.locals = {  title: 'Vector Maps' };
    res.render('Maps/maps_vector');
})

//Extra pages
router.get('/pages-timeline', function (req, res) {
    res.locals = {  title: 'Pages Timeline' };
    res.render('Extras/pages_timeline');
})
router.get('/pages-invoice', function (req, res) {
    res.locals = {  title: 'pages-invoice' };
    res.render('Extras/pages_invoice');
})
router.get('/pages-directory', function (req, res) {
    res.locals = {  title: 'pages-directory' };
    res.render('Extras/pages_directory');
})
router.get('/pages-blank', function (req, res) {
    res.locals = {  title: 'pages-blank' };
    res.render('Extras/pages_blank');
})

module.exports = router;
