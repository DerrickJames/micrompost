if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var armyId = Meteor.users.insert({
    profile: { name: 'Army James' }
  });

  var army = Meteor.users.findOne(armyId);

  var naaId = Meteor.users.insert({
    profile: { name: 'Amy Naa' }
  });

  var naa = Meteor.users.findOne(naaId);

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: naa.profile.name,
      userId: naa._id,
      url: 'http://microm.com/test-' + i,
      submitted: new Date(now - i * 3600 * 1000),
      commentsCount: 0,
      upVoters: [],
      votes: 0
    });
  }  

  var micromId = Posts.insert({
    title: 'Introducing Microm',
    userId: naa._id,
    author: naa.profile.name,
    url: 'http://microm.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upVoters: [],
    votes: 0
  });

  Comments.insert({
    postId: micromId,
    userId: army._id,
    author: army.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Naa, can I get involved?'
  });

  Comments.insert({
    postId: micromId,
    userId: naa._id,
    author: naa.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Army!'
  });
  
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    userId: army._id,
    author: army.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    commentsCount: 0,
    upVoters: [],
    votes: 0
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    userId: army._id,
    author: army.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    commentsCount: 0,
    upVoters: [],
    votes: 0
  });
  
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    userId: army._id,
    author: army.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    commentsCount: 0,
    upVoters: [],
    votes: 0
  });
}