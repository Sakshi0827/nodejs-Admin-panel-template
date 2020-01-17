exports.event_list = function (req, res) {
    res.locals = {  title: 'Event List' };
    res.render('Event/event_list');
};
exports.event_category =  function (req, res) {
    res.locals = {  title: 'Event List' };
    res.render('Event/event_category');
};
