import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

/**
 * @link https://iconify.design/docs/libraries/utils/icon-customisations.html
 */
import { IconifyIconCustomisations } from '@iconify/utils'

export default defineConfig({
    content: {
        filesystem: [
            '**/**/*.vue',
        ]
    },
    // 配置缩写
    shortcuts: {
        "wh-full": "w-full h-full",
        "f-col": "flex flex-col",
    },
    // 配置规则
    rules: [

    ],
    theme: {
        colors: {
            // ...
        },
        // 断点, 用于移动端适配， 不考虑适配PC，因为这个项目只是移动端，只考虑H5和平板
        breakpoints: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        // 预设图标
        presetIcons({
            prefix: 'i-',
            collections: {
                // 使用tabler图标集: https://icones.js.org/collection/tabler
                // 配置集合缩写名为tb
                // 图标使用格式: i-tb-<icon> 或者 i-tb:<icon>
                tabler: () => import('@iconify-json/tabler/icons.json').then(i => i.default)
            },
            extraProperties: {
                'display': "inline-block",
                'vertical-align': 'middle'
            },
            customizations: {
                // 在这里配置图标的全局通用属性, 比如统一宽高
                customize(props: Required<IconifyIconCustomisations>) {
                    props.width = '2em';
                    props.height = '2em'
                    return props
                },
                // 对特定的图标自定义
                iconCustomizer(collection, icon, props) {
                    // 判断collect和icon, 然后设置props, 不需要返回值
                }
            }
        }),
        presetTypography(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})