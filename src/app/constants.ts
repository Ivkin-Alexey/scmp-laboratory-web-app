export const BASE_URL = 'https://scmp-bot-server.ru/'

export const DEFAULT_SEARCH_TERM = 'Печи'

export const SEARCH_DELAY = 1000 // ms

export const SEARCH_SUGGEST_NUMBER = 5

export const routes = {
  main: '/',
  signIn: '/signin',
  signUp: '/signup',
  equipment: '/:equipmentID',
  favorites: '/favorites',
  history: '/history',
  search: '/search',
}
