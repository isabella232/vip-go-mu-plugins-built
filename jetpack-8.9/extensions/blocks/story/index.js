/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import getCategoryWithFallbacks from '../../shared/get-category-with-fallbacks';

/**
 * Example Images
 */
import storyExample1 from './story_example-1.png';

const attributes = {
	settings: {
		type: 'object',
	},
	mediaFiles: {
		type: 'array',
		default: [],
	},
};

const exampleAttributes = {
	mediaFiles: [
		{
			alt: '',
			caption: '',
			mime: 'image/jpg',
			type: 'image',
			id: 22,
			url: storyExample1,
		},
	],
};

export { icon };

export const name = 'story';

export const settings = {
	title: __( 'Story', 'jetpack' ),
	category: getCategoryWithFallbacks( 'media', 'layout' ),
	keywords: [
		_x( 'story', 'block search term', 'jetpack' ),
		_x( 'image', 'block search term', 'jetpack' ),
		_x( 'video', 'block search term', 'jetpack' ),
		_x( 'gallery', 'block search term', 'jetpack' ),
	],
	description: __( 'Add an interactive story.', 'jetpack' ),
	attributes,
	supports: {
		html: false,
		inserter: true, // toggle to false before merging to BETA blocks
	},
	icon,
	edit,
	save,
	example: {
		attributes: exampleAttributes,
	},
};
