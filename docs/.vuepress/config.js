module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: 'walle.png'
        }]
    ],
    title: '运维管理平台',
    description: '欢迎来到Walle运维管理平台',
    themeConfig: {
        lastUpdated: 'Last Updated',
        sidebar: 'auto',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: "运维平台",
                items: [{
                        text: '资源管理',
                        link: '/cmdb/'
                    },
                    {
                        text: '业务管理',
                        link: '/btree/'
                    },
                    {
                        text: '工单管理',
                        link: '/order/'
                    },
                    {
                        text: '作业平台',
                        link: '/jobs/'
                    },
                    {
                        text: '监控平台',
                        link: '/monitor/'
                    },
                    {
                        text: '容器平台',
                        link: '/container/'
                    },
                    {
                        text: '配置管理',
                        link: '/settings/'
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://github.com'
            }
        ]
    }
}