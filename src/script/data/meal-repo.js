const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

class MealRepo {
    static getMeals = async () => {
        try {
            const res = await fetch(`${BASE_URL}/search.php?f=a`);
            
            const resJson = await res.json();

            if (resJson.meals) {
                return Promise.resolve(resJson.meals);
            } else {
                return Promise.reject('Error get meals');
            }
        } catch (error) {
            return Promise.reject(`${error}`);
        }
    }

    static searchMeal = async (keyword) => {
        try {
            const res = await fetch(`${BASE_URL}/search.php?s=${keyword}`);
            
            const resJson = await res.json();

            if (resJson.meals != null) {
                return Promise.resolve(resJson.meals);
            } else {
                return Promise.reject('Meal not found');
            }
        } catch (error) {
            return Promise.reject(`${error}`);
        }
    }

    static randomMeal = async() => {
        try {
            const res = await fetch(`${BASE_URL}/random.php`);
            
            const resJson = await res.json();

            if (resJson.meals) {
                return Promise.resolve(resJson.meals);
            } else {
                return Promise.reject('Error get a meal');
            }
        } catch (error) {
            return Promise.reject(`${error}`);
        }
    }

    static getCategories = async() => {
        try {
            const res = await fetch(`${BASE_URL}/categories.php`);
            
            const resJson = await res.json();

            if (resJson.categories) {
                return Promise.resolve(resJson.categories);
            } else {
                return Promise.reject('Error get categories');
            }
        } catch (error) {
            return Promise.reject(`${error}`);
        }
    }

    static getMealsByCategory = async (category) => {
        try {
            const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
            
            const resJson = await res.json();

            if (resJson.meals != null) {
                return Promise.resolve(resJson.meals);
            } else {
                return Promise.reject('Error get meals');
            }
        } catch (error) {
            return Promise.reject(`${error}`);
        }
    }
}

export default MealRepo;