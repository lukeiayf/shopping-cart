<template>
	<div class="cart box">
		<h1 class="title">Seu carrinho</h1>
		<p v-show="!products.length">
			<i>Seu carrinho está vazio!</i>
			<router-link to="/">Vá para a loja</router-link>
		</p>
		<div class="columns is-centered">
			<table class="table is-striped is-4-desktop" v-show="products.length">
				<thead>
					<tr>
						<td><b>Nome</b></td>
						<td><b>Preço</b></td>
						<td><b>Quantidade</b></td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="p in products">
						<td>{{ p.name }}</td>
						<td>${{ p.price }}</td>
						<td>{{ p.totalQuantity }}</td>
					</tr>
					<tr>
						<td><b>Total:</b></td>
						<td></td>
						<td><b>R${{ total }}</b></td>
					</tr>
				</tbody>

			</table>
			<Payment v-show="products.length" class="ml-6"></Payment>
		</div>


		<div v-show="products.length" class="control mb-4">
			<p>Observações</p>
			<textarea class="textarea" placeholder="Alguma dúvida ou sugestão?"></textarea>
		</div>
		<p><button v-show="products.length" class='button is-primary' @click='checkout'>Checkout</button></p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Payment from './Payment.vue'

export default {
	computed: {
		...mapGetters({
			products: "cartProducts"
		}),
		total() {
			return this.products.reduce((total, p) => {
				return total + p.price * p.totalQuantity;
			}, 0);
		}
	},
	methods: {
		checkout() {
			alert("O total é de R$" + this.total);
		}
	},
	components: { Payment }
}
</script>