<script>
  let { children } = $props();
</script>

<hathi-website-header></hathi-website-header>
<main class="main" id="main">
  <div class="twocol mt-1">
    {@render children()}
  </div>
</main>
