export default defineEventHandler(async (event) => {
  const ships = await GqlShips({ limit: 3 })

  return ships.ships
})
