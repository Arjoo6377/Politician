const photoModules = import.meta.glob<string>('../assets/rajivphotos/*.jpeg', {
  eager: true,
  import: 'default',
})

export const rajivPhotos = Object.entries(photoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

export function rajivPhotoSlice(start: number, count: number) {
  return rajivPhotos.slice(start, start + count)
}
