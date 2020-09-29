<template>
	<view>
		<my-item v-for="(item,index) in list" :key="index" :icon="item.icon" :title="item.title" :detail="item.detail"></my-item>
	</view>
</template>

<script>
	import {
		list
	} from './list.js'
	import myItem from '../../components/my-item.vue'

	export default {
		components: {
			myItem
		},
		props: ['begin', 'end'],
		data() {
			return {
				list: []
			}
		},
		created() {
			this.list = list.slice(this.begin, this.end)
		}
	}
</script>

<style>

</style>
