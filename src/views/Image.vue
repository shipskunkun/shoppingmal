<template>
	<div>
		<div>这是商品imagez</div>
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