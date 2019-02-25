<template>
	<div>
		<div>这是商品列表页面</div>
		<span>{{ $route.params.goodsId }}</span>
		<span>{{ $route.params.username }}</span>
		<router-link to='/goods/title'>
			标题
		</router-link>
		<router-link to='/goods/image'>
			图片
		</router-link>
		<router-view></router-view>
		<button @click="go">跳转到购物车</button>
		<router-link :to="{name: 'card', query: {goodsId: 456}}">跳转到购物车1</router-link>
		<router-link to="/card">跳转到购物车2</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello vue'
			}
		},
		methods: {
			go() {
				// this.$router.push('/card');
				this.$router.push({name: 'card', query: {goodsId: 456}} );
				// this.$router.push({path: '/card?goodsId=2'});
				// this.$router.push({path: '/card', query: {goodsId: 123}});
			}
		}
	}
</script>