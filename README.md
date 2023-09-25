# aws-news-post-formatter [![CircleCI](https://circleci.com/gh/vladgolubev/aws-news-post-formatter/tree/master.svg?style=svg)](https://circleci.com/gh/vladgolubev/aws-news-post-formatter/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Fixes HTML from AWS News API and converts it to a clean html, markdown and text;
> Extracts custom tags based on the headline

## Install

```
$ yarn add @vladholubiev/aws-news-post-formatter
```

## Usage

It is meant to be used to prettify outputs of HTML from [aws-news-api-client](https://github.com/vladgolubev/aws-news-api-client).

It also parses custom tags based on the post headline.

```js
const {getPostBody, getCustomTags} = require('@vladholubiev/aws-news-post-formatter');

getPostBody('<p>Some HTML</p>'); // returns {html, markdown, text}

getCustomTags('AWS Fargate Supports Container Workloads Regulated By ISO, PCI, SOC, and HIPAA'); // ['iso', 'pci-dss', 'soc', 'hipaa']
```

### Things this library does with HTML formatting

- **Normalizes relative URLs to absolute URLs**
- Removes all `style` attributes, `style` tags, `class` attributes
- Normalizes tables to be full width
- Fixes table formatting to have headers
- Removes empty paragraphs and links
- Normalizes bullet points in lists
- Fixes double `<b>` tags and replaces them with `<strong>` tags

### Moreover

- Converts HTML to markdown with table support
- Converts HTML to text with readable tables!

### Custom tags extraction

Extracts tags based on the headline. Useful if you want to filter out noise. List of tags:

- hipaa
- iso
- pci-dss
- hitrust
- soc
- fips
- nne
- irap
- fedramp
- disa-stig
- pki
- gxp
- govcloud
- aws-pop-up
- aws-well-architected
- oracle-db
- quick-start
- partner-network
- aws-competency
- courses
- aws-marketplace
- solution-consulting
- regional-expansion
- tagging
- language-expansion
- bottlerocket
- free-rtos
- sap
- launch-wizard

Check out `src/custom-tags` if you want to add more tags or adjust the existing ones.

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
