import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import en from './en.js'
import zh from './zh'
import jp from './jp'

export const resources = {
    en: {
        translation: en
    },
    zh: {
        translation: zh
    },
    jp: {
        translation: jp
    }
}
// const navigatorLang = navigator.language.slice(0, 2)
// const navigatorLang = 'jp'
// export const locale = localStorage.getItem('lang') || (Object.keys(resources).includes(navigatorLang) ? navigatorLang : 'jp')
export const locale = 'jp'

i18n.use(initReactI18next).init({
    resources,
    lng: locale,
    returnObjects: true,
    interpolation: {
        escapeValue: false,
    }
})
