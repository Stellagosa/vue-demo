export function setAccessTokenInLocalStorage(accessToken: string) {
  localStorage.setItem('ACCESS_TOKEN', accessToken)
}

export function setRefreshTokenInLocalStorage(refreshToken: string) {
  localStorage.setItem('REFRESH_TOKEN', refreshToken)
}

export function getAccessTokenFromLocalStorage() {
  return localStorage.getItem('ACCESS_TOKEN') as string
}

export function getRefreshTokenFromLocalStorage() {
  return localStorage.getItem('REFRESH_TOKEN') as string
}

export function removeAccessTokenFromLocalStorage() {
  localStorage.removeItem('ACCESS_TOKEN')
}

export function removeRefreshTokenFromLocalStorage() {
  localStorage.removeItem('REFRESH_TOKEN')
}
