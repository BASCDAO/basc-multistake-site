import { Banner } from 'common/Banner'
import { FooterSlim } from 'common/FooterSlim'
import { useAllStakePools } from 'hooks/useAllStakePools'
import Head from 'next/head'

import { CollectionsView } from './CollectionsView'
import { MainHero } from './MainHero'

function Homepage() {
  const allStakePools = useAllStakePools()

  return (
    <div className="bg-dark-5" style={
      {
        backgroundImage:"url('https://basc.s3.amazonaws.com/img/basc_stake.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        boxShadow: 'inset 0 0 0 1000px rgb(0 0 0 / 40%)'
      }
      }>
      <Head>
        <title>BASC Staking UI</title>
        <meta name="description" content="BASC Staking UI" />
        <link rel="icon" href={'/favicon.ico'} />
        <script
          defer
          data-domain="stake.bascdao.net"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>

      <Banner />
      <MainHero />
      <div className="mx-auto flex flex-col gap-16 px-8 md:px-16">
        <CollectionsView
          configs={allStakePools.data?.stakePoolsWithMetadata.filter(
            (pool) => !pool.stakePoolMetadata?.hidden
          )}
        />
      </div>
      <FooterSlim />
    </div>
  )
}

export default Homepage
