export default (array: Array<any>) => {
    const chunks = []
    const length = array.length
    let i = 0
    while (i < length) {
        const chunk = array.slice(i, i + 8)
        chunks.push(chunk)
        i += 8
    }

    return chunks
}
