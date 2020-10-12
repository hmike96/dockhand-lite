dockhand-lite
=============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![main](https://github.com/boxboat/dockhand-lite/workflows/main/badge.svg)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dockhand-lite
$ dhl COMMAND
running command...
$ dhl (-v|--version|version)
dockhand-lite/0.0.1 linux-x64 node-v12.19.0
$ dhl --help [COMMAND]
USAGE
  $ dhl COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dhl build:complete-publish`](#dhl-buildcomplete-publish)
* [`dhl build:list-dependencies`](#dhl-buildlist-dependencies)
* [`dhl build:list-publish`](#dhl-buildlist-publish)
* [`dhl deploy:list-dependencies`](#dhl-deploylist-dependencies)
* [`dhl help [COMMAND]`](#dhl-help-command)

## `dhl build:complete-publish`

save new versions of published artifacts

```
USAGE
  $ dhl build:complete-publish

OPTIONS
  -c, --repoConfig=repoConfig       (required) repo config json or yaml file
  -g, --globalConfig=globalConfig   (required) global config json or yaml file
  -h, --help                        show CLI help
  -o, --outputType=table|json|yaml  [default: json] output format
  --artifactName=artifactName       artifact name
  --artifactType=artifactType       artifact type
  --event=event                     event
  --outputPrefix=outputPrefix       prepend keys to output object
```

_See code: [src/commands/build/complete-publish.ts](https://github.com/boxboat/dockhand-lite/blob/v0.0.1/src/commands/build/complete-publish.ts)_

## `dhl build:list-dependencies`

list of artifacts that are dependencies

```
USAGE
  $ dhl build:list-dependencies

OPTIONS
  -c, --repoConfig=repoConfig       (required) repo config json or yaml file
  -g, --globalConfig=globalConfig   (required) global config json or yaml file
  -h, --help                        show CLI help
  -o, --outputType=table|json|yaml  [default: json] output format
  --artifactName=artifactName       artifact name
  --artifactType=artifactType       artifact type
  --outputMap                       convert output from table to map
  --outputPrefix=outputPrefix       prepend keys to output object
```

_See code: [src/commands/build/list-dependencies.ts](https://github.com/boxboat/dockhand-lite/blob/v0.0.1/src/commands/build/list-dependencies.ts)_

## `dhl build:list-publish`

list of artifacts that should be published

```
USAGE
  $ dhl build:list-publish

OPTIONS
  -c, --repoConfig=repoConfig       (required) repo config json or yaml file
  -g, --globalConfig=globalConfig   (required) global config json or yaml file
  -h, --help                        show CLI help
  -o, --outputType=table|json|yaml  [default: json] output format
  --artifactName=artifactName       artifact name
  --artifactType=artifactType       artifact type
  --event=event                     event
  --outputPrefix=outputPrefix       prepend keys to output object
```

_See code: [src/commands/build/list-publish.ts](https://github.com/boxboat/dockhand-lite/blob/v0.0.1/src/commands/build/list-publish.ts)_

## `dhl deploy:list-dependencies`

list of artifacts that are dependencies

```
USAGE
  $ dhl deploy:list-dependencies

OPTIONS
  -c, --repoConfig=repoConfig       (required) repo config json or yaml file
  -g, --globalConfig=globalConfig   (required) global config json or yaml file
  -h, --help                        show CLI help
  -o, --outputType=table|json|yaml  [default: json] output format
  --artifactName=artifactName       artifact name
  --artifactType=artifactType       artifact type
  --deployment=deployment           (required) deployment
  --outputMap                       convert output from table to map
  --outputPrefix=outputPrefix       prepend keys to output object
```

_See code: [src/commands/deploy/list-dependencies.ts](https://github.com/boxboat/dockhand-lite/blob/v0.0.1/src/commands/deploy/list-dependencies.ts)_

## `dhl help [COMMAND]`

display help for dhl

```
USAGE
  $ dhl help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
