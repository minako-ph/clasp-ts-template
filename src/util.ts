export const columnHeaders = ['日付', '内容', '金額'] as const

type ColumnHeader = (typeof columnHeaders)[number]

type ColumnHeaderIndexMap = Record<ColumnHeader, number>

const isColumnHeader = (item: string): item is ColumnHeader => {
  return columnHeaders.some((type) => type === item)
}

/**
 * シートのヘッダーの列数情報を取得
 * NOTE: どのヘッダーが何列目にあるのかを取得する
 */
export const getColumnIndexMap = (
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
): ColumnHeaderIndexMap => {
  const headerValues: string[] = sheet
    .getRange(1, 1, 1, sheet.getLastColumn())
    .getValues()[0]

  return headerValues.reduce<ColumnHeaderIndexMap>((acc, item, index) => {
    if (isColumnHeader(item)) {
      acc[item] = index
    }
    return acc
  }, {} as ColumnHeaderIndexMap)
}

export const setTrigger = () => {
  const nextDt = new Date()
  nextDt.setDate(nextDt.getDate() + 1)
  nextDt.setHours(10)
  nextDt.setMinutes(0)

  console.log(`🐛 debug: 次回のトリガーは${nextDt}に設定しました`)

  ScriptApp.newTrigger('main').timeBased().at(nextDt).create();
}
