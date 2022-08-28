<script lang="ts">
    import Tool from "./components/about/tool/Tool.svelte";
    import {parseHtml} from "./scripts/ParseUtil.js";
    import {centerName, logos, projects, toolCategories} from "./global/Globals.js";
    import CenterText from "./components/center/text/CenterText.svelte";
    import CenterIcon from "./components/center/logo/CenterIcon.svelte";
    import Project from "./components/about/project/Project.svelte";
</script>

<body>
<header>
</header>

<main>
    <div class="center">
        <CenterText {centerName}/>
        <div class="logos">
            {#each logos as logo}
                <CenterIcon {logo}/>
            {/each}
        </div>
    </div>

    <div class="about">
        <hr>
        <div class="aboutDescription">
            <p>{@html parseHtml("Hello! And welcome ~~to the Los Pollos Hermanos~~ on my website.")}</p>
            <p>{@html parseHtml("You know who i am. You all know well who i am...")}</p>
            <p>{@html parseHtml("You've heard of me from " +
                "<span style='color: #bb2929'> **YouTube** </span>, " +
                "<span style='color: #2ea62e'> **2b2t** </span>, " +
                "or some of my projects.")}</p>
        </div>

        <p class="aboutHeader">What do i use</p>
        {#each toolCategories as c}
            <Tool {...c}/>
        {/each}

        <p class="aboutHeader">Projects</p>
        <div class="projectsWrapper">
            {#each projects as p}
                <Project {...p}/>
            {/each}
        </div>

    </div>
</main>

<footer>
</footer>
</body>

<style lang="scss">
  @import "global/app.scss";
  @import "components/center/center.scss";
  @import "components/about/about.scss";
</style>