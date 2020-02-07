// eslint-disable-next-line no-unused-vars
async function runIfPromise(obj) {
  if (obj instanceof Promise) return await obj;
  return obj;
}

module.exports = runIfPromise;
