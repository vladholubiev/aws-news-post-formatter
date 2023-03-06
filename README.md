# aws-news-post-formatter [![CircleCI](https://circleci.com/gh/vladgolubev/aws-news-post-formatter/tree/master.svg?style=svg)](https://circleci.com/gh/vladgolubev/aws-news-post-formatter/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Formats & fixes HTML from AWS News API

## Install

```
$ yarn add @vladholubiev/aws-news-post-formatter
```

## Usage

It is meant to be used to prettify outputs of HTML from [aws-news-api-client](https://github.com/vladgolubev/aws-news-api-client).

```js
const {getFormattedHTML} = require('@vladholubiev/aws-news-post-formatter');

getFormattedHTML('<p>Some HTML</p>'); // returns formated and clean up HTML
```

Some of the things this library does:

- **Normalizes relative URLs to absolute URLs**
- Removes all `style` attributes, `style` tags, `class` attributes
- Normalizes tables to be full width
- Removes empty paragraphs and links
- Normalizes bullet points in lists
- Fixes double `<b>` tags and replaces them with `<strong>` tags
- Beautifies the output HTML

## See Also

- [aws-news-api-client](https://github.com/vladgolubev/aws-news-api-client)

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT
