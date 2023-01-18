var fs = require("fs")

const csv_file = "input_countries.csv"
const canada = "canada.txt"
const usa = "usa.txt"
const header = "country, year, population\n"

const data = fs.readFileSync(csv_file, 'UTF-8')
const lines = data.split("\n")

try {
    if (fs.existsSync(`./${canada}`)) {
        fs.unlinkSync(canada)
    }
    if (fs.existsSync(`./${usa}`)) {
        fs.unlinkSync(usa)
    }
} catch(err) {
    console.log(err)
}

fs.writeFileSync(canada, header)
fs.writeFileSync(usa, header)
lines.forEach(line => {
    if (line.startsWith("Canada")) {
        fs.appendFileSync(canada, line)
    }
    else if (line.startsWith("United States")) {
        fs.appendFileSync(usa, line)
    }
});