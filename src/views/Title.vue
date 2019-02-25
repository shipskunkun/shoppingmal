<template>
	<div>
		<div>这是title子组件</div>
		<span>{{ $route.params.goodsId }}</span>
		<span>{{ $route.params.username }}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello vue'
			}
		}
	}
</script>