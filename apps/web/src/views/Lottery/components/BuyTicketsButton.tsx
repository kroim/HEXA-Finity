import { Button, useModal, WaitIcon, ButtonProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useLottery } from 'state/lottery/hooks'
import { useTheme } from 'styled-components'
import { LotteryStatus } from 'config/constants/types'
import BuyTicketsModal from './BuyTicketsModal/BuyTicketsModal'

interface BuyTicketsButtonProps extends ButtonProps {
  disabled?: boolean
  themeMode?: string
  icon?: boolean
}

const BuyTicketsButton: React.FC<React.PropsWithChildren<BuyTicketsButtonProps>> = ({
  disabled,
  themeMode,
  icon,
  ...props
}) => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const [onPresentBuyTicketsModal] = useModal(<BuyTicketsModal />)
  const {
    currentRound: { status },
  } = useLottery()

  const getBuyButtonText = () => {
    if (status === LotteryStatus.OPEN) {
      return t('Buy Tickets')
    }
    return (
      <>
        <WaitIcon mr="4px" color="textDisabled" /> {t('On sale soon!')}
      </>
    )
  }

  const themeStr = themeMode ?? (isDark ? 'dark' : 'light')

  return (
    <Button data-theme={themeStr} {...props} disabled={disabled} onClick={onPresentBuyTicketsModal}>
      {getBuyButtonText()}
      {icon && <div style={{ paddingLeft: 5}}>
        <img src='/img/lottery/ticket-btn-icon.svg' style={{ width: 17, height: 17 }} /></div>}
    </Button>
  )
}

export default BuyTicketsButton
