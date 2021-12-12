<script>
    export let imgSrc = '';
    export let darkImgSrc = '';
    export let alt = '';
</script>

<div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <picture>
        <source srcset={darkImgSrc} media="(prefers-color-scheme:dark)" >
        <img class="object-cover object-center rounded" src={imgSrc} alt={alt} />
    </picture>
</div>
