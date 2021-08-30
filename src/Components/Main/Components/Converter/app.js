export function csvToJSON(csv){
    const [headers, ...lines] = csv
        .replaceAll(/"(?!")/g,"")
        .split(/\n/)
        .map(line => line.split(','))

    const parsedObj = lines.map(line =>
        line.reduce((obj, value, index) => {
            const key = headers[index]
            obj[key] = value
            return obj
        }, {})
    )

    const formattedJSON = parsedObj.map(line => (
        <span className={"line"}>{"{"}{
            Object.entries(line).map(([key, value]) => (
                <span className={"entry"}>"{key}":"{value}"</span>
            ))
        }{"}"}</span>
    ))

    return (<code className={"output"}>[{formattedJSON}]</code> )
}