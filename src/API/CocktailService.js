import axios from 'axios'

export default class CocktailService{
    static async getPopularCocktails (){
        const index=6;
        let drinks = [];
        for (let i=0;i<index;i++){
            const responce = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            drinks.push(...(responce.data.drinks))
        }
        return drinks;
    }
    static async getCocktailById(id){
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        return response;
    }
    static async getCocktailByName(name){
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        return response;
    }
}