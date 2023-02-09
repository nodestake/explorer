import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'chains',
      children: blockchains,
      tag: `${blockchains.length}`,
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://explorer.nodestake.top',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Website',
      href: 'http://nodestake.top',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Discord',
    href: 'https://discord.gg/puGTkXvkE8',
    icon: 'MessageSquareIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/Nodestake_top',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'REStake',
    href: 'https://restake.nodestake.top',
    icon: 'CastIcon',
  })

  return chainMenus
}

export default processMenu()
