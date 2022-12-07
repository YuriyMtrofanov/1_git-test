function createHeader(){
    const header = document.createElement('h1')
    header.textContent = 'First git test'
    document.body.append(header)
}

createHeader()

function createParagraph(){
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Add paragraph'
    document.body.append(paragraph)
}

createParagraph()

console.log('Объединил ветки main и develop')