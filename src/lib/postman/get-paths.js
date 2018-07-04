module.exports = tests =>
  tests.items.members.map(member => `/${member.request.url.path.join("/")}`);
