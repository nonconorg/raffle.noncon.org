export const View = (tokens = []) => {
  return ul(tokens
    .sort((a, b) => Math.random()  - Math.random())
    .map(token => li(['participant: ', token.tok])))
}

// export const subscriptions = [
  // (dispatch, options) => {
    // const interval = setInterval(() => dispatch(options.action), options.time)
    // console.log('subscription');
    // return () => clearInterval(interval)
  // },
// ]
