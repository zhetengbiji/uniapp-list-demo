<template>
	<view class="item">
		<image class="icon" :src="icon"></image>
		<view class="content">
			<view class="title">{{title}}</view>
			<view class="detail">{{detail}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title', 'icon', 'detail']
	}
</script>

<style>
	.item {
		display: flex;
		padding: 6px;
	}

	.icon {
		width: 60px;
		height: 60px;
	}

	.content {
		padding: 0 6px;
	}

	.title {
		font-size: 20px;
		color: #333333;
	}

	.detail {
		font-size: 16px;
		color: #666666;
	}
</style>
