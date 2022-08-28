<script lang="ts">
    export let name: string;
    export let description: string;
    export let website: string;
    export let discord: string;
    export let github: string;
    export let color: string;
    export let colorDarker: string;

    const openSource = () => github !== "";
    const hasDiscord = () => discord !== "";
</script>

<div class="field">
    <div class="infoBlock">
        <p class="name">{name}</p>
        <p>{description}</p>
        <div class="buttons">
            {#if hasDiscord()}
                <a href="{discord}" target="_blank">
                    <img class="icon" src="./logos/discord.png" alt=""
                         style="--accent-color: #435cda; --accent-color-dark: #2c30b0">
                </a>
            {/if}
            {#if openSource()}
                <a href="{github}" target="_blank">
                    <img class="icon" src="./logos/github.png" alt=""
                         style="--accent-color: #44a9ce; --accent-color-dark: #105f7a">
                </a>
            {/if}
        </div>
    </div>
    <a class="bigLogoLink" href="{website}" target="_blank">
        <img class="bigLogo" src="./logos/projects/bloomware-black.png" alt=""
             style:--accent-color="{color}"
             style:--accent-color-dark="{colorDarker}">
    </a>
</div>

<style lang="scss">
  .field {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    background-color: #21232d;
    border-radius: 20px;
  }

  .infoBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }

  .name {
    letter-spacing: 3px;
    font-size: clamp(28px, 2vw, 36px);
    margin: 0;
  }

  .icon {
    box-sizing: border-box;
    height: 40px;

    --accent-color: rgb(138, 84, 218);
    --accent-color-dark: rgb(82, 48, 131);
    background-color: #1f1f26;
    box-shadow: 0 0 10px var(--accent-color-dark);

    border-radius: 12px;
    border-width: 2px;
    border-style: solid;
    border-color: var(--accent-color);

    transition: border-width 0.2s, background-color 0.2s;

    &:hover {
      border-width: 15px;
      background-color: var(--accent-color);
    }
  }

  .bigLogoLink {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bigLogo {
    margin-left: 15px;

    background-color: var(--accent-color-dark);
    box-shadow: 0 0 10px var(--accent-color-dark);
    border-radius: 40%;
    border-width: 2px;
    border-style: solid;
    border-color: var(--accent-color);

    transition: all 0.2s ease-in-out, border-color 0.1s;
    &:hover {
      transform: scale(1.1);
      border-color: transparent;
    }

    height: clamp(60px, 11vw, 110px);
  }

</style>
