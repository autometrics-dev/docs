# Command-Line Help for am

This document contains the help content for the `am` command-line program.

## `am`

Autometrics Companion CLI app

**Usage:** `am [OPTIONS] <COMMAND>`

###### **Subcommands:**

* `start` — Start scraping the specified endpoint(s), while also providing a web interface to inspect the autometrics data
* `system` — Manage am related system settings. Such as cleaning up downloaded Prometheus, Pushgateway installs
* `explore` — Open up the existing Explorer
* `proxy` — Use am as a proxy to another prometheus instance
* `init` — Create a new `am.toml` file interactively with sensible defaults
* `discord` — Open the Fiberplane discord to receive help, send suggestions or discuss various things related to Autometrics and the `am` CLI
* `update` — Run the updater
* `list` — List the functions in a project
* `instrument` — Instrument a project entirely

###### **Options:**

* `-v`, `--verbose` — Enable verbose logging. By enabling this you are also able to use RUST_LOG environment variable to change the log levels of other modules
* `--config-file <CONFIG_FILE>` — Use the following file to define defaults for am



## `am start`

Start scraping the specified endpoint(s), while also providing a web interface to inspect the autometrics data

**Usage:** `am start [OPTIONS] [METRICS_ENDPOINTS]...`

###### **Arguments:**

* `<METRICS_ENDPOINTS>` — The endpoint(s) that Prometheus will scrape.

###### **Options:**

* `--prometheus-version <PROMETHEUS_VERSION>` — The Prometheus version to use. It will be downloaded if am has not downloaded it already

  Default value: `v2.47.2`
* `--scrape-interval <SCRAPE_INTERVAL>` — The default scrape interval for all Prometheus jobs
* `-l`, `--listen-address <LISTEN_ADDRESS>` — The listen address for the web server of am

  Default value: `127.0.0.1:6789`
* `-p`, `--pushgateway-enabled <PUSHGATEWAY_ENABLED>` — Enable pushgateway

  Possible values: `true`, `false`

* `--pushgateway-version <PUSHGATEWAY_VERSION>` — The pushgateway version to use

  Default value: `v1.6.2`
* `--static-assets-url <STATIC_ASSETS_URL>`

  Default value: `https://explorer.autometrics.dev`
* `-d`, `--ephemeral` — Whenever to clean up files created by Prometheus/Pushgateway after successful execution
* `--no-rules` — Whenever to *NOT* load the autometrics rules file into Prometheus
* `--scrape-self` — Whenever to instruct Prometheus to scrape this `am` server as well

  Default value: `false`



## `am system`

Manage am related system settings. Such as cleaning up downloaded Prometheus, Pushgateway installs

**Usage:** `am system <COMMAND>`

###### **Subcommands:**

* `prune` — Delete all locally downloaded binaries



## `am system prune`

Delete all locally downloaded binaries

**Usage:** `am system prune [OPTIONS]`

###### **Options:**

* `-f`, `--force` — Force the cleanup without asking for confirmation

  Default value: `false`



## `am explore`

Open up the existing Explorer

**Usage:** `am explore [OPTIONS]`

###### **Options:**

* `--prometheus-endpoint <PROMETHEUS_ENDPOINT>` — The Prometheus endpoint that will be passed to Explorer
* `--explorer-endpoint <EXPLORER_ENDPOINT>` — Which endpoint to open in the browser

  Default value: `https://explorer.autometrics.dev/`



## `am proxy`

Use am as a proxy to another prometheus instance

**Usage:** `am proxy [OPTIONS]`

###### **Options:**

* `-l`, `--listen-address <LISTEN_ADDRESS>` — The listen address for the web server of am

  Default value: `127.0.0.1:6789`
* `--prometheus-url <PROMETHEUS_URL>` — The upstream Prometheus URL
* `--static-assets-url <STATIC_ASSETS_URL>`

  Default value: `https://explorer.autometrics.dev`



## `am init`

Create a new `am.toml` file interactively with sensible defaults

**Usage:** `am init [OPTIONS]`

###### **Options:**

* `--output <OUTPUT>` — Where the file should be outputted to. Defaults to current directory

  Default value: `./am.toml`
* `--force` — Whenever to forcefully override an existing `am.toml` file, if it already exists



## `am discord`

Open the Fiberplane discord to receive help, send suggestions or discuss various things related to Autometrics and the `am` CLI

**Usage:** `am discord`



## `am update`

