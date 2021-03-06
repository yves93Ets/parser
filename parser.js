const fs = require('fs');

const configureFromFile = (configFile = "file.txt") => {
    const config = {}
    const comments = []
    const errors = []
    const trueArr = ["on", "true", "yes", "Yes", "True"]
    const falseArr = ["off", "false", "no", "No", "False"]
    const isInteger = (str) => !/\D/.test(str)
    const isFloat = (str) => /^\d+\.\d+$/.test(str)

    const converToType = (val) => {
        return trueArr.includes(val) ? true :
            falseArr.includes(val) ? false :
                isInteger(val) ? parseInt(val) :
                    isFloat(val) ? parseFloat(val) : val
    }
    try {
        const data = fs.readFileSync(configFile, 'UTF-8');
        const lines = data.split(/\r?\n/);

        lines.forEach((line) => {
            if (line[0] == "#") {
                comments.push(line)
                return
            }
            const [key, value] = line.replace(/\s/g, "").split("=")

            if (value === "" || !value) {
                errors.push(`Error caused by key: ${key} and value: ${value}`)
                return
            }
            const val = converToType(value)
            config[key] = val
        });
    } catch (err) {
        console.error(err);
    }
    config.comments = comments
    config.errors = errors
    return config
}

const config = configureFromFile()
config.comments.map((comment, idx) => {
    console.log(`This is the #${idx + 1} comment \n -- ${comment} -- \n`)
})

console.log(config)
