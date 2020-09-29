/**
 * 模拟请求数据
 */
export function request({
	page,
	size,
	success
}) {
	const list = []
	for (let i = 0; i < size; i++) {
		// 模拟基础数据
		const data = {
			title: `第${page*size+i+1}条数据-标题`,
			detail: `第${page*size+i+1}条数据-详情，详情具有更多的字`,
			icon: '/static/logo.png'
		}
		// 模拟大量数据
		const ext = data.ext = {}
		for (let a = 0; a < 50; a++) {
			const item = ext[a] = {}
			for (let b = 0; b < 50; b++) {
				item[b] = '模拟扩展数据'
			}
		}
		list.push(data)
	}
	setTimeout(() => {
		success(list)
	}, 500)
}
