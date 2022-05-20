let { query , noOp } = require("./query");

//let listing = query('SELECT * FROM recipe', "");
const RECIPE_LIST_ALL_QUERY = 'SELECT * FROM recipe';
const RECIPE_LIST_BY_TITLE_QUERY_1 ='SELECT title FROM recipe'; 
const RECIPE_LIST_BY_TITLE_QUERY_2 ='SELECT * FROM recipe WHERE title LIKE "%PIZ%"';
const RECIPE_LIST_BY_TITLE_QUERY_3 ='SELECT id FROM recipe where title = "sajtos tészta"'
const RECIPE_LIST_BY_TITLE_QUERY_4 ='SELECT unit FROM hozzavalok WHERE recipe_id = 1'
const RECIPE_LIST_BY_TITLE_QUERY_5 ='SELECT hozzavalok.unit FROM hozzavalok JOIN recipe ON recipe.id = hozzavalok.recipe_id WHERE title = "sajtos tészta"'
const RECIPE_LIST_BY_TITLE_QUERY_6 ='SELECT * FROM hozzavalok JOIN recipe ON recipe.id = hozzavalok.recipe_id'


//sajtos tészta hozzá+valoinak unitja 
/*
cica.then((recipes)=>{
    console.log(recipes);
})();
*/
let listRecipes = async function () {
    try{
        let listing = query(RECIPE_LIST_QUERY, "");
        let recipes = await listing;
        return recipes;
    }catch(fuckUp){
        console.log("YOU FUCKED UP!!!"+fuckUp);
    }
};

let titleQuery = async function () {
    try{
        let listing = query(RECIPE_LIST_BY_TITLE_QUERY_5, "");
        let recipes = await listing;
        return recipes;
    }catch(fuckUp){
        console.log("YOU FUCKED UP!!!"+fuckUp);
    }
};

exports.listRecipes =listRecipes;
exports.title = titleQuery;

