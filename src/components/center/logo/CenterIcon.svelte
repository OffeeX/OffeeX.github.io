<script lang="ts">
    export let logo;
</script>

<a target="_blank" href="{logo.link}" style:display="contents">
    <img class="logo" src="./logos/{logo.name}.png" alt="" style="--accent-color: {logo.color}">
</a>

<style lang="scss">
  .logo {
    height: 62px;
    border-radius: 18px;

    --accent-color: #6b5f9a;

    box-sizing: border-box;
    padding: 3px;

    border-width: 3px;
    border-style: solid;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px var(--accent-color);
    background-color: #1f1f26;

    transition: all 0.15s;
    &:hover {
      border-width: 15px;
      transform: scale(1.1);
      background-color: var(--accent-color);
    }

  }
</style>