

const createHeader = () => {
	return `
		<div class="header">
			<span class="header__logo"><small>spain</small><strong>box</strong></span>
			<span class="header__title">переводчик</span>
			<a href="#" class="to-login"><i class="material-icons">login</i>Войти</a>
		</div>
	`
}

const createFooter = () => {
	return `
		<div class="footer">
			<a href="#" class="footer__block"><i class="material-icons">bookmarks</i></a>
			<a href="#" class="footer__block"><i class="material-icons">import_contacts</i></a>			
			<a href="#" class="footer__block"><i class="material-icons">settings</i></a>				
		</div>
	`
}

const mainTemplate = () => {
	return `
		<div class="main">
			<div class="main__input">
				<input type="text" id="input" class="text_enter" placeholder="Перевести слово или фразу...">
			</div>

			<div class="main__content">
				<span>Недавно просмотренные</span>
				<div id="content"></div>
			</div>
		</div>
	`
}



class App {
	constructor(selector, components) {
		this.$app = typeof selector === 'string' ? document.querySelector(selector) : selector
		this.components = components
		this.render() 
	}

	render() {
		const { header, main, footer } = this.components
		this.$app.innerHTML = header + main + footer
	}
}

const app = new App('#app', {
	header: createHeader(),
	main: mainTemplate(),
  footer: createFooter()
})
