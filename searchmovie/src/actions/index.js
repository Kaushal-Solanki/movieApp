export const MOVIES = "MOVIES"


const movie = (items) => {
  const action = {
    type: MOVIES,
    items
  }
  return action
}

export default movie