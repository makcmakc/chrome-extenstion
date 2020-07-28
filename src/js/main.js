const getTemplate = (items = []) => {
	const item = items.map(i => {
		const various = i.translatedText.map(t => t)
		const v = various.map(v => {
			return `
				<div class="paragraph__block">
						<p class="entered__word">${i.text}</p>
						<span class="pronuncuation">
							<i class="material-icons" data-type="speaker" data-value="${i.text}">volume_up</i>
						</span>
						<div class="paragraph__translation">${v}</div>
						<div class="add__to__dictionary">
							<i class="material-icons">import_contacts</i>
							</div>
				</div>	
			`
		})
		return `
			<div class="content__block" data-type="item" data-id="${i.id}">
				<div class="accordion-item">
					<p class="entered__word">${i.text}</p>
					<p class="translations truncate">${various.join(', ')}</p>
		      <div class="accordion__triger">
						 <i class="material-icons" data-type="arrow">chevron_right</i>
		      </div>
		      <div class="paragraph">${v.join(' ')}</div>
		  	</div>
			</div>
		`	
	})
	return item.join('')
}

const loader = () => {
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


export class SpainBox {
	constructor(selector, options) {
		this.options = options
		this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
		this.$nodeItems = undefined
		this.$nodeItem = undefined
		this.selectedId = null
		// this.synth = window.speechSynthesis || window.mozspeechSynthesis || window.webkitspeechSynthesis

		this.render()
		this.setup()
	}

	render() {
		const { data } = this.options
		this.$el.innerHTML = data ? getTemplate(data) : loader()
	}

	setup() {
		this.clickHandler = this.clickHandler.bind(this)
		// this.$nodeItems = this.$el.querySelectorAll('.content__block')
		this.$nodeItem = this.$el.querySelector('.content__block')
		this.$nodeItem.addEventListener('click', this.clickHandler)

		if (this.$nodeItems) {
			this.$nodeItems.forEach(node => {
				node.addEventListener('click', this.clickHandler)
			})
		}

		this.$arrow = this.$el.querySelector('[data-type="arrow"]')
	}

	clickHandler(event) {
		const {type} = event.target.dataset
		if (type === 'arrow') {
			this.toggle()
		} else if (type === 'item') {
			const id = event.target.dataset.id
			this.select(id)
		} else if (type === 'speaker') {
			const value = event.target.dataset.value
			this.speak(value)
		}
		
	}

	speak(value) {
		const synth = window.speechSynthesis || window.mozspeechSynthesis || window.webkitspeechSynthesis
		console.log(value.toLowerCase())
	  const toSpeak = new SpeechSynthesisUtterance(value.toLowerCase())
	  toSpeak.lang = 'es-ES'
	  synth.speak(toSpeak)
	}

	get isOpen() {
		return this.$nodeItem.classList.contains('open')
	}

	get current() {
		return this.options.data.find(item => item.id === this.selectedId)
	}

	toggle() {
		this.isOpen ? this.close() : this.open()
	}

	select(id) {
		this.selectedId = id
		// this.$nodeItem.querySelector(`[data-id="${id}"]`).classList.add('selected')
		// console.log(id)
	}

	open() {
		this.$nodeItem.classList.add('open')
		this.$arrow.textContent = 'expand_more'
	}

	close() {
		this.$nodeItem.classList.remove('open')
		this.$arrow.textContent = 'chevron_right'
	}

	destroy() {
		this.$el.removeEventListener('click', this.clickHandler)
		this.$el.innerHTML = ''
	}	
}


// class Speech extends SpainBox {
// 	constructor(options) {
// 		super(options)
// 		this.synth = window.speechSynthesis
// 	}

// 	toSpeak() {
// 	  const toSpeak = new SpeechSynthesisUtterance()
// 	  toSpeak.lang = 'en-US'
// 	  toSpeak.text = 'Asta Luego!'

// 	  this.synth.speak(toSpeak);		
// 	}
// }
