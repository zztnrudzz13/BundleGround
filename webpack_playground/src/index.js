import greetings from './greetings'

function component() {
  const element = document.createElement('div')

  element.innerHTML = ['Hello', 'webpack'].join(' ')

  return element
}

greetings()
document.body.appendChild(component())
