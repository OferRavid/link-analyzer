import { JSDOM } from 'jsdom';

/**
 * Normalizes a given URL by removing protocol and trailing slashes.
 * @param {string} url - The URL to normalize.
 * @returns {string} The normalized URL.
 */
function normalizeURL(url) {
    const urlObj = new URL(url);
    let path = urlObj.pathname;
    if (path.length > 0 && path[path.length - 1] === '/') {
        path = path.slice(0, -1);
    }
    return `${urlObj.hostname}${path}`;
}

/**
 * Extracts all anchor tag links from an HTML string and converts them to absolute URLs.
 * @param {string} htmlBody - The HTML content to extract links from.
 * @param {string} baseURL - The base URL for resolving relative links.
 * @returns {string[]} A list of absolute URLs found in the HTML.
 */
function getURLsFromHTML(htmlBody, baseURL) {
    const htmlObj = new JSDOM(htmlBody);
    const listURLs = htmlObj.window.document.querySelectorAll('a');
    const listAbsoluteURLs = [];
    for (const relativeURL of listURLs) {
        try {
            const urlObj = new URL(relativeURL.href, baseURL);
            listAbsoluteURLs.push(urlObj.href);
        } catch (err) {
            console.log(`${err.message}: ${relativeURL.href}`);
        }
    }
    console.log(listAbsoluteURLs);
    return listAbsoluteURLs;
}

/**
 * Crawls a given page, fetching its content and analyzing its links.
 * @param {string} currentURL - The URL to crawl.
 * @returns {Promise<void>} A promise that resolves when crawling is complete.
 */
async function crawlPage(currentURL) {
    console.log(`Crawling ${currentURL}`);

    let res;
    try {
        res = await fetch(currentURL);
    } catch (err) {
        throw new Error(`Got Network error: ${err.message}`);
    }

    if (res.status > 399) {
        console.log(`Got HTTP error: ${res.status} ${res.statusText}`);
        return;
    }
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('text/html')) {
        console.log(`Got non-HTML response: ${contentType}`);
        return;
    }
    console.log(await res.text());
}

export { crawlPage, getURLsFromHTML, normalizeURL };
