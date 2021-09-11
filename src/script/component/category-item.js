class CategoryItem extends HTMLElement {
    set category(item) {
        this._category = item;
        this.render();
    }

    get category() {
        return this._category;
    }

    render() {
        this.innerHTML = `
        </style>
        <div id="${this._category.strCategory}">
        <a href="#title">
        <li class="list-group-item">
        <div class="row justify-content-center align-items-center">
        <div class="col-4">
        <img src="${this._category.strCategoryThumb}" class="img-fluid" alt="${this._category.strCategory}">
        </div>
        <div class="col-8">
        <p style="color:black" >${this._category.strCategory}</p>
        </div>
        </div>
        </li>
        </a>
        </div>`
    }
}

customElements.define("category-item", CategoryItem);