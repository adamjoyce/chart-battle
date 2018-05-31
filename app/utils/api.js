const clientId = '6fc467a0d055475a99d7153d00e24fc7';
const redirect_uri = 'http://localhost:8080/';

function handleError(error) {
  console.warn(error);
  return null;
}

export function authenticateForToken() {
  // TODO: use state to help prevent cross-site forgery requests.
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=token`;
}

export async function getPlaylist(userId, playlistId, accessToken) {
  const {token_type, access_token} = accessToken;

  // To filter out some of the unwanted data.
  const fields = 'tracks.items';

  let headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `${token_type} ${access_token}`);

  const response = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}?fields=${fields}`,
    {headers: headers}
  ).catch(handleError);
  const tracks = await response.json();

  // Return the 50 track items.
  return tracks.tracks.items;
}
