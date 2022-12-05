import styled from 'styled-components'

import { useAccount } from 'wagmi'
import { useTranslation } from '@pancakeswap/localization'
import { usePoolsPageFetch, usePoolsWithVault } from 'state/pools/hooks'
import PoolRow, { VaultPoolRow } from './components/PoolsTable/PoolRow'

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.radii.default};
  scroll-margin-top: 64px;

  background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

// const StyledTableBorder = styled.div`
//   border-radius: ${({ theme }) => theme.radii.default};
//   background-color: ${({ theme }) => theme.colors.cardBorder};
//   width: 100%;
//   padding: 1px 1px 1px 1px;
//   background-size: 400% 400%;
// `;

const Pools: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { pools, userDataLoaded } = usePoolsWithVault()

  usePoolsPageFetch()

  return (
      <StyledTable>
        {pools.map((pool) =>
          pool.vaultKey ? (
            <VaultPoolRow
              key={pool.vaultKey}
              vaultKey={pool.vaultKey}
              account={account}
            />
          ) : (
            // <PoolRow
            //   key={pool.sousId}
            //   sousId={pool.sousId}
            //   account={account}
            // />
            <></>
          ),
        )}
      </StyledTable>
  )
}

export default Pools
