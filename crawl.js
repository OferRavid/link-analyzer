const { JSDOM } = require('jsdom')

function normalizeURL(url) {
    const urlObj = new URL(url);
    let path = urlObj.pathname
    if (path.length > 0 && path[path.length - 1] === '/') {
        path = path.slice(0, -1)
    }
    return `${urlObj.hostname}${path}`
}

function getURLsFromHTML(htmlBody, baseURL) {
    htmlObj = new JSDOM(htmlBody)
    listURLs = htmlObj.window.document.querySelectorAll('a')
    listAbsoluteURLs = []
    for (const relativeURL of listURLs) {
        try {
            const urlObj = new URL(relativeURL.href, baseURL)
            listAbsoluteURLs.push(urlObj.href)
        } catch (err) {
            console.log(`${err.message}: ${relativeURL.href}`)
        }
    }
    console.log(listAbsoluteURLs)
    return listAbsoluteURLs
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}
