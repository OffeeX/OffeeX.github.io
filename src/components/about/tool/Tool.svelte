<script lang="ts">
    export let name;
    export let icons: Array<string>;
    export let color;
    export let colorHovered;
</script>

<div class="category"
     style:background-image="linear-gradient(to right, {color}, transparent)"
     style:--color="{color}"
     style:--color-hovered="{colorHovered}">
    <div>
        {#each icons as icon}
            <img class="icon" src="logos/tools/{icon}" alt="">
        {/each}
    </div>
    <div class="name">{name}</div>
</div>

<style lang="scss">
  .category {
    font-size: 18px;
    border-radius: 20px;
    width: 50%;

    margin: 10px auto;
    padding: 5px;

    transition: background-color 0.1s, letter-spacing 0.1s;
    &:hover {
      background-color: var(--color-hovered);
      letter-spacing: 5px;
    }
  }

  .name {
    font-size: 19px;

    color: var(--color-hovered);
  }

  .icon {
    height: 24px;
    margin: 3px 3px;
    border-radius: 5px;
  }

</style>