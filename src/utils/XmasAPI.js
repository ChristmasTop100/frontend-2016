class XmasAPI {
  static fetchSongs(context, callback, errorCallback) {
    const query = `{
      Songs {
        artist,
        title,
        image,
        url
      }
    }`
    fetch(`https://back.christmastop100.nl/graphql?query=${query}`)
      .then(response => response.json())
      .then(json => {
        callback(json, context);
      })
      .catch(error => {
        errorCallback(error, context);
      });
  }
}
export default XmasAPI
