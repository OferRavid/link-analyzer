const { test, expect } = require('@jest/globals')

const { normalizeURL } = require('./crawl.js')

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