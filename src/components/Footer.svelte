<footer class="Grid -middle brand-bg-blue">
	<div class="Cell -4of12">
		<GrowthAnimation />
	</div>
	<div class="Cell {browserWidth <= 800 ? '-8of12' : '-fill'} cta">
		<a class="brand-color-white" href=".">Improve Your SEO Now</a>
	</div>
</footer>

<style>
  footer {
    position: sticky;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0.6rem;
    border-left: 1px solid red;
    border-right: 1px solid red;
  }

  .cta a {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.2em;
    border-bottom: 1px solid red;
  }

  .cta {
    text-align: right;
    position: relative;
  }
</style>

<script>
  export default {
    components: {
      GrowthAnimation: "../components/GrowthAnimation.svelte"
    }
  };
</script>