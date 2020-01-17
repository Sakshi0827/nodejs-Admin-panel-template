const express = require('express');

exports.user_list = function(req, res) {
    res.locals = {  title: 'User List' };
    res.render('User/user_list',{list:[{id:101,name:"abc"}]});
    };

exports.user_roles = function (req, res) {
    res.locals = {title: 'User Roles'};
    res.render('User/user_roles');
};

exports.add_user = function (req, res) {
    res.locals = {title: 'User Roles'};
    res.render('User/add_user');
};

exports.add_user_roles = function (req, res) {
    res.locals = {title: 'User Roles'};
    res.render('User/add_user_roles');
};
