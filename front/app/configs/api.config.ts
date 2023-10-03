// Здесь будут содержаться почти все наши пути

export const API_URL = `${process.env.APP_URL}/api`
// console.log('API_URL', process.env.APP_URL) //APP_URL в  next.config.js

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`
