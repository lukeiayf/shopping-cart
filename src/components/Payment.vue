<template>
    <div class="column">
        <div class="card-content">
            <div class="columns is-desktop is-vcentered">
                <div class="column is-fullwidth">
                    <h3 class="title has-text-centered is-size-4 copy-monthly is-hidden">
                    </h3>
                    <h3 class="title has-text-centered is-size-4 copy-lifetime">Confira os dados de pagamento
                    </h3>

                    <div class="field">
                        <label class="label" for="account-email">E-mail</label>
                        <div class="control">
                            <input class="input" type="email" name="email" id="account-email" placeholder="E-mail"
                                value="" autocomplete="new-account">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Selecione uma forma de pagamento:</label>
                        <label class="purchase__methods checkbox" v-for="paymentMethod in paymentMethods"
                            :key="paymentMethod.id" track-by="id">
                            <input type="checkbox">
                                <a href="#" @click="addPaymentMethod">
                                    <p>{{paymentMethod.type}}</p>
                                </a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Payment',
    computed: mapGetters({
        paymentMethods: 'allPaymentMethods',
    }),
    methods: {
        addPaymentMethod() {
            this.$store.commit('setPaymentMethod');
        }
    }
}

</script>