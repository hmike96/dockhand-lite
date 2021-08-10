`dhl build`
===========

save new versions of published artifacts

* [`dhl build:complete-publish`](#dhl-buildcomplete-publish)
* [`dhl build:list-dependencies`](#dhl-buildlist-dependencies)
* [`dhl build:list-publish`](#dhl-buildlist-publish)

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
  --gitRemote=gitRemote             git remote name
  --gitRemoteRef=gitRemoteRef       git remote ref
  --outputPrefix=outputPrefix       prepend keys to output object
  --tag=tag                         tag always applied
  --tagTip=tagTip                   tag only applied if this is the branch tip
  --versionPrefix=versionPrefix     [default: build-] version prefix
```

_See code: [src/commands/build/complete-publish.ts](https://github.com/boxboat/dockhand-lite/blob/v0.1.0/src/commands/build/complete-publish.ts)_

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

_See code: [src/commands/build/list-dependencies.ts](https://github.com/boxboat/dockhand-lite/blob/v0.1.0/src/commands/build/list-dependencies.ts)_

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
  --gitRemote=gitRemote             git remote name
  --gitRemoteRef=gitRemoteRef       git remote ref
  --outputPrefix=outputPrefix       prepend keys to output object
  --tag=tag                         tag always applied
  --tagTip=tagTip                   tag only applied if this is the branch tip
  --versionPrefix=versionPrefix     [default: build-] version prefix
```

_See code: [src/commands/build/list-publish.ts](https://github.com/boxboat/dockhand-lite/blob/v0.1.0/src/commands/build/list-publish.ts)_
