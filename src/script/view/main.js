import $ from 'jquery/dist/jquery.slim';
import MealRepo from '../data/meal-repo';
import '../component/nav-bar.js'
import '../component/sidebar.js';
import '../component/category-item.js';
import '../component/recommendation-meal.js';
import '../component/daily-meal-list.js';
import '../component/daily-meal.js';


const updateDailyMealList = (newList) => {
    const dailyMealListElement = document.querySelector("daily-meal-list");
    dailyMealListElement.listMeal = newList;
}

const renderDailyMealListError = (message) => {
    const dailyMealListElement = document.querySelector("daily-meal-list");
    dailyMealListElement.renderError(message);
}

const searchForMeals = async () => {
    try {
        const results = await MealRepo.searchMeal($('#search_box').val());
        updateDailyMealList(results);
    } catch (error) {
        renderDailyMealListError(error);
    }
}

const getListMeals = async () => {
    try {
        const results = await MealRepo.getMeals();
        updateDailyMealList(results);
    } catch (error) {
        renderDailyMealListError(error);
    }
}

const getCategories = async () => {
    const sideBar = document.querySelector("side-bar");
    try {
        const results = await MealRepo.getCategories();
        sideBar.categories = results;

        setAllCategoryWithClickEvent();
    } catch (error) {
        sideBar.renderError(error);
    }
}

const getMealsByCategory = async (keyword) => {
    try {
        const results = await MealRepo.getMealsByCategory(keyword);
        updateDailyMealList(results);
    } catch (error) {
        renderDailyMealListError(error);
    }
}

const setAllCategoryWithClickEvent = () => {
    const categories = document.querySelectorAll("category-item");
    categories.forEach(element => {
        const id = element.category.strCategory;
        element.addEventListener("click", () => {
            $('rec-meals').remove();
            $('#title').text(`All ${id} Foods`);
            getMealsByCategory(id);
        })
    })
}

const getRecommendation = async () => {
    const recommendationElement = document.querySelector("rec-meals");
    try {
        const meals = [];

        for (let i = 0; i < 3; i++) {
            const result = await MealRepo.randomMeal();
            meals.push(result[0]);
        }
        recommendationElement.content = meals;
    } catch (error) {
        recommendationElement.renderError(error);
    }
}

const main = () => {
    $('#search_btn').on("click", (event) => {
        const keyword = $('#search_box').val()
        event.preventDefault();
        searchForMeals();
        $('rec-meals').remove();
        $('#title').text(`Search Result for "${keyword}"`);
    });
    getRecommendation();
    getCategories();
    getListMeals();
}

export default main;


