class DailyMeal extends HTMLElement {
    set meal(meal){
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <div>
            <div class="card mb-3" style="max-width: 540px; min-height:90px">
            <div class="row no-gutters align-items-center">
                <div class="col-md-4">
                <img class="img-thumbnail" src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
                </div>
                <div class="col-md-8">
                <div class="card-body container-fluid">
                    <h5 class="card-title text-start">${this._meal.strMeal}</h5>
                </div>
                </div>
            </div>
            </div>
        </div>
        `
    }
}

customElements.define("daily-meal", DailyMeal);