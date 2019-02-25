<template>
	<div>
		<div>这是购物车页面</div>
		<div>{{ $route.query.goodsId }}</div>
		<span></span>
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