import { argv } from 'node:process';
import { crawlPage } from './crawl.js';

/**
 * The main function is the starting point of the web crawling process.
 * It checks for valid command-line arguments and initiates the crawl.
 */
function main(){
    if (argv.length < 3) {
        console.log('Error: missing base URL.')
        return
    }
    if (argv.length > 4) {
        console.log('Error: too many arguments.')
        return
    }
    const baseURL = argv.slice(-1)
    console.log(`Web crawler is starting on ${baseURL} ...`)
    crawlPage(baseURL)
}

main()
