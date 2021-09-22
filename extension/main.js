modifyHeader('Content-Security-Policy', `default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';`, 'https://music.yandex.ru/*')
modifyHeader('content-type', 'text/javascript', `https://raw.githubusercontent.com/AriesAlex/yandex-music-30min-remover/master/index.js`)
redirect('https://music.yandex.ru/index.js', 'https://raw.githubusercontent.com/AriesAlex/yandex-music-30min-remover/master/index.js')

function modifyHeader(name, value, url) {
  chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
      const responseHeaders = details.responseHeaders

      responseHeaders.forEach(header => {
        if(header.name == name) header.value = value
      })

      return { responseHeaders }
    },
    {urls: [url]},
    ['responseHeaders', 'extraHeaders', 'blocking']
  )
}

function redirect(from, to) {
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      if(details.url.includes(from)) return {redirectUrl: to}
    },
    {urls: ['*://*/*']},
    ['blocking']
  )
}