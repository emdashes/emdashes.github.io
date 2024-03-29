import $ from 'jquery'

$(document).on('click', '.customize-partial-edit-shortcut-button', e => {
	e.preventDefault()
	e.stopPropagation()
	e.stopImmediatePropagation()

	wp.customize.selectiveRefresh
		.partial(
			e.target.closest('[data-customize-partial-id]')
				? e.target.closest('[data-customize-partial-id]').dataset
						.customizePartialId
				: [
						...e.target.closest('.customize-partial-edit-shortcut')
							.classList
					]
						.filter(
							c =>
								c.length >
								'customize-partial-edit-shortcut'.length
						)[0]
						.replace(/customize-partial-edit-shortcut-/, '')
		)
		.showControl()
})

let requireTest = require.context('./sync', true, /\.js$/)
requireTest.keys().forEach(requireTest)

// Site title and description.
wp.customize('blogname', value => value.bind(to => $('.site-title a').text(to)))
wp.customize('blogdescription', value =>
	value.bind(to => $('.site-description').text(to))
)
