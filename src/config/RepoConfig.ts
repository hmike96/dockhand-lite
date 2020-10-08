import {IRepoConfigFile, IRepoConfig} from '../spec/repo/IRepoConfig'
import {cloneDeep, merge} from 'lodash'
import {parseMultiConfigAsync} from './ConfigReader'

function repoConfigMerge(...configs: IRepoConfigFile[]): IRepoConfigFile {
  const base = {
    common: {},
    build: {},
    promote: {},
    deploy: {},
  } as IRepoConfigFile

  merge(base, ...configs)
  base.build = merge(cloneDeep(base.common), base.build)
  base.promote = merge(cloneDeep(base.common), base.promote)
  base.deploy = merge(cloneDeep(base.common), base.deploy)

  return base
}

export async function parseRepoConfigAsync(globalRepo: IRepoConfigFile, configFiles: string[]) {
  const configs = await parseMultiConfigAsync<IRepoConfigFile>('#/definitions/IRepoConfigFile', configFiles)
  const repoFile = repoConfigMerge(globalRepo, ...configs)
  const repo = repoFile as IRepoConfig
  delete (repo as any).common
  return repo
}
