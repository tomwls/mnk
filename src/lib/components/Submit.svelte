<div class="container">
	<h1>Help to Improve the Database</h1>

	<p>
		Do you have a game that you want to see in the database? Or maybe you have some feedback on an
		existing entry? You can submit new games or suggest edits to existing entries using the form
		below. Your contributions will help make the database more comprehensive and accurate for
		everyone!
	</p>
	<form action="/submit" method="POST" class="submission-form">
		<div class="form-group">
			<label for="name">Game Name</label>
			<input type="text" id="name" name="name" required />
		</div>
		<div class="form-group">
			<label for="platform">Platform</label>
			<select id="platform" name="platform" required>
				<option value="">Select a platform</option>
				<option value="xbox">Xbox</option>
				<option value="ps5">PS5</option>
				<option value="switch">Switch</option>
				<!-- Add more platforms as needed -->
			</select>
		</div>
		<div class="form-group">
			<label for="support">Support Status</label>
			<select id="support" name="support" required>
				<option value="">Select support status</option>
				<option value="full">Full Support</option>
				<option value="partial">Partial Support</option>
				<option value="none">No Support</option>
			</select>
		</div>
		<div class="form-group">
			<label for="notes">Additional Notes</label>
			<textarea id="notes" name="notes" rows="4"></textarea>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		background: transparent;
		border: 1px solid #1f3a2a;
	}

	.submission-form {
		max-width: 600px;
		margin: 20px auto;
		padding: 20px;
		border: 1px solid #1f3a2a;
		background: #0a0a0a;
	}

	.form-group {
		margin-bottom: 15px;
	}

	label {
		display: block;
		margin-bottom: 5px;
		font-weight: 600;
		color: #00ff9c;
	}

	input[type='text'],
	select,
	textarea {
		width: 100%;
		padding: 8px;
		border: 1px solid #1f3a2a;
		border-radius: 4px;
		background: #1f3a2a;
		color: #7aa38b;
	}

	button {
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		background: #00ff9c;
		color: #000000;
		font-weight: 600;
		cursor: pointer;
	}

	button:hover {
		background: #00e68a;
	}
</style>
