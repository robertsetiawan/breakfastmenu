class DailyMealList extends HTMLElement {
    set listMeal(list) {
        this._listMeal = list;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        const container = document.createElement("div");
        container.classList.add("container-fluid");
        const listElement = document.createElement("div");
        listElement.classList.add("row", "justify-content-start", "align-items-center");
        this._listMeal.forEach(element => {
            const column = document.createElement("div");
            column.classList = "col-sm-6";
            const mealElement = document.createElement("daily-meal");
            mealElement.meal = element;
            column.appendChild(mealElement);
            listElement.appendChild(column);
        });
        container.appendChild(listElement);
        this.appendChild(container);
    }

    renderError(error) {
        this.innerHTML = "";
        this.innerHTML +=
            `<div class="alert alert-danger" role="alert">
        ${error}
        </div>`
    }
}

customElements.define("daily-meal-list",DailyMealList);