Run the updater

**Usage:** `am update [OPTIONS]`

###### **Options:**

* `-f`, `--force` — Whenever to ignore Homebrew checks and forcefully update



## `am list`

List the functions in a project

**Usage:** `am list <COMMAND>`

###### **Subcommands:**

* `single` — List functions in a single project, giving the language implementation
* `all` — List functions in all projects under the given directory, detecting languages on a best-effort basis



## `am list single`

List functions in a single project, giving the language implementation

**Usage:** `am list single [OPTIONS] --language <LANGUAGE> <ROOT>`

###### **Arguments:**

* `<ROOT>` — Root of the project to start the search on:
- For Rust projects it must be where the Cargo.toml lie,
- For Go projects it must be the root of the repository,
- For Python projects it must be the root of the library,
- For Typescript projects it must be where the package.json lie.

###### **Options:**

* `-l`, `--language <LANGUAGE>` — Language to detect autometrics functions for. Valid values are:
- 'rust' or 'rs' for Rust,
- 'go' for Golang,
- 'typescript', 'ts', 'javascript', or 'js' for Typescript/Javascript,
- 'python' or 'py' for Python.
* `-a`, `--all-functions` — List all functions instead of only the autometricized ones (defaults to false)

  Default value: `false`
* `-p`, `--pretty` — Pretty print the resulting JSON (defaults to false)

  Default value: `false`



## `am list all`

List functions in all projects under the given directory, detecting languages on a best-effort basis

**Usage:** `am list all [OPTIONS] <ROOT>`

###### **Arguments:**

* `<ROOT>` — Main directory to start the subprojects search on. am currently detects Rust (Cargo.toml), Typescript (package.json), and Golang (go.mod) projects

###### **Options:**

* `-p`, `--pretty` — Pretty print the resulting JSON (defaults to false)

  Default value: `false`



## `am instrument`

Instrument a project entirely.

IMPORTANT: This will add code in your files! If you want to easily undo the effects of this command, stage your work in progress (using `git add` or similar) So that a command like `git restore .` can undo all unstaged changes, leaving your work in progress alone.

**Usage:** `am instrument <COMMAND>`

###### **Subcommands:**

* `single` — Instrument functions in a single project, giving the language implementation
* `all` — Instrument functions in all projects under the given directory, detecting languages on a best-effort basis



## `am instrument single`

Instrument functions in a single project, giving the language implementation

IMPORTANT: This will add code in your files! If you want to easily undo the effects of this command, stage your work in progress (using `git add` or similar) So that a command like `git restore .` can undo all unstaged changes, leaving your work in progress alone.

**Usage:** `am instrument single [OPTIONS] --language <LANGUAGE> <ROOT>`

###### **Arguments:**

* `<ROOT>` — Root of the project to start the search on:
- For Rust projects it must be where the Cargo.toml lie,
- For Go projects it must be the root of the repository,
- For Python projects it must be the root of the library,
- For Typescript projects it must be where the package.json lie.

###### **Options:**

* `-l`, `--language <LANGUAGE>` — Language to detect autometrics functions for. Valid values are:
- 'rust' or 'rs' for Rust,
- 'go' for Golang,
- 'typescript', 'ts', 'javascript', or 'js' for Typescript/Javascript,
- 'python' or 'py' for Python.
* `-e`, `--exclude <PATTERNS>` — A list of patterns to exclude from instrumentation. The patterns follow .gitignore rules, so `--exclude "/vendor/"` will exclude all the vendor subdirectory only at the root, and adding a pattern that starts with `!` will unignore a file or directory



## `am instrument all`

Instrument functions in all projects under the given directory, detecting languages on a best-effort basis.

IMPORTANT: This will add code in your files! If you want to easily undo the effects of this command, stage your work in progress (using `git add` or similar) So that a command like `git restore .` can undo all unstaged changes, leaving your work in progress alone.

**Usage:** `am instrument all [OPTIONS] <ROOT>`

###### **Arguments:**

* `<ROOT>` — Main directory to start the subprojects search on. am currently detects Rust (Cargo.toml), Typescript (package.json), and Golang (go.mod) projects

###### **Options:**

* `-e`, `--exclude <PATTERNS>` — A list of patterns to exclude from instrumentation. The patterns follow .gitignore rules, so `--exclude "/vendor/"` will exclude all the vendor subdirectory only at the root, and adding a pattern that starts with `!` will unignore a file or directory



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

