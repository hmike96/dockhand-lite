---
title: Getting Started
weight: 20
---

{{< toc >}}

## Get the CLI

### Using Docker

```bash
alias dhl="docker run --rm -v "$(pwd):/workspace" boxboat/dockhand-lite dhl"
dhl help
```

### Installing via NPM or Yarn

**NPM**

```bash
npm install -g @boxboat/dockhand-lite
dhl help
```

**Yarn**

```bash
yarn global add @boxboat/dockhand-lite
dhl help
```
