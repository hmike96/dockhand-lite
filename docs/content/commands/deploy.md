`dhl deploy`
============

list of artifacts that are dependencies

* [`dhl deploy:environment`](#dhl-deployenvironment)
* [`dhl deploy:list-dependencies`](#dhl-deploylist-dependencies)

## `dhl deploy:environment`

list of artifacts that are dependencies

```
USAGE
  $ dhl deploy:environment

OPTIONS
  -c, --repoConfig=repoConfig       (required) repo config json or yaml file
  -g, --globalConfig=globalConfig   (required) global config json or yaml file
  -h, --help                        show CLI help
  -o, --outputType=table|json|yaml  [default: json] output format
  --deployment=deployment           (required) deployment
  --outputPrefix=outputPrefix       prepend keys to output object
```

_See code: [src/commands/deploy/environment.ts](https://github.com/boxboat/dockhand-lite/blob/v0.1.0/src/commands/deploy/environment.ts)_

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

_See code: [src/commands/deploy/list-dependencies.ts](https://github.com/boxboat/dockhand-lite/blob/v0.1.0/src/commands/deploy/list-dependencies.ts)_
