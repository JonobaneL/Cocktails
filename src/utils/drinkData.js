export const getIngredients =(drink)=>{
    const iCount = 15;
    const ingredients =[];
        for(let i=1;i<=iCount;i++)
        {
            let t = drink[`strIngredient${i}`];
            if(t!= null){
                ingredients.push(t)
            }
            else{continue;}
        }
        console.log(ingredients)
        return ingredients;
}
export const getMeasure = (drink,count)=>{
    const measure = [];
    for(let i=1;i<=count;i++){
        measure.push(drink[`strMeasure${i}`])
    }
    console.log(measure)
    return measure
}