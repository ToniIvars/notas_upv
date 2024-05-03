const table = document.querySelector('table')
const trs = [...table.querySelector('tbody').querySelectorAll('tr')]

let elements = trs.map(tr => {
  let tds = tr.querySelectorAll('td')
  let name = tds[0].textContent
  let mark = tds[1].textContent.replace(',', '.')
  mark = parseFloat(mark.startsWith('.') ? '0' + mark : mark)

  return { name, mark }
})

elements.sort((a, b) => b.mark - a.mark || b.name - a.name)

trs.forEach((tr, i) => {
  let name_td = document.createElement('td')
  name_td.classList.add('alignright')
  name_td.textContent = elements[i].name

  let mark_td = document.createElement('td')
  mark_td.classList.add('alignleft')
  mark_td.textContent = elements[i].mark.toString().replace('.', ',')
  
  tr.replaceChildren(name_td, mark_td)
})

let infoNode = document.createElement('p')
infoNode.style.textAlign = 'center'
infoNode.style.color = '#ff524e'
infoNode.textContent = 'Notas UPV'
document.querySelector('.upv_containercontent').appendChild(infoNode)

console.info('Notas UPV')