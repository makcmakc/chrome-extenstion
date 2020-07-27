// Init SpeechSynth API
const synth = window.speechSynthesis

const text = 'speak'

// Init voices array
const voices = []

const getVoices = () => {
	voices = synth.getVoices()
}

getVoices()

// For Chrome
if (synth.onvoiceschanged !== undefined) {
	synth.onvoiceschanged = getVoices
}


// Speak
const speak = () => {
	if (synth.speaking) {
		console.error('Already speaking...')
		return
	}
	if (text !== '') {
		const speakText = new SpeechSynthesisUtterance(text)
		
		speakText.onend = e => console.log('Done.... ')
		speakText.onerror = e => console.error('Something went wrong...')
	} 
}

