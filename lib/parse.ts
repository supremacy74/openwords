export default (dictionary: any) => {
    const values: any[] = []

    dictionary.def.forEach((definition: any) => {
        definition.tr.forEach((translation: any) => {
            values.push(translation.text)

            if (translation.syn) {
                translation.syn.forEach((synonym: any) => {
                    values.push(synonym.text)
                })
            }
        })
    })

    return values
}
