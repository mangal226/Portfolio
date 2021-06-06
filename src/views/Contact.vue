<template>
  <div class="contact">
    <div id="bloc_page">
			<section>
				<div id="presentation_hamed">
					<h2><p>Contact</p></h2>
					<p>adresse: 92230, Gennevilliers, France</p>
					<p>telephone: +33 7 64 41 69 14</p>
					<p>email: mangali226@yahoo.fr</p>
				</div>
			</section>
			<section>
				<div id="message">
					<h2><p>Message</p></h2>
				</div>
			</section>
			<section>
				<form method="post" action="traitement.php">
					<p>
						<label for="pseudo">Entrer votre prénom :</label>
						<input type="text" name="pseudo" id="pseudo" placeholder="Ex : zozor" size="30" maxlength="10" />
					</p>
				</form>
				<aside>
					<form method="post" action="traitement.php">
						<p>
							<label for="email">Entrer votre email :</label>
							<input type="email" name="email" id="email" placeholder="Ex : zozor@gmail.com" size="30" maxlength="10" />
						</p>
					</form>
				</aside>
			</section>
			<section>
				<form method="post" action="traitement.php">
					<p>
						<label for="objet">Entrer l'objet du message :</label>
						<input type="text" name="objet" id="objet" placeholder="Ex : Demande de prestation" size="30" maxlength="10" />
					</p>
				</form>
			</section>
			
			<section>
				<input class="btn btn-primary" type="submit" value="Envoyer" />
			</section>
		</div>
  </div>
</template>