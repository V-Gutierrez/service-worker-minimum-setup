"use strict"

const version = 1


self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)
self.addEventListener('push', onPush)


main().catch(console.error)

async function main() {
  console.log('[SW]: Starting')
}

function onInstall(evt) {
  console.log('[SW]: Installed')
}
function onActivate(evt) {
  console.log('[SW]: Activated')
  evt.waitUntil(handleActivation()) //Receives a promise
}



async function handleActivation() {
  await clients.claim() // Claim control over clients (tabs or something)
  console.log('[SW]: SW is active')
}

function onPush(event) {
  console.log('[Service Worker] Push Received.')
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`)
}