// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html
// в окремий масив. масив вивести в консоль
arr=[]
function scraper(startElement){
    console.log(startElement)
    let children=startElement.children
    for (const child of children) {
        if(!!child.className){arr.push(child.className)}
        scraper(child)
    }
}

scraper(document.body)
console.log(arr);