## General Information

This website (articles, design, ...) is developed via [Github](https://github.com/codeism-community/docs). **Note that only the students of IIT(ISM) can contribute to the project**.

Generated pages are compiled and published at [https://codeism-community.github.io/docs](https://codeism-community.github.io/docs).

In order to make contribution consider the following steps:

1. Fork this repository.
2. Modify the files, articles, etc (except the configuration and site specific files)
3. Make a commit and push to your forked repository.
4. Create a pull-request by clicking the _Compare & pull request_ button.
5. Somebody from the core team will look over the changes. This might take a few hours/days.

If you're making a new article or moving existing one to a different place, please make sure that your changes are reflected in

- The list of all articles in [navigation.md](https://github.com/CodeISM-Community/docs/blob/main/docs/navigation.md). (The navigation list should be in proper format)

## Syntax

We use [Markdown](https://daringfireball.net/projects/markdown) for the articles, and use the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) to render the Markdown articles into HTML.

For advanced Markdown features of Material for MkDocs see their [reference pages](https://squidfunk.github.io/mkdocs-material/reference/formatting), like:

- [Math formulas with MathJax](https://squidfunk.github.io/mkdocs-material/reference/mathjax/#usage)
  Notice that you need to have an empty line before and after a `$$` math block.
- [Code blocks](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/#usage) for code snippets.

However not everything of the features should be used, and some of the features are not enabled or require a paid subscription.

By default the first header (`# header`) will be also the HTML title of the article. 

## Adding Content

Try to add the content matter of the topic in a clear and consise form. Things should not be repeated and if external sources are required to be referenced for the topic, then references should be added to the end of the file. <br>
There should only be 1 Heading on the article and all the subheadings should match directly with the heading and the flow should be simple. Approaches should be discussed briefly from the naive to the most optimised and expamples should be given as and when required.

## Adding Problems

Try to add problems in ascending order of their difficulty. If you don't have enough time to do so, still add the problem. Lets hope that the next person will sort them accordingly.

## Local development

You can render the pages locally. All you need is Python, with the installed `mkdocs-material` package.

```console
$ git clone https://github.com/codeism-community/docs.git && cd docs
$ pip install \
        mkdocs \
        mkdocs-material \
        pymdown-extensions \
        mkdocs-include-markdown-plugin \
        mkdocs-git-committers-plugin-2 \
        mkdocs-literate-nav
$ mkdocs serve
```

