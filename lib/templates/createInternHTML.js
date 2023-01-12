function createInternHTML(intern) {
	return `
	<h1 id="intern">Team intern</h1>
	<div class="card mb-3" style="max-width: 100%;">
		<div class="row g-0">
			<div class="col-md-4">
				<img src="https://api.dicebear.com/5.x/micah/svg?scale=50&seed=${intern.name}" class="img-fluid rounded-start" alt="...">
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">
						${intern.name}
					</h5>
					<p class="card-text">
						<strong>ID:</strong> ${intern.id}
						<br>
						<strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a>
						<br>
						<strong>School:</strong> ${intern.school}
					</p>
				</div>
			</div>
		</div>
	</div>
`
}