<template>
	<nav class="nav has-shadow" style='box-shadow: 0 1px 0 rgba(219,219,219,.3);'>
		<div class="nav-left">
			<router-link to="/" class="nav-item">
				<img src="../assets/logo.png" alt="Bulma logo">
			</router-link>
		</div>
		<div class="nav-right nav-menu">
			<div class="nav-item is-tab">
				<div class="field is-grouped">
					<p class="control">
						<router-link to='/' class="button is-info" :class="{ 'active-button': $route.path === '/' }">
							<span class="icon">
								<i class="fa fa-shopping-basket"></i>
							</span>
							<span>Loja</span>
						</router-link>
					</p>
				</div>
			</div>
			<div class="nav-item is-tab ml-2 mr-4">
				<div class="field is-grouped">
					<p class="control">
						<router-link to='/cart' class="button is-info"
							:class="{ 'active-button': $route.path === '/cart' }">
							<span class="icon">
								<i class="fa fa-shopping-cart"></i>
							</span>
							<span>Checkout ({{ itemsInCart }})</span>
						</router-link>
					</p>
				</div>
			</div>
		</div>
	</nav>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		itemsInCart() {
			let cart = this.$store.getters.cartProducts;
			return cart.reduce((accum, item) => accum + item.totalQuantity, 0)
		}
	}
}
</script>
