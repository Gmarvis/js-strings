const wordOne = document.getElementById('word-one')
const wordTwo = document.getElementById('word-two')
const btn = document.getElementById('btn')
const results = document.getElementById('results')

btn.addEventListener('click', (event) => {
  event.preventDefault()
  isIsomophic()
  console.log('this is woking well')
})

const isIsomophic = (s, t) => {
  s = wordOne.value
  t = wordTwo.value

  if (!s || !t) {
    results.innerHTML = '<p>please fill all inputs</p>'
    results.style.color = 'red'
    return
  }

  if (s.length !== t.length) {
    results.innerText = 'please enter words of the same length'
    document.getElementById('status').style.color = 'red'
    return
  }
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const firstLatterOfS = s[i]
    const firstLatterOft = t[i]
    if (map[firstLatterOfS] === undefined) {
      map[firstLatterOfS] = firstLatterOft
    } else if (map[firstLatterOfS] !== firstLatterOft) {
      results.innerHTML = '<h2>False</h2>'
      results.style.color = 'red'
      return
    }
  }
  results.innerHTML = '<h2>True</h2>'
  results.style.color = 'green'
}
