import { useStakePoolMetadataCtx } from 'providers/StakePoolMetadataProvider'

import Admin from '@/components/admin/Admin'

import AdminStakePool from './[stakePoolId]'

function Home() {
  const { data: stakePoolMetadata } = useStakePoolMetadataCtx()
  return <>{stakePoolMetadata ? <AdminStakePool /> : <Admin />}</>
}

export default Home