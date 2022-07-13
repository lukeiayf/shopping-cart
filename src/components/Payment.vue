<template>
    <div class="column">
        <div class="card-content">
            <div class="columns is-desktop is-vcentered">
                <div class="column is-fullwidth">
                    <h3 class="title has-text-centered is-size-4 copy-lifetime">Confira os dados de pagamento
                    </h3>
                    <div class="control">
                        <label class="label">Selecione apenas uma</label>
                        <label class="purchase__methods radio" v-for="paymentMethod in paymentMethods"
                            :key="paymentMethod.id" track-by="id">
                            <input type="radio" name="payment" @click="setPaymentMethod(paymentMethod)">
                            <p>{{paymentMethod.type}}</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    name: 'Payment',
    computed: mapGetters({
        paymentMethods: 'allPaymentMethods',
    }),
    methods: mapActions([
		'setPaymentMethod'
	])
}

</script>