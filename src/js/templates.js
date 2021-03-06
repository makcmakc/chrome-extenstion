
function createBlock(word) {
	return `
		<div class="content__block">
		<div class="accordion-item">
			<p class="entered__word">${word}</p>
			<p class="translations truncate">Просить, спросить, попросить</p>
      <div class="accordion__triger">
				 <i class="material-icons">chevron_right</i>
      </div>

      <div class="paragraph">
				<div class="content__block">
					<p class="entered__word">${word}</p>
					<div class="translations">попросить</div>
		      <div class="accordion__triger">
						 <i class="material-icons">import_contacts</i>
		      </div>								
				</div>													
      </div>

  	</div>
	</div>
	`
}

function createLoader() {
	return `
		<div class="loader loader--style5" title="4">
		  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
		    <rect x="0" y="0" width="4" height="10" fill="#333">
		      <animateTransform attributeType="xml"
		        attributeName="transform" type="translate"
		        values="0 0; 0 20; 0 0"
		        begin="0" dur="0.6s" repeatCount="indefinite" />
		    </rect>
		    <rect x="10" y="0" width="4" height="10" fill="#333">
		      <animateTransform attributeType="xml"
		        attributeName="transform" type="translate"
		        values="0 0; 0 20; 0 0"
		        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
		    </rect>
		    <rect x="20" y="0" width="4" height="10" fill="#333">
		      <animateTransform attributeType="xml"
		        attributeName="transform" type="translate"
		        values="0 0; 0 20; 0 0"
		        begin="0.4s" dur="0.6s" repeatCount="indefinite" />
		    </rect>
		  </svg>
		</div>
	`
}

function createHeader() {
	return `
		<div class="header">
			<span class="header__logo"><small>spain</small><strong>box</strong></span>
			<span class="header__title">переводчик</span>
			<a href="#" class="to-login"><i class="material-icons">login</i>Войти</a>
		</div>
	`
}

function createFooter() {
	return `
		<div class="footer">
			<a href="#" class="footer__block"><i class="material-icons">bookmarks</i></a>
			<a href="#" class="footer__block"><i class="material-icons">import_contacts</i></a>			
			<a href="#" class="footer__block"><i class="material-icons">settings</i></a>				
		</div>
	`
}
