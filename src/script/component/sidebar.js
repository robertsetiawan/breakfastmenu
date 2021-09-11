class SideBar extends HTMLElement {
    set categories(items) {
        this._categories = items;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .list-group{
            cursor: pointer;
        }
        </style>`;
        const listCategory = document.createElement("ul");
        listCategory.classList.add("list-group", "my-3");
        this._categories.forEach(element => {
            const categoryItem = document.createElement('category-item');
            categoryItem.category = element;
            listCategory.appendChild(categoryItem)
            this.append(listCategory);
        });
    }

    renderError(error) {
        this.innerHTML = "";
        this.innerHTML +=
            `<div class="alert alert-danger" role="alert">
        ${error}
        </div>`
    }
}

customElements.define("side-bar", SideBar);