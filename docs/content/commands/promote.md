`dhl promote`
=============

save new versions of published artifacts

* [`dhl promote:complete-publish`](#dhl-promotecomplete-publish)
* [`dhl promote:list-publish`](#dhl-promotelist-publish)

## `dhl promote:complete-publish`

save new versions of published artifacts

```
USAGE
  $ dhl promote:complete-publish

OPTIONS
  -c, --repoConfig=repoConfig            (required) repo config json or yaml file
  -g, --globalConfig=globalConfig        (required) global config json or yaml file
  -h, --help                             show CLI help
  -o, --outputType=table|json|yaml       [default: json] output format
  --artifactName=artifactName            artifact name
  --artifactType=artifactType            artifact type
  --event=event                          event
  --gitConnectionKey=gitConnectionKey    git connection key
  --gitConnectionPath=gitConnectionPath  git connection path
  --outputPrefix=outputPrefix            prepend keys to output object
  --promotion=promotion                  (required) promotion
  --tag=tag                              tag always applied
  --tagTip=tagTip                        tag only applied if this is the branch tip
  --version=version                      version
```

_See code: [src/commands/promote/complete-publish.ts](https://github.com/boxboat/dockhand-lite/blob/v0.1.0/src/commands/promote/complete-publish.ts)_

## `dhl promote:list-publish`

list of artifacts that should be published

```
USAGE
  $ dhl promote:list-publish

OPTIONS
  -c, --repoConfig=repoConfig            (required) repo config json or yaml file
  -g, --globalConfig=globalConfig        (required) global config json or yaml file
  -h, --help                             show CLI help
  -o, --outputType=table|json|yaml       [default: json] output format
  --artifactName=artifactName            artifact name
  --artifactType=artifactType            artifact type
  --event=event                          event
  --gitConnectionKey=gitConnectionKey    git connection key
  --gitConnectionPath=gitConnectionPath  git connection path
  --outputPrefix=outputPrefix            prepend keys to output object
  --promotion=promotion                  (required) promotion
  --tag=tag                              tag always applied
  --tagTip=tagTip                        tag only applied if this is the branch tip
  --version=version                      version
```

_See code: [src/commands/promote/list-publish.ts](https://github.com/boxboat/dockhand-lite/blob/v0.1.0/src/commands/promote/list-publish.ts)_
