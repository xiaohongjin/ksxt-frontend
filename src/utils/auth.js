import Cookies from 'js-cookie';

const TokenKey = 'saber3-access-token';
const RefreshTokenKey = 'saber3-refresh-token';
const SessionId = 'JSESSIONID';
const UserId = 'b-user-id';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey);
}

export function setRefreshToken(token) {
  return Cookies.set(RefreshTokenKey, token);
}

export function removeToken() {
  Cookies.remove(SessionId);
  Cookies.remove(UserId);
  return Cookies.remove(TokenKey);
}

export function removeRefreshToken() {
  return Cookies.remove(RefreshTokenKey);
}
