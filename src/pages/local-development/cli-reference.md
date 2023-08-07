# Command-Line Help for am

This document contains the help content for the `am` command-line program.

**Command Overview:**

* [`am`↴](#am)
* [`am start`↴](#am-start)
* [`am system`↴](#am-system)
* [`am system prune`↴](#am-system-prune)
* [`am explore`↴](#am-explore)
* [`am init`↴](#am-init)
* [`am discord`↴](#am-discord)
* [`am update`↴](#am-update)

## `am`

**Usage:** `autometrics-am [OPTIONS] <COMMAND>`

###### **Subcommands:**

* `start` — Start scraping the specified endpoint(s), while also providing a web interface to inspect the autometrics data
* `system` — Manage am related system settings. Such as cleaning up downloaded Prometheus, Pushgateway installs
* `explore` — Open up the existing Explorer
* `init` — Create a new `am.toml` file interactively with sensible defaults
* `discord` — Open the Fiberplane discord to receive help, send suggestions or discuss various things related to Autometrics and the `am` CLI
* `update` — Run the updater

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

  Default value: `v2.45.0`
* `--scrape-interval <SCRAPE_INTERVAL>` — The default scrape interval for all Prometheus jobs
* `-l`, `--listen-address <LISTEN_ADDRESS>` — The listen address for the web server of am

  Default value: `127.0.0.1:6789`
* `-p`, `--pushgateway-enabled <PUSHGATEWAY_ENABLED>` — Enable pushgateway

  Possible values: `true`, `false`

* `--pushgateway-version <PUSHGATEWAY_VERSION>` — The pushgateway version to use

  Default value: `v1.6.0`
* `-d`, `--ephemeral` — Whenever to clean up files created by Prometheus/Pushgateway after successful execution
* `--no-rules` — Whenever to *NOT* load the autometrics rules file into Prometheus



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

  Default value: `http://localhost:6789/explorer`



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



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

