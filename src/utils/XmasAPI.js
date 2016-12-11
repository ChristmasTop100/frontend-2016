class XmasAPI {
  static fetchSongs(token = null) {
    const query = `{
      Songs {
        id,
        artist,
        title,
        image,
        url,
        votes {
          score
        }
      }
    }`
    return this.query(query, token)
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

  static updateVote(songId, score, token) {
    const query = `mutation {
      UpdateVote (
        song_id: ${songId},
        score: ${score}
      ) {
        song_id,
        user_id,
        score
      }
    }`

    return this.query(query, token)
  }

  static query(query, token = null) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    if (token != null) {
      headers.Authorization = `Bearer ${token}`
    }

    return fetch(`https://back.christmastop100.nl/graphql?query=${query}`, { headers })
      .then(response => response.json())
  }
}
export default XmasAPI
