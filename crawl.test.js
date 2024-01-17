const { test, expect } = require('@jest/globals')

const { normalizeURL } = require('./crawl.js')

const { getURLsFromHTML } = require('./crawl.js')

test('normalized url for https://blog.boot.dev/path/', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toBe(expected);
});

test('normalized url for http://blog.boot.dev/path/', () => {
    const input = 'http://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toBe(expected);
});

test('normalized url for https://blog.boot.dev/path', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toBe(expected);
});

test('normalized url for http://blog.boot.dev/path', () => {
    const input = 'http://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toBe(expected);
});

test('normalized url for https://BLOG.boot.dev/path', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toBe(expected);
});

test('relative URLs', () => {
    const htmlBody = `<html><body><a href="/a"></a></body></html>`
    const baseURL = 'https://boot.dev'
    const actual = getURLsFromHTML(htmlBody, baseURL)
    const expected = [`${baseURL}/a`]
    expect(actual).toStrictEqual(expected)
});

test('find all', () => {
    const htmlBody = `<html>
                          <body>
                              <a href="https://boot.dev/a"></a>
                              <a href="https://boot.dev/b"></a>
                              <a href="https://boot.dev/c"></a>
                              <a href="/d"></a>
                              <a href="https://example.com/test"></a>
                          </body>
                    </html>`
    const baseURL = 'https://boot.dev'
    const actual = getURLsFromHTML(htmlBody, baseURL)
    const expected = ['https://boot.dev/a', 'https://boot.dev/b', 'https://boot.dev/c', 'https://boot.dev/d', 'https://example.com/test']
    expect(actual).toStrictEqual(expected)
});
