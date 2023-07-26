const github = document.getElementById('github');
const instagram = document.getElementById('instagram')
const linkedin = document.getElementById('linkedin')

github.addEventListener('click', () => {
    window.open('https://github.com/Anupam890');
})

instagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/_http.anupam_360/')

})

linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/anupam-mandal-536774247/')

})

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzGRpSy_nb7jny8yMJOg7M9_YYJNqlbu-Pozd2RDcgsZwMmvBZt0fZYXwGlefKtJA8M/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")
//
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => {
//             msg.innerHTML = "Message sent successfully"
//             setTimeout(function(){
//                 mag.innerHTML = ""
//             },5000)
//             form.reset()
//         })
//         .catch(error => console.error('Error!', error.message))
// })