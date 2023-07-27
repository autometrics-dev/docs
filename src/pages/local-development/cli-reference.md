# Command-Line Help for `autometrics-am`

This document contains the help content for the `autometrics-am` command-line program.

**Command Overview:**

* [`autometrics-am`↴](#autometrics-am)
* [`autometrics-am start`↴](#autometrics-am-start)
* [`autometrics-am system`↴](#autometrics-am-system)
* [`autometrics-am system prune`↴](#autometrics-am-system-prune)
* [`autometrics-am explore`↴](#autometrics-am-explore)
* [`autometrics-am discord`↴](#autometrics-am-discord)

## `autometrics-am`

**Usage:** `autometrics-am [OPTIONS] <COMMAND>`

###### **Subcommands:**

* `start` — Start scraping the specified endpoint(s), while also providing a web interface to inspect the autometrics data
* `system` — Manage am related system settings. Such as cleaning up downloaded Prometheus, Pushgateway installs
* `explore` — Open up the existing Explorer
* `discord` — Open the Fiberplane discord to receive help, send suggestions or discuss various things related to Autometrics and the `am` CLI

###### **Options:**

* `-v`, `--verbose` — Enable verbose logging. By enabling this you are also able to use RUST_LOG environment variable to change the log levels of other modules
* `--config-file <CONFIG_FILE>` — Use the following file to define defaults for am



## `autometrics-am start`

Start scraping the specified endpoint(s), while also providing a web interface to inspect the autometrics data

**Usage:** `autometrics-am start [OPTIONS] [METRICS_ENDPOINTS]...`

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



## `autometrics-am system`

Manage am related system settings. Such as cleaning up downloaded Prometheus, Pushgateway installs

**Usage:** `autometrics-am system <COMMAND>`

###### **Subcommands:**

* `prune` — Delete all locally downloaded binaries



## `autometrics-am system prune`

Delete all locally downloaded binaries

**Usage:** `autometrics-am system prune [OPTIONS]`

###### **Options:**

* `-f`, `--force` — Force the cleanup without asking for confirmation

  Default value: `false`



## `autometrics-am explore`

Open up the existing Explorer

**Usage:** `autometrics-am explore [OPTIONS]`

###### **Options:**

* `--prometheus-endpoint <PROMETHEUS_ENDPOINT>` — The Prometheus endpoint that will be passed to Explorer
* `--explorer-endpoint <EXPLORER_ENDPOINT>` — Which endpoint to open in the browser

  Default value: `http://localhost:6789/explorer`



## `autometrics-am discord`

Open the Fiberplane discord to receive help, send suggestions or discuss various things related to Autometrics and the `am` CLI

**Usage:** `autometrics-am discord`



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

