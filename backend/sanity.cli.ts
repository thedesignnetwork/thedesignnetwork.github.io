import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'l40bck5h',
    dataset: 'production',
  },
  deployment: {
    appId: 'j5saau54unpne86fjjt99sj8',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
