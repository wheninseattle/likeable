// shamelessly stolen from: https://stackoverflow.com/questions/34342425/convert-xls-to-csv-on-the-server-in-node
const xlsx = require('xlsx')
const fs = require('fs')

const files = fs.readdirSync('.')
const workbooks = files.filter(f => f.includes('.xlsx'))

for (let wb of workbooks) {
    const outputName = wb.replace('.xlsx', '.csv')
    const workbook = xlsx.readFile(wb)
    xlsx.writeFile(workbook, outputName, { bookType: "csv" });
}