import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
	added: [],
	all: [
		{
			id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
			name: 'React.js',
			icon: 'fa-brands fa-react',
			description: 'React is a JavaScript library for building user interfaces.',
			price: 399,
			itemQuantity: 0
		},
		{
			id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
			name: 'Vue.js',
			icon: 'vue',
			description: 'Vue is a progressive framework for building user interfaces.',
			price: 1995,
			itemQuantity: 0
		},
		{
			id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
			name: 'Angular.js',
			icon: 'angular',
			description: 'Angular is a JavaScript framework for building single-page applications.',
			price: 595,
			itemQuantity: 0
		}
	],
	paymentMethods: [
		{
			id:'1',
			type: 'Cartão de crédito',
			logo: '../assets/visa-mastercard.png'
		},
		{
			id:'2',
			type: 'PIX',
			logo: 'fa-pix'
		},
		{
			id: '3',
			type: 'Boleto',
			logo: 'fa-barcode'
		}
	],
	paymentMethod: []
}

// getters
const getters = {
	allProducts: state => state.all, // would need action/mutation if data fetched async
	getNumberOfProducts: state => (state.all) ? state.all.length : 0,
	cartProducts: state => {
		return state.added.map(({ id, totalQuantity }) => {
			const product = state.all.find(p => p.id === id)

			return {
				name: product.name,
				price: product.price,
				itemQuantity: product.itemQuantity,
				totalQuantity
			}
		})
	},
	allPaymentMethods: state => state.paymentMethods,
	paymentMethod: state => state.paymentMethod.map(({ id, type }) => {
		return {
			id,
			type,
		}
	}
	),
}

// actions
const actions = {
	addToCart({ commit }, product) {
		commit(types.ADD_TO_CART, {
			id: product.id
		})
	},
	removeFromCart({ commit }, product) {
		commit(types.REMOVE_FROM_CART, {
			id: product.id
		})
	},
	setPaymentMethod({ commit }, paymentMethod) {
		commit(types.SET_PAYMENT_METHOD, {
			id:paymentMethod.id
		})
	}

}

// mutations
const mutations = {

	[types.ADD_TO_CART](state, { id }) {
		const record = state.added.find(p => p.id === id)
		const itemSelected = state.all.find(p => p.id === id)

		if (!record) {
			state.added.push({
				id,
				totalQuantity: 1
			}),
				itemSelected.itemQuantity++
		} else {
			record.totalQuantity++
			itemSelected.itemQuantity++
		}
	},

	[types.REMOVE_FROM_CART](state, { id }) {
		const recordRemove = state.added.find(p => p.id === id)
		const itemSelectedRemove = state.all.find(p => p.id === id)

		//remove from array if quantity is 0
		if (recordRemove.totalQuantity <= 1 || itemSelectedRemove.itemQuantity <= 1) {
			state.added = state.added.filter(p => p.id !== id)
			itemSelectedRemove.itemQuantity--
			recordRemove.totalQuantity--
		} else {
			recordRemove.totalQuantity--
			itemSelectedRemove.itemQuantity--
		}

		if (recordRemove.length == 0) {
			recordRemove.totalQuantity = 0
			alert('Não é possivel remover mais produtos')
		}

		if (itemSelectedRemove.length == 0) {
			itemSelectedRemove.itemQuantity = 0
		}
	},

	[types.SET_PAYMENT_METHOD](state, { id }) {
		const paymentRecord = state.paymentMethod.find(p => p.id === id)
		if (!paymentRecord) {
			state.paymentMethod.push({
				id,
				type: 'Cartão de crédito'
			})
		}
	},
}

// one store for entire application
export default new Vuex.Store({
	state,
	strict: debug,
	getters,
	actions,
	mutations
})
