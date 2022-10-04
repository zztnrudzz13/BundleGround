function greetings() {
  const greetings = document.createElement('p')

  greetings.innerHTML = 'Welcome to webpack world'

  return greetings
}

document.body.appendChild(greetings())

export default greetings
