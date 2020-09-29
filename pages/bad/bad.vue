<template>
	<view>
		<my-item v-for="(item,index) in list" :key="index" :icon="item.icon" :title="item.title" :detail="item.detail"></my-item>
	</view>
</template>

<script>
	import {
		request
	} from '../../common/request.js'
	import myItem from '../../components/my-item.vue'

	export default {
		components: {
			myItem
		},
		data() {
			return {
				page: 0,
				size: 12,
				list: []
			}
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
