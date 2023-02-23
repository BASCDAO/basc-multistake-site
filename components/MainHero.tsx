import { PlusIcon } from '@heroicons/react/24/solid'
import { HeaderSlim } from 'common/HeaderSlim'
import { withCluster } from 'common/utils'
import { useAllStakePools } from 'hooks/useAllStakePools'
import { useStat } from 'hooks/useStat'
import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'

import { ButtonPrimary } from '@/components/UI/buttons/ButtonPrimary'
import { BodyCopy } from '@/components/UI/typography/BodyCopy'
import { HeadingPrimary } from '@/components/UI/typography/HeadingPrimary'

import { ButtonWidths } from '../types'

export const MainHero = () => {
  const { environment } = useEnvironmentCtx()
  const allStakePools = useAllStakePools()
  const totalStakedTokens = useStat('total-active-staked-tokens')
  const router = useRouter()
  return (
    <div className="relative z-0 text-sm">
      <div className="blur-4xl absolute left-8 top-52 -z-10 h-[120px] w-[400px] -rotate-[60deg] bg-glow blur-[100px]" />
      <div className="blur-4xl absolute -right-20 top-72 -z-10 h-[100px] w-[550px] -rotate-[60deg] bg-glow blur-[120px]" />
      <HeaderSlim />
      <div className="flex flex-wrap justify-between gap-10 px-8 py-24 md:px-16">
        <div className="flex flex-col gap-2">
          <HeadingPrimary className="mb-2">Bored Ape Solana Club Vault</HeadingPrimary>
          <div className="text-lg text-white">
            Stake your Apes (and friends) to keep them safe!
            <br />
            
          </div>
        </div>
        <div className="flex flex-col items-end justify-end gap-5 ">
        {/**
          <div className="flex items-center gap-2 lg:gap-6">
            <BodyCopy className="text-right">
              Does your NFT collection or tokens need staking?
            </BodyCopy>
            <ButtonPrimary
              onClick={() => {
                router.push(withCluster('/admin/create', environment.label))
              }}
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              Create new pool
            </ButtonPrimary>
          </div>
          */}
          {/** 
          <div className="flex w-fit flex-wrap gap-3 rounded-xl border-[2px] border-border p-4">
            {statsNameMapping.map(({ displayName, key }) => (
              <div className="flex items-center gap-2" key={key}>
                <div className="text-medium-3">{displayName}</div>
                <div className="text-light-0">
                  {stats.data && stats.data[key] ? (
                    Number(stats.data[key]!.value).toLocaleString('en-US')
                  ) : (
                    <div className="mt-[1px] h-5 w-12 animate-pulse rounded-md bg-border" />
                  )}
                </div>
              </div>
            ))}
          </div>
          */}
        </div>
      </div>
    </div>
  )
}
