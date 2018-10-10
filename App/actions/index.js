let nextUserId = 0
export const addUser = obj => ({
  type: 'ADD_USER',
  id: nextUserId++,
  text: obj.text,
  completed: false,
  latlng: obj.latlng,
  user:obj.user
})
