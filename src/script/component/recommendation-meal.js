class RecommendationMeal extends HTMLElement {
    set content(meals) {
        this._recommendations = meals;
        this.render();
    }

    render() {
        this.innerHTML = ''
        this.innerHTML += `
        <style>
        .meal-thumb{
            filter: brightness(70%);
        }
        </style>
        <div id="carouselExampleCaptions" class="carousel slide my-3" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="${this._recommendations[0].strMealThumb}" class="meal-thumb d-block w-100" alt="${this._recommendations[0].strMeal}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${this._recommendations[0].strMeal}</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src="${this._recommendations[1].strMealThumb}" class="meal-thumb d-block w-100" alt="${this._recommendations[1].strMeal}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${this._recommendations[1].strMeal}</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src="${this._recommendations[2].strMealThumb}" class="meal-thumb d-block w-100" alt="${this._recommendations[2].strMeal}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${this._recommendations[2].strMeal}</h5>
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>`
    }
    renderError(error) {
        this.innerHTML = "";
        this.innerHTML +=
            `<div class="alert alert-danger" role="alert">
        ${error}
        </div>`
    }
}

customElements.define('rec-meals', RecommendationMeal);