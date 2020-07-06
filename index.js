document.addEventListener('DOMContentLoaded', () => {
	let cardGroup = document.getElementById('card-group');
	let projects = [
		{
			name: `Aurora Grove`,
			description: `This is a website built using Bootstrap.`,
			link: `./aurora_grove/`,
		},
		{
			name: 'Edge Ledger Website',
			description: 'This is a website built using pure CSS and HTML.',
			link: './edge_ledger/',
		},
		{
			name: 'The Form',
			description: 'This is a form built using pure CSS and HTML.',
			link: './form/',
		},
		{
			name: 'The Hamburger Menu',
			description: 'This is a hamburger menu built using pure CSS and HTML.',
			link: './hamburger_menu/',
		},
		{
			name: 'The Hotel Website',
			description: 'This is a hotel website built using pure CSS and HTML.',
			link: './hotel_website/',
		},
		{
			name: 'The Home Page',
			description: 'This is a home page built using Bootstrap.',
			link: './indexPage/',
		},
		{
			name: 'Museum of Candy',
			description: 'This is a museum of candy website built using Bootstrap.',
			link: './museum_of_candy/',
		},
		{
			name: 'The Presentation',
			description: 'This is a presentation site built using pure CSS and HTML.',
			link: './presentation/',
		},
		{
			name: 'The Timeline',
			description: 'This is a timeline site built using pure CSS and HTML.',
			link: './timeline/',
		},
	];
	projects.forEach((project) => {
		let card = `
        <div class="card">
			<h3 class="card-title">${project.name}</h3>
			<div class="card-description">${project.description}</div>
			<a href=${project.link} target="_blank" class="btn">Click Here</a>
		</div>
`;
		cardGroup.insertAdjacentHTML('beforeend', card);
	});
});
