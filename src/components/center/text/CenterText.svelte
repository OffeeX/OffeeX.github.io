<script lang="ts">

    import {randomNumber} from "../../../scripts/MathUtil";

    export let centerName;

    function flicker() {
        setTimeout(() => {
            switch (randomNumber(0, 3)) {
                case 0: {
                    centerName = "OffeeX";
                    break
                }
                case 1: {
                    centerName = "Offeex";
                    break
                }
                case 2: {
                    centerName = "offeeX";
                    break
                }
                case 3: {
                    centerName = "offeex";
                    break
                }
            }
            flicker()
        }, randomNumber(100, 800))
    }

    flicker()
</script>

<div class="nameWrapper">
    <p title="{centerName}" class="text">{centerName}</p>
</div>

<style lang="scss">
  @import "glitch";

  .nameWrapper {
    display: flex;
    align-self: center;
  }

  .text {
    margin: auto;
    font-size: 180px;
    animation: text 1s linear infinite;

    transition: letter-spacing 0.3s;

    &:hover {
      letter-spacing: 0.1em;
    }
  }
</style>