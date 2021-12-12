<script>
    import ImageFullWidth from './ImageFullWidth.svelte';
    export let imgSrc = '';
    export let title = '';
    export let content = '';
</script>

<section class="text-gray-600 dark:text-gray-200 body-font dark:bg-gray-900">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <ImageFullWidth imgSrc={imgSrc} darkImgSrc={imgSrc} alt={title} />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300">{title}</h1>
        <p class="mb-8 leading-relaxed">{content}</p>
        <slot></slot>
      </div>
    </div>
</section>