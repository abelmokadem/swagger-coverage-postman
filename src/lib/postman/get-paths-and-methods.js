module.exports = tests => {
  return tests.items.members
    .map(member => {
      return {
        path: `/${member.request.url.path.join("/")}`,
        method: member.request.method
      }
    });

}
