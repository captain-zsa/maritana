export default {

    // Target: https://go.nuxtjs.dev/config-target
    target : 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head : {
        title     : 'Персональный стилист Марина Козырева',
        htmlAttrs : {
            lang : 'ru',
        },
        meta : [
            { charset: 'utf-8' },
            {
                name    : 'viewport',
                content : 'width=device-width, initial-scale=1',
            },
        ],
        link : [
            {
                rel  : 'icon',
                type : 'image/x-icon',
                href : '/favicon.ico',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css : [
        '~/assets/styles/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins : [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components : true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules : [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules : [
        '@nuxtjs/style-resources',
    ],

    styleResources : {
        scss : [
            '~/assets/styles/ds-system/ds-colors.scss',
            '~/assets/styles/ds-system/ds-typography.scss',
            '~/assets/styles/ds-system/ds-breakpoints.scss',
            '~/assets/styles/ds-system/ds-mixins.scss',
        ],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build : {
    },
};
