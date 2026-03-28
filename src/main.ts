import { getColumnIndexMap } from './util'

export const main = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1')
  if (!sheet) throw new Error('Sheet not found')

  const indexMap = getColumnIndexMap(sheet)
  console.log(`🐛 debug: indexMap = ${JSON.stringify(indexMap)}`)

  const data = sheet.getDataRange().getValues()
  data.slice(1).forEach((row) => {
    const date = row[indexMap['日付']]
    const content = row[indexMap['内容']]
    const amount = row[indexMap['金額']]
    console.log(`🐛 debug: ${date} ${content} ${amount}`)
  })
}
