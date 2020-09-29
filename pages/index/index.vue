<template>
	<view class="content">
		<button @click="open('/pages/bad/bad')">优化前</button>
		<button @click="open('/pages/good/good')">优化后</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			open(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>

</style>
