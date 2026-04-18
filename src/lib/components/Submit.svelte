<div class="container">
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
		margin: -60px auto;
		padding: 20px;
		background: transparent;
		border: none;
	}

	.submission-form {
		max-width: 600px;
		margin: 20px auto;
		padding: 20px;
		/* border: 1px solid #1f3a2a;
		background: #0a0a0a; */
	}

	.form-group {
		margin-bottom: 22px;
	}

	label {
		display: block;
		margin-bottom: 8px;
		text-align: left;
		text-transform: uppercase;
		font-size: 0.9rem;
		color: #00ff9c;
	}

	input[type='text'],
	select,
	textarea {
		width: 100%;
		padding: 8px;
		border: 1px solid #00ff9c;
		border-radius: 0;
		background: #0a0a0a;
		color: #7aa38b;
	}

	input:focus {
		outline: none;
		border-color: #7aa38b;
	}

	select:focus {
		outline: none;
		border-color: #7aa38b;
	}

	textarea:focus {
		outline: none;
		border-color: #7aa38b;
	}

	button {
		padding: 10px 20px;
		border: none;
		border-radius: 0;
		background: #00ff9c;
		color: #000000;
		text-transform: uppercase;
		cursor: pointer;
	}

	button:hover {
		background: #00e68a;
	}
</style>
