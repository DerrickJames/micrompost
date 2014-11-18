Router.configure({
  layoutTemplate: 'layout',
  laodingTemplate: 'loading',
  waitOn: function() {return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});