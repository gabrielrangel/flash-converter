export function csvToJSON(csv) {
    const [headers, ...lines] = csv
        .replaceAll(/"(?!")/g, "")
        .split(/\n/)
        .map(line => line.split(','))

    const parsedObj = lines.map(line =>
        line.reduce((obj, value, index) => {
            const key = headers[index]
            obj[key] = value
            return obj
        }, {})
    )

    return parsedObj.reduce((strIn, obj) => {
        const strOut = Object.entries(obj)
            .reduce((acc, [key, value]) =>
                    `${acc}${acc ? ",\n" : ""}   "${key}":"${value}"`
                , "")

        return `${strIn}${strIn ? ",\n" : ""}{\n${strOut}\n}`
    }, "")

}