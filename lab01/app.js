function showPrivate() { 
    // Write your own code!
	let private_ = document.getElementById('private');
	private_.style.visibility = 'hidden';
}
function openURL() {
    // Write your own code!

    window.location.href = "https://kaist.ac.kr"
}

window.onload = function () {
    let unveil = document.getElementById('unveil');
    let contact = document.getElementById('contact');
    console.log("Hello World")
    // Write your own code!
    contact.addEventListener('contact_', openURL)

    unveil.addEventListener('unveil_', showPrivate);
}
~                                              











