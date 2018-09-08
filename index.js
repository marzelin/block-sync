function block(ms) {
  const unblockTime = Date.now() + ms;
  // tslint:disable-next-line:curly
  while (Date.now() < unblockTime);
}

module.exports = block;
