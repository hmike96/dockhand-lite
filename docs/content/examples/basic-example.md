---
title: Basic
weight: 10
---

{{< toc >}}

## Setting Up

Make a temporary directory to use for the example.  This example uses `/tmp/dhl` throughout, but you can use any directory.

```bash
TMP_DIR="/tmp/dhl"
mkdir "$TMP_DIR"
```

**Optinal - use Docker to run dhl**

If using `docker` to run the dhl CLI, define the following function in your shell:

```bash
dhl () { docker run --rm -v "$TMP_DIR:$TMP_DIR" -w "$(pwd)" boxboat/dockhand-lite dhl "$@"; }
```

## Setup Build Versions Repository

Setup an empty git repository to store [Build Versions](/usage/build-versions)

```bash
cd "$TMP_DIR"
git init -b main --bare build-versions.git
git clone "$TMP_DIR/build-versions.git"
cd build-versions
git checkout -b main
echo "# dockhand-lite build versions" > README.md
git add README.md
git commit -m "initial commit"
git push -u origin main
```

## Create Global and Repo Base Config Files

Create a file named `global.yaml`:

```yaml
artifactRepoMap:
  default:
    host: index.docker.io

buildVersions:
  gitRepo:
    gitConnectionKey: local
    path: build-versions.git

environmentMap:
  nonprod:
    cluster: nonprod-01
  prod:
    cluster: prod-01

gitConnectionMap:
  local:
    authorName: dockhand
    authorEmail: dockhand@example.com
    # absolute path to your tmp dir
    pathPrefix: /tmp/dhl/
```

Create a file named `repo-base.yaml`:

```yaml
common:
  artifactPublishEvents:
    - artifactType: docker
      event: commit/main
      artifactRepoKey: default
    - artifactType: docker
      eventRegex: tag/.*
      artifactRepoKey: default

promote:
  promotionMap:
    stage:
      event: commit/main
      promoteToEvent: tag/rc
    prod:
      event: tag/rc
      promoteToEvent: tag/release

deploy:
  deploymentMap:
    dev:
      event: commit/main
      environmentKey: nonprod
    stage:
      event: tag/rc
      environmentKey: nonprod
    prod:
      event: tag/release
      environmentKey: prod
```

## Setup Service

Create a local `service` repository:

```bash
cd "$TMP_DIR"
git init --bare -b main service.git
git clone "$TMP_DIR/service.git"
cd service
git checkout -b main
```

Add a file called `dockhand.yaml`:

```yaml
common:
  artifacts:
    docker:
      - ns/service-name

promote:
  baseVersion: "1.0.0"
```

Commit your changes:

```bash
git add dockhand.yaml
git commit -m "add service"
git push -u origin main
```

## Setup Deployment

Create a Deployment repository:

```bash
cd "$TMP_DIR"
mkdir deployment
cd deployment
```

Add a file called `dockhand.yaml`:

```yaml
common:
  artifacts:
    docker:
      - ns/service-name
```

## Dev

### Service Build Artifact Publish

Use `dhl build:list-publish` to determine which artifact versions to publish:

```bash
cd "$TMP_DIR/service"
dhl build:list-publish -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml -o table
```

{{< hint info >}}
Typically you would use `-o json` or `-o yaml` and parse the output of this command using `jq`, `yq`, or similar.  Then, you would use `docker` to push the artifact to the `version` number.
{{< /hint >}}

Use `dhl build:complete-publish` to commit these artifact versions to `build-versions`:

```bash
dhl build:complete-publish -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml -o table
```

### Dev Deployment

Use `deploy:list-dependencies` for the `dev` deployment to view service versions:

```bash
cd "$TMP_DIR/deployment"
dhl deploy:list-dependencies -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml --deployment dev -o table
```

{{< hint info >}}
For use with helm, try `--outputMap -o yaml` and use the outut as a `helm` values file.
{{< /hint >}}

## Stage

### Stage Service Promotion

Use `dhl promote:list-publish` to determine which artifact versions to promote:

```bash
cd "$TMP_DIR/service"
dhl promote:list-publish -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml --promotion stage -o table
```

Use `dhl promote:complete-publish` to commit these artifact versions to `build-versions`:

```bash
dhl promote:complete-publish -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml --promotion stage -o table
```

### Stage Deployment

Use `deploy:list-dependencies` for the `stage` deployment to view service versions:

```bash
cd "$TMP_DIR/deployment"
dhl deploy:list-dependencies -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml --deployment stage -o table
```

## Prod

### Prod Service Promotion

Same as stage promotion, except

```bash
cd "$TMP_DIR/service"
dhl promote:list-publish -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml --promotion stage -o table
```

Use `dhl promote:complete-publish` to commit these artifact versions to `build-versions`:

```bash
dhl promote:complete-publish -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml --promotion stage -o table
```

### Prod Deployment

Use `deploy:list-dependencies` for the `prod` deployment to view service versions:

```bash
cd "$TMP_DIR/deployment"
dhl deploy:list-dependencies -g ../global.yaml -c ../repo-base.yaml -c dockhand.yaml --deployment prod -o table
```
