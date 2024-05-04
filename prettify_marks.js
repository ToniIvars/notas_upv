const notasUPVElement = '<div style="text-align: center; margin-bottom: 6px;"><span style="color: #ff524e;">Notas UPV</span><input type="checkbox" id="notasupv-check" checked></div>'

const table = document.querySelector('table')
const trs = [...table.querySelector('tbody').querySelectorAll('tr')]
const { elements, sorted_elements } = getElements()

function getElements() {
  let sorted_elements = trs.map(tr => {
    let tds = tr.querySelectorAll('td')
    let name = tds[0].textContent
    let mark = tds[1].textContent.replace(',', '.')
    mark = parseFloat(mark.startsWith('.') ? '0' + mark : mark)

    return { name, mark }
  })

  let elements = [...sorted_elements]
  sorted_elements.sort((a, b) => b.mark - a.mark || b.name - a.name)

  return { elements, sorted_elements }
}

function changeTable(elements) {
  trs.forEach((tr, i) => {
    let name_td = document.createElement('td')
    name_td.classList.add('alignleft')
    name_td.textContent = elements[i].name

    let mark_td = document.createElement('td')
    mark_td.classList.add('alignleft')
    mark_td.textContent = elements[i].mark.toString().replace('.', ',')

    tr.replaceChildren(name_td, mark_td)
  })
}

function setupNotasUPVElement() {
  document.querySelector('.upv_containercontent').insertAdjacentHTML('beforebegin', notasUPVElement)
  document.querySelector('#notasupv-check').addEventListener('change', event => {
    if (event.target.checked) {
      changeTable(sorted_elements)
    } else {
      changeTable(elements)
    }
  })
}

function start() {
  setupNotasUPVElement()
  changeTable(sorted_elements)
  console.info('Notas UPV activo')
}

start()