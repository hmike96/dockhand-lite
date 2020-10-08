import {Command} from '@oclif/command'
import {artifactNameOptionalFlag, artifactTypeOptionalFlag, globalFlags} from '../../flags/Flags'
import {parseConfigAsync} from '../../config/Config'
import {Build} from '../../lib/build/Build'
import {output} from '../../utils/utils'

export default class BuildListDependencies extends Command {
  static description = 'list of artifacts that are dependencies'

  static flags = {
    ...globalFlags,
    ...artifactNameOptionalFlag,
    ...artifactTypeOptionalFlag,
  }

  async run() {
    const {flags} = this.parse(BuildListDependencies)
    const config = await parseConfigAsync(flags.globalConfig, flags.repoConfig)
    const build = new Build(config.global, config.build, flags.outputType)
    const data = await build.listDependenciesAsync(flags.artifactType, flags.artifactName)
    output(flags.outputType, data)
  }
}
