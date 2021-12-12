import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import ImageFullWidth from '../../components/images/ImageFullWidth.svelte';
import ImageWithContentLeft from '../../components/images/ImageWithContentLeft.svelte';
import markdownNotes from './images.stories.md';

storiesOf('Images | Imagenes', module)
    //Image full width
    .add(
        'Full Width',
        () => ({
            Component: ImageFullWidth,
            props: { imgSrc: 'https://www.w3schools.com/howto/img_parallax.jpg', darkImgSrc: '', alt: '' }
        }),
        { notes: { markdown: markdownNotes } },
    )
    .add(
        'Image with Content',
        () => ({
            Component: ImageWithContentLeft,
            props: { imgSrc: 'https://www.w3schools.com/howto/img_parallax.jpg', content: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.', title: 'Before they sold out' }
        }),
        { notes: { markdown: markdownNotes } },
    )