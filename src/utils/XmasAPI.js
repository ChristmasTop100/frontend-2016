class XmasAPI {
  static fetchSongs(context, callback, errorCallback) {
    const query = `{
      Songs {
        artist,
        title,
        image,
        url,
        votes {
          score
        }
      }
    }`
    return fetch(`https://back.christmastop100.nl/graphql?query=${query}`)
      .then(response => response.json())
  }

  static loginUser(username, password) {
    const query = `{
      CreateSession(
        email:"${username}",
        password:"${password}"
      ) { token }
    }`
    console.log(`https://back.christmastop100.nl/graphql?query=mutation` + query);
    return fetch(`https://back.christmastop100.nl/graphql?query=mutation${query}`)
      .then(response => response.json())
  }
}
export default XmasAPI
