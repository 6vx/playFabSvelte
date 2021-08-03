import { writable } from 'svelte-local-storage-store'

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const preferences = writable('preferences', {
  TitleId: '73021',
  SessionTicket: '',
  Username: '',
  Email: '',
  PlayFabId: '',
  Password: '',
  walletResults:{},
  leaderboardPosition:{}
})