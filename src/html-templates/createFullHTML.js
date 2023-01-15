function createFullHTML(manager, engineer, intern) {

	return `
	<!DOCTYPE html>
	<html data-bs-theme="dark"  style="scroll-behavior:smooth;">
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<title>Team Overview</title>
			<meta name="description" content="">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
		</head>
		<body>
			<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
				<a class="navbar-brand" href="#">Team Overview</a>
				<ul class="nav nav-pills">
					<li class="nav-item">
						<a class="nav-link" href="#manager">Team Manager</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#engineers">Engineers</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#interns">Interns</a>
					</li>
				</ul>
			</nav>
	
			<main class="container">
				${manager}
				${engineer ? `<br/><h1 id="engineers">Team Engineers</h1>` : ""}
				${engineer ? engineer : ""}
				${intern ? `<br/><h1 id="interns">Team Interns</h1>` : ""}
				${intern ? intern : ""}
			</main>
	
	
			<script 
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
				integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" 
				crossorigin="anonymous"
			/>
		</body>
	</html>
	`;
}

module.exports = createFullHTML;