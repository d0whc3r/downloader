import { messages } from '@ext/helpers/useMessage'

console.log('content', window.location.href)

function searchVideos() {
  const videos = document.getElementsByTagName('video')
  console.log(videos)
  for (const element of Array.from(videos)) {
    const video = element
    console.log(video.src)
  }
}

function init() {
  console.log('start content init')
  searchVideos()
  messages.listen((message) => {
    console.log(message)
  })
}

init()
