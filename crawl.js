import { JSDOM } from 'jsdom';

function normalizeURL(url) {
    const urlObj = new URL(url);
    let path = urlObj.pathname
    if (path.length > 0 && path[path.length - 1] === '/') {
        path = path.slice(0, -1)
    }
    return `${urlObj.hostname}${path}`
}

function getURLsFromHTML(htmlBody, baseURL) {
    const htmlObj = new JSDOM(htmlBody)
    const listURLs = htmlObj.window.document.querySelectorAll('a')
    const listAbsoluteURLs = []
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

async function crawlPage(currentURL) {
    console.log(`crawling ${currentURL}`)

    let res
    try {
        res = await fetch(currentURL)
    } catch (err) {
        throw new Error(`Got Network error: ${err.message}`)
    }

    if (res.status > 399) {
        console.log(`Got HTTP error: ${res.status} ${res.statusText}`)
        return
    }
    const contentType = res.headers.get('content-type')
    if (!contentType || !contentType.includes('text/html')) {
        console.log(`Got non-HTML response: ${contentType}`)
        return
    }
    console.log(await res.text())
}

export { crawlPage, getURLsFromHTML, normalizeURL };

