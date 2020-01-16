var express = require('express');
var router = express.Router();

// Dashboard
router.get('/', function (req, res) {
    res.locals = {  title: 'Dashboard' };
    res.render('Dashboard/dashboard');
})

// Calendar
router.get('/calendar', function (req, res) {
    res.locals = {  title: 'Calendar' };
    res.render('Calendar/calendar');
})

// Email
router.get('/email-inbox', function (req, res) {
    res.locals = {  title: 'Email Inbox' };
    res.render('Email/email_inbox');
})
router.get('/email-compose', function (req, res) {
    res.locals = {  title: 'Email Compose' };
    res.render('Email/email_compose');
})
router.get('/email-read', function (req, res) {
    res.locals = {  title: 'Email Read' };
    res.render('Email/email_read');
})

// UI Elements
router.get('/ui-alerts', function (req, res) {
    res.locals = {  title: 'UI Alerts' };
    res.render('UiElements/ui_alerts');
})
router.get('/ui-buttons', function (req, res) {
    res.locals = {  title: 'UI Buttons' };
    res.render('UiElements/ui_buttons');
})
router.get('/ui-badge', function (req, res) {
    res.locals = {  title: 'UI Badge' };
    res.render('UiElements/ui_badge');
})
router.get('/ui-cards', function (req, res) {
    res.locals = {  title: 'UI Cards' };
    res.render('UiElements/ui_cards');
})
router.get('/ui-carousel', function (req, res) {
    res.locals = {  title: 'UI Carousel' };
    res.render('UiElements/ui_carousel');
})
router.get('/ui-dropdowns', function (req, res) {
    res.locals = {  title: 'UI Dropdowns' };
    res.render('UiElements/ui_dropdowns');
})
router.get('/ui-grid', function (req, res) {
    res.locals = {  title: 'UI Grid' };
    res.render('UiElements/ui_grid');
})
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