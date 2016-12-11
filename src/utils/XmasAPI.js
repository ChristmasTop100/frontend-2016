class XmasAPI {
  static fetchSongs() {
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
    return this.query(query)
  }

  static loginUser(username, password) {
    const query = `mutation {
      CreateSession(
        email:"${username}",
        password:"${password}"
      ) { token }
    }`
    return this.query(query)
  }

  static oneTimeLogin(email, password, token) {
    const query = `mutation {
      UpdateUser(
        password:"${password}",
        email:"${email}",
        token:"${token}"
      ) {
        name,
        id
      }
    }`

    return this.query(query)
  }

  static query(query) {
    return fetch(`https://back.christmastop100.nl/graphql?query=${query}`, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
      .then(response => response.json())
  }
}
export default XmasAPI
