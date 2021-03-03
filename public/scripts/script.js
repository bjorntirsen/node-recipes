function addRow() {
  const new_row = document.createElement('tr')
  const name_input = document.createElement('input')
  name_input.setAttribute('name', 'ing_name')
  name_input.setAttribute('type', 'text')
  const name_td = document.createElement('td')
  name_td.appendChild(name_input)
  new_row.appendChild(name_td)
  const amount_input = document.createElement('input')
  amount_input.setAttribute('name', 'ing_amount')
  amount_input.setAttribute('type', 'number')
  const amount_td = document.createElement('td')
  amount_td.appendChild(amount_input)
  new_row.appendChild(amount_td)
  const unit_select = document.createElement('select')
  unit_select.setAttribute('name', 'ing_unit')
  const option1 = document.createElement('option')
  option1.setAttribute('value', 'nypa')
  option1.innerHTML = 'nypa'
  unit_select.appendChild(option1)
  const option2 = document.createElement('option')
  option2.setAttribute('value', 'krm')
  option2.innerHTML = 'krm'
  unit_select.appendChild(option2)
  const option3 = document.createElement('option')
  option3.setAttribute('value', 'tsk')
  option3.innerHTML = 'tsk'
  unit_select.appendChild(option3)
  const option4 = document.createElement('option')
  option4.setAttribute('value', 'msk')
  option4.innerHTML = 'msk'
  unit_select.appendChild(option4)
  const option5 = document.createElement('option')
  option5.setAttribute('value', 'dl')
  option5.innerHTML = 'dl'
  unit_select.appendChild(option5)
  const option6 = document.createElement('option')
  option6.setAttribute('value', 'liter')
  option6.innerHTML = 'liter'
  unit_select.appendChild(option6)
  const option7 = document.createElement('option')
  option7.setAttribute('value', 'paket')
  option7.innerHTML = 'paket'
  unit_select.appendChild(option7)
  const option8 = document.createElement('option')
  option8.setAttribute('value', 'styck')
  option8.innerHTML = 'styck'
  unit_select.appendChild(option8)
  const unit_td = document.createElement('td')
  unit_td.appendChild(unit_select)
  new_row.appendChild(unit_td)
  const ing_table = document.getElementById('ing_table')
  ing_table.appendChild(new_row)
}
addRow()
console.log('inside script')