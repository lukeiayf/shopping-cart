<template>
	<div class="box">
		<h1 class="title">Lista de produtos</h1>
		<p>Selecione a quantidade desejada</p>
		<table class="table is-striped">
			<thead>
				<tr>
					<th>Nome</th>
					<th>Descrição</th>
					<th>Preço</th>
					<th></th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in products" track-by="id" class="tr-middle">
					<td>{{ product.name }}</td>
					<td>{{ product.description }}</td>
					<td>R${{ product.price }}</td>
					<td>
						<button @click='addToCart(product)' class='button is-info'>
							<span class="icon">
								<i class="fa fa-plus"></i>
							</span>
						</button>
					</td>
					<td>{{ product.itemQuantity }}</td>
					<td>
						<button @click='removeFromCart(product)' class='button is-info'>
							<span class="icon">
								<i class="fa fa-minus"></i>
							</span>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'app',
	computed: mapGetters({
		products: 'allProducts',
		length: 'getNumberOfProducts',
	}),
	methods: mapActions([
		'addToCart',
		'removeFromCart'
	])
}
</script>

<style lang="scss">
</style>
