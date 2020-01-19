exports.event_list = function (req, res) {
    res.locals = {  title: 'Event List' };
    res.render('Event/event_list');
};
exports.event_category =  function (req, res) {
    res.locals = {  title: 'Event Category List' };
    res.render('Event/event_category');
};
exports.add_event =  function (req, res) {
    res.locals = {  title: 'Add Event' };
    res.render('Event/add_event.ejs');
};
exports.add_event_category =  function (req, res) {
    res.locals = {  title: 'Add Event Category' };
    res.render('Event/add_event_category.ejs');
};

