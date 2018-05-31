const clientId = '6fc467a0d055475a99d7153d00e24fc7';
const redirect_uri = 'http://localhost:8080/';

export function authenticateForToken() {
  // TODO: use state to help prevent cross-site scripting attacks.
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=token`;
}
