export const setTrigger = () => {
  const nextDt = new Date()
  nextDt.setDate(nextDt.getDate() + 1)
  nextDt.setHours(10)
  nextDt.setMinutes(0)

  console.log(`🐛 debug: 次回のトリガーは${nextDt}に設定しました`)

  ScriptApp.newTrigger('main').timeBased().at(nextDt).create();
}
