const container = document.getElementById("container")

const adicionaItem = () => {

    const botao = document.getElementById("botao")
    const novoItem = document.createElement("article")
    novoItem.setAttribute("class", "item")
    novoItem.setAttribute("onclick", "removeItem(event)")
    container.insertAdjacentElement("beforeend", novoItem)

}

const removeItem = (event) => {
    let remover = event.target
    remover.remove()
}