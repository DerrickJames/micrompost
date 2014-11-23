Template.postSubmit.events({
  'submit form': function(e) {
  e.preventDefault();
  
  var post = {
    url: $(e.target).find('[name=url]').val(),
    title: $(e.target).find('[name=title]').val()
  };

  Meteor.call('postInsert', post, function (error, result) {
    if (error)
        // Display error to the user and abort
        return throwError(error.reason);

    if (result.postExists)
        // Show this result and route anyway
        throwError('This link has already been posted!');

    Router.go('postPage', {_id: result._id});
  });
  }
});