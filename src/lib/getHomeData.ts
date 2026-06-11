import { homeData } from '@/data/home'
import { HomeData, HeroData, AboutPreviewData, FooterData } from '@/types/common'

export function getHomeData(): HomeData {
  return homeData
}

export function getHeroData(): HeroData {
  return homeData.hero
}

export function getAboutData(): AboutPreviewData {
  return homeData.about
}

export function getFooterData(): FooterData {
  return homeData.footer
}
