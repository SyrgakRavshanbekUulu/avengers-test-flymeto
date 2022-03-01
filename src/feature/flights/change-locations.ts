export const changeLocations = (
  location1: string,
  location2: string,
  setValue: (a: string, b: string) => {}
) => {
  const temp = location1
  setValue(location1, location2)
  setValue(location2, temp)
}