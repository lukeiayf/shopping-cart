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
                        <label class="label">Selecione uma forma de pagamento</label>
                        <div class="purchase__methods columns">
                            <div class="column active">
                                <a href="#" class="is-fullwidth">
                                    <img src="../assets/visa-mastercard.png" height="24" alt="Pague com cartão">
                                </a>
                            </div>
                            <div class="column">
                                <a href="#" class=" is-fullwidth">
                                    <img src="../assets/pix-bc-logo-4.png" height="24" alt="Pague com PIX">
                                </a>
                            </div>
                            <div class="column">
                                <a href="#" class=" is-fullwidth">
                                    <img src="../assets/boleto-logo-3.png" height="24" alt="Pague com boleto">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Payment',
    computed: {
        priceFinal() {
            return this.$store.state.priceFinal;
        },
        priceTeamFinal() {
            return this.$store.state.priceTeamFinal;
        }
    },
    methods: {
        buyLicense() {
            this.$store.dispatch('buyLicense');
        },
        buySubscription() {
            this.$store.dispatch('buySubscription');
        }
    }
}

</script>