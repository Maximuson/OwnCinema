let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
    brone:[ 1],
    places: [
        { placeNum: 1, isBrone: false },
        { placeNum: 10, isBrone: false },
        { placeNum: 19, isBrone: false },
        { placeNum: 28, isBrone: false },
        { placeNum: 37, isBrone: false },
        { placeNum: 46, isBrone: false },
        { placeNum: 2, isBrone: false },
        { placeNum: 11, isBrone: false },
        { placeNum: 20, isBrone: false },
        { placeNum: 29, isBrone: false },
        { placeNum: 38, isBrone: false },
        { placeNum: 47, isBrone: false },
        { placeNum: 3, isBrone: false },
        { placeNum: 12, isBrone: false },
        { placeNum: 21, isBrone: false },
        { placeNum: 30, isBrone: false },
        { placeNum: 39, isBrone: false },
        { placeNum: 48, isBrone: false },
        { placeNum: 4, isBrone: false },
        { placeNum: 13, isBrone: false },
        { placeNum: 22, isBrone: false },
        { placeNum: 31, isBrone: false },
        { placeNum: 40, isBrone: false },
        { placeNum: 49, isBrone: false },
        { placeNum: 5, isBrone: false },
        { placeNum: 14, isBrone: false },
        { placeNum: 23, isBrone: false },
        { placeNum: 32, isBrone: false },
        { placeNum: 41, isBrone: false },
        { placeNum: 50, isBrone: false },
        { placeNum: 6, isBrone: false },
        { placeNum: 15, isBrone: false },
        { placeNum: 24, isBrone: false },
        { placeNum: 33, isBrone: false },
        { placeNum: 42, isBrone: false },
        { placeNum: 51, isBrone: false },
        { placeNum: 7, isBrone: false },
        { placeNum: 16, isBrone: false },
        { placeNum: 25, isBrone: false },
        { placeNum: 34, isBrone: false },
        { placeNum: 43, isBrone: false },
        { placeNum: 52, isBrone: false },
        { placeNum: 8, isBrone: false },
        { placeNum: 17, isBrone: false },
        { placeNum: 26, isBrone: false },
        { placeNum: 35, isBrone: false },
        { placeNum: 44, isBrone: false },
        { placeNum: 53, isBrone: false },
        { placeNum: 9, isBrone: false },
        { placeNum: 18, isBrone: false },
        { placeNum: 27, isBrone: false },
        { placeNum: 36, isBrone: false },
        { placeNum: 45, isBrone: false },
        { placeNum: 54, isBrone: false },
    ],
    films: [
        {
            name: 'Logan', time: '18:30', places: [
                { placeNum: 1, isBrone: true },
                { placeNum: 10, isBrone: true },
                { placeNum: 19, isBrone: true },
                { placeNum: 28, isBrone: true },
                { placeNum: 37, isBrone: false },
                { placeNum: 46, isBrone: false },
                { placeNum: 2, isBrone: true },
                { placeNum: 11, isBrone: false },
                { placeNum: 20, isBrone: false },
                { placeNum: 29, isBrone: true },
                { placeNum: 38, isBrone: false },
                { placeNum: 47, isBrone: true },
                { placeNum: 3, isBrone: false },
                { placeNum: 12, isBrone: false },
                { placeNum: 21, isBrone: false },
                { placeNum: 30, isBrone: false },
                { placeNum: 39, isBrone: false },
                { placeNum: 48, isBrone: false },
                { placeNum: 4, isBrone: false },
                { placeNum: 13, isBrone: false },
                { placeNum: 22, isBrone: false },
                { placeNum: 31, isBrone: false },
                { placeNum: 40, isBrone: false },
                { placeNum: 49, isBrone: false },
                { placeNum: 5, isBrone: false },
                { placeNum: 14, isBrone: false },
                { placeNum: 23, isBrone: false },
                { placeNum: 32, isBrone: false },
                { placeNum: 41, isBrone: false },
                { placeNum: 50, isBrone: false },
                { placeNum: 6, isBrone: false },
                { placeNum: 15, isBrone: false },
                { placeNum: 24, isBrone: false },
                { placeNum: 33, isBrone: false },
                { placeNum: 42, isBrone: false },
                { placeNum: 51, isBrone: false },
                { placeNum: 7, isBrone: false },
                { placeNum: 16, isBrone: false },
                { placeNum: 25, isBrone: false },
                { placeNum: 34, isBrone: false },
                { placeNum: 43, isBrone: false },
                { placeNum: 52, isBrone: false },
                { placeNum: 8, isBrone: false },
                { placeNum: 17, isBrone: false },
                { placeNum: 26, isBrone: false },
                { placeNum: 35, isBrone: false },
                { placeNum: 44, isBrone: false },
                { placeNum: 53, isBrone: false },
                { placeNum: 9, isBrone: false },
                { placeNum: 18, isBrone: false },
                { placeNum: 27, isBrone: false },
                { placeNum: 36, isBrone: false },
                { placeNum: 45, isBrone: false },
                { placeNum: 54, isBrone: false },]
        },
        {
            name: 'Rest', time: '18:30', places: [
                { placeNum: 1, isBrone: false },
                { placeNum: 10, isBrone: false },
                { placeNum: 19, isBrone: false },
                { placeNum: 28, isBrone: false },
                { placeNum: 37, isBrone: false },
                { placeNum: 46, isBrone: false },
                { placeNum: 2, isBrone: false },
                { placeNum: 11, isBrone: false },
                { placeNum: 20, isBrone: false },
                { placeNum: 29, isBrone: false },
                { placeNum: 38, isBrone: false },
                { placeNum: 47, isBrone: false },
                { placeNum: 3, isBrone: false },
                { placeNum: 12, isBrone: false },
                { placeNum: 21, isBrone: false },
                { placeNum: 30, isBrone: false },
                { placeNum: 39, isBrone: false },
                { placeNum: 48, isBrone: false },
                { placeNum: 4, isBrone: false },
                { placeNum: 13, isBrone: false },
                { placeNum: 22, isBrone: false },
                { placeNum: 31, isBrone: false },
                { placeNum: 40, isBrone: false },
                { placeNum: 49, isBrone: false },
                { placeNum: 5, isBrone: false },
                { placeNum: 14, isBrone: false },
                { placeNum: 23, isBrone: false },
                { placeNum: 32, isBrone: false },
                { placeNum: 41, isBrone: false },
                { placeNum: 50, isBrone: false },
                { placeNum: 6, isBrone: false },
                { placeNum: 15, isBrone: false },
                { placeNum: 24, isBrone: false },
                { placeNum: 33, isBrone: false },
                { placeNum: 42, isBrone: false },
                { placeNum: 51, isBrone: false },
                { placeNum: 7, isBrone: false },
                { placeNum: 16, isBrone: false },
                { placeNum: 25, isBrone: false },
                { placeNum: 34, isBrone: false },
                { placeNum: 43, isBrone: false },
                { placeNum: 52, isBrone: false },
                { placeNum: 8, isBrone: false },
                { placeNum: 17, isBrone: false },
                { placeNum: 26, isBrone: false },
                { placeNum: 35, isBrone: false },
                { placeNum: 44, isBrone: false },
                { placeNum: 53, isBrone: false },
                { placeNum: 9, isBrone: false },
                { placeNum: 18, isBrone: false },
                { placeNum: 27, isBrone: false },
                { placeNum: 36, isBrone: false },
                { placeNum: 45, isBrone: false },
                { placeNum: 54, isBrone: false },]
        }

    ],



};
export function changeFilm(placesFilm) {
    state.places = placesFilm
    rerenderEntireTree(state)
};


export function brone(props) {
    console.log(props.place.placeNum)
    //props.place.isBrone = !props.place.isBrone;
    if (!props.place.isBrone && !state.brone.includes(props.place.placeNum)) {
      
        state.brone.push(props.place.placeNum)
    }
    
    rerenderEntireTree(state)
}
window.state = state;


/** 
 * 
 * изменяет в глобальном places свойство isBrone на true
 * для всех елементов которые будут переданы масивом в nums
 * @this {broneManyPlaces}
 * @param {Array} nums номера мест
*/
export function broneManyPlaces(nums) {
    nums.forEach(num => {
        state.places.findIndex((e, i) => {
            if (e.placeNum == num) {
                state.places[i].isBrone = true
            } 
        })
    });
    state.brone = []
    rerenderEntireTree(state)
}
window.broneManyPlaces = broneManyPlaces


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;