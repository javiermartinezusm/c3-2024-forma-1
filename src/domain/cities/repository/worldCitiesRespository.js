import worldCitiesDataset from '../../../../dataset/world-cities_json.json'

exports.getAllCitiesRepository = () => {
    return worldCitiesDataset
}

exports.searchCitiesByCountryName = (inputCountryName) => {
    const result = []
    const country_name = inputCountryName.charAt(0).toUpperCase() + inputCountryName.toLowerCase().slice(1)
    worldCitiesDataset.forEach((cityObject) => {
        if(country_name === cityObject.country) result.push(cityObject)
    })
    return result
}

exports.searchCityByCityNameAndCountry = (inputCityName, inputCountryName) => {
    const result = []
    worldCitiesDataset.forEach((cityObject) => {
        if(inputCityName === cityObject.name && inputCountryName === cityObject.country) result.push(cityObject)
    })
    return result
}