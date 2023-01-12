function createManagerHTML(manager) {
	return `
	<h1 id="manager">Team Manager</h1>
	<div class="card mb-3" style="max-width: 100%;">
		<div class="row g-0">
			<div class="col-md-4">
				<img src="https://api.dicebear.com/5.x/micah/svg?scale=50&seed=${manager.name}" class="img-fluid rounded-start" alt="...">
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">
						${manager.name}
					</h5>
					<p class="card-text">
						
					</p>
				</div>
			</div>
		</div>
	</div>
`
}