<template>
	<view>
		<my-section v-for="(item,index) in section" :key="index" :begin="item.begin" :end="item.end"></my-section>
	</view>
</template>

<script>
	import {
		request
	} from '../../common/request.js'
	import {
		list
	} from './list.js'
	import mySection from './my-section.vue'

	export default {
		components: {
			mySection
		},
		data() {
			return {
				page: 0,
				size: 12,
				section: []
			}
		},
		onLoad() {
			this.list = list
		},
		onReady() {
			this.request()
		},
		onPullDownRefresh() {
			this.page = 0
			this.list = []
			this.request()
		},
		onReachBottom() {
			this.request()
		},
		methods: {
			request() {
				uni.showLoading({
					title: '加载中'
				})
				request({
					page: this.page,
					size: this.size,
					success: (res) => {
						this.list.push(...res)
						this.page++
						this.section.push({
							begin: this.list.length - res.length,
							end: this.list.length
						})
						uni.stopPullDownRefresh()
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style>

</style>
