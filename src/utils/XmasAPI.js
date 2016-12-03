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
    return fetch(`https://back.christmastop100.nl/graphql?query=${query}`)
      .then(response => response.json())
  }
}
export default XmasAPI
