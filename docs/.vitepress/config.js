import { getDemoSidebar, getBuildHelpSideBar } from './sidebar';

module.exports = {
	base: '/liangren-blog/',
	title: 'Peng-仁兄博客',
	description: 'Just playing around.',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/favicon.ico'
			}
		]
	],
	themeConfig: {
		smoothScroll: true,
		// 展示搜索框
		algolia: {
			apiKey: '',
			indexName: '',
			searchParameters: {
				faeFilters: [ 'tags:guide,api' ]
			}
		},
		nav: [
			{
				text: '首页',
				link: '/'
			},
			{
				text: '搭建参考教程',
				link: '/buildHelp/'
			},
			{
				text: '掘金',
				link: 'https://juejin.cn/user/1978776659436157'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/pengliangren/liangren-blog.git'
			}
		],
		// 侧边栏内容比较多的话可以单独抽出来
		sidebar: {
			// '/': getDemoSidebar(),
			'/buildHelp': getBuildHelpSideBar()
		}
	}
};
