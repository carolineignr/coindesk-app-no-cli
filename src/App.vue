<template>
    <div id="app">
			<div class="currency__container">
				<h1>Bitcoin price</h1>
				<br />
				<p v-if="loading">Loading...</p>
				<div 
					v-for="(currency, index) in info"
					v-bind:key="index"
					v-else 
					class="currency"
				>
					{{ currency.description }}:
					<span class="lighten">
						<span v-html="currency.symbol"></span> {{ formatRate(currency.rate_float) }}
					</span>
					<br />
				</div>
			</div>
			<button v-on:click="getCurrentPrice">Update price</button> 
		</div>
</template>

<script>
import axios from 'axios';

export default ({
	data() {
		return {
			info: null,
			loading: false
		}
	},
	beforeMount() { 
		this.getCurrentPrice();
	},
	methods: {
		async getCurrentPrice() {
			this.loading = true;

			const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
			this.info = response.data.bpi;

			this.loading = false;
		},
		formatRate(rate) { return rate.toFixed(2) }
	}
})
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

	body{
		margin: 0;
		background-color: #7E8D85;
		font-family: 'Noto Sans', sans-serif;;
	}

	h1 {
		margin: 0 auto;
		color: #F0F7F4;
	}

	button {
		border: none;
		padding: 1rem;
		border-radius: 5%;
		cursor: pointer;
		background: black;
		color: white;
		opacity: .7;
	}

	button:hover {
		border: 2px solid rgba(17, 24, 10, 0.746);
		background: white;
		color: rgba(17, 24, 10, 0.746);;
	}

	footer {
		text-align: center;
		font-size: .8rem;
	}

	#app {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.currency__container {
		width: fit-content;
		background-color: #2f242c65;
		margin: 15rem auto 5rem;
		padding: 20px 50px;
		border-radius: 3%;
	}

	.currency {
		display: inline;
		color: #B3BFB9;
	}

	.lighten {
		color:white;
	}
</style>
