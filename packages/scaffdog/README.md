![scaffdog](https://github.com/scaffdog/artwork/raw/main/repo-banner.png)

<p align="center">
  scaffdog is Markdown driven scaffolding tool.
</p>

<p align="center">
  <a href="https://github.com/scaffdog/scaffdog/actions?workflow=CI"><img src="https://img.shields.io/github/workflow/status/scaffdog/scaffdog/CI?logo=github&style=flat-square" alt="GitHub Workflow Status" /></a>
  <a href="https://www.npmjs.com/package/scaffdog"><img src="https://img.shields.io/npm/v/scaffdog?style=flat-square" alt="npm" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/scaffdog/scaffdog?label=license&style=flat-square" alt="MIT LICENSE" /></a>
</p>

# scaffdog

![DEMO](/packages/scaffdog/docs/assets/demo.gif)

Multiple files can be output in a document, and flexible scaffolding is possible with a simple but powerful template syntax :dog2:

## Documentation

Visit https://scaff.dog to view the full documentation.

## Features

- :pencil: **Markdown driven**
  - You can define a template with `<h1>` and code block.
  - It will be a Documetable template !
  - Define meta information with extended syntax using [Front Matter](https://jekyllrb.com/docs/front-matter/).
- :spiral_notepad: **Intuitive template**
  - It provides a simple yet powerful template engine inspired by [ECMAScript](https://tc39.es/ecma262/) and [Go text/template](https://pkg.go.dev/text/template).
  - Many built-in helper functions required to define templates are also provided.
- :rocket: **Ready to use**
  - You can quickly start using `$ scaffdog init`.
  - Other useful commands are provided for immediate scaffolding.
- :nail_care: **Prettier Integration**
  - Markdown works very well with Prettier, and the templates maintain beautiful code.
  - We also offer a Prettier Plugin for scaffdog's template engine.

## Requirements

- Node.js v14.16.0+

## Getting Started

### Installation

`scaffdog` can be installed globally, but we recommend installing it locally on the project.

```bash
$ npm install --save-dev scaffdog
```

### Quick Start

In the following tutorial you can start using `scaffdog` immediately !

#### Setup

By default, it stores the document file and configuration file in the `.scaffdog` directory.

Creating directories, configuration file and initial documents can be done with the `init` subcommand.

```bash
$ npx scaffdog init

? Please enter a document name. hello

Setup of scaffdog 🐶 is complete!

  ✔ .scaffdog/config.js
  ✔ .scaffdog/hello.md

Now you can do scaffold by running `$ scaffdog generate`.

Please refer to the following documents and customize it.
https://scaff.dog/docs/templates
```

After running the command, the `.scaffdog/hello.md` file should have been generated.

Let's scaffold using the `hello` document!

```bash
$ npx scaffdog generate hello

? Please select the output destination directory. .
? Please enter any text. pretty-dog

🐶 Generated 1 file!

     ✔ pretty-dog.md
```

Congratulations :tada:

The first file was generated.

```bash
$ cat pretty-dog.md

Let's make a document!
See scaffdog documentation for details.
https://scaff.dog/docs/templates
```

Please refer to this document and customize the document file :+1:

## Migration

There are important changes in the major update.

- [To v2 from v1](/MIGRATION.md#to-v2-from-v1)
- [To v1 from v0](/MIGRATION.md#to-v1-from-v0)

See [Migration Guide](/MIGRATION.md).

## Contributing

See [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

[MIT © wadackel](/LICENSE)

![Thank you for reading!](https://github.com/scaffdog/artwork/raw/main/repo-footer.png)
