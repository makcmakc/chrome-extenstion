const getTemplate = (item) => {
		return `
			<div class="content__block">
				<div class="accordion-item">
					<p class="entered__word">${item}</p>
					<p class="translations truncate">Просить, спросить, попросить</p>
		      <div class="accordion__triger">
						 <i class="material-icons">chevron_right</i>
		      </div>

		      <div class="paragraph">
						<div class="content__block">
							<p class="entered__word" data-type="item" data-id="${item}">${item}</p>
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


class SpainBox {
	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		this.render()
	}

	render() {
		this.$el.innerHTML = getTemplate('data')
	}
}
