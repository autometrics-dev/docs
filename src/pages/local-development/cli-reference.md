# Command-Line Help for `am`

This document contains the help content for the `am` command-line program.

## `am`

**Usage:** `am [COMMAND]`

###### Subcommands:

* `start` — Start scraping the specified endpoint, while also providing a web interface to inspect the autometrics data
* `system` — Manage am related system settings

###### **Options:**

* `--markdown-help`



## `am start`

Start scraping the specified endpoint, while also providing a web interface to inspect the autometrics data

**Usage:** `am start [OPTIONS] [METRICS_ENDPOINTS]...`

###### Arguments:

* `<METRICS_ENDPOINTS>` — The endpoint(s) that Prometheus will scrape

###### Options:

* `--prometheus-version <PROMETHEUS_VERSION>` — The Prometheus version to use

  Default value: `v2.44.0`
* `-l`, `--listen-address <LISTEN_ADDRESS>` — The listen address for the web server of am

  Default value: `127.0.0.1:6789`
* `-e`, `--enable-gateway` — Startup the gateway as well



## `am system`

Manage am related system settings

**Usage:** `am system <COMMAND>`

###### Subcommands:

* `prune` — Delete all locally downloaded binaries



## `am system prune`

Delete all locally downloaded binaries

**Usage:** `am system prune [OPTIONS]`

###### Options:

* `-f`, `--force` — Force the cleanup without asking for confirmation

  Default value: `false`



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

