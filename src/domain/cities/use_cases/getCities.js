import citiesRepository from '../repository/worldCitiesRespository'

exports.getAllCitiesUseCase = (ctx) => {
    ctx.body = citiesRepository.getAllCitiesRepository()
    return ctx
}

exports.getCitiesByCountryUseCase = (ctx) => { //ESTE ES
    const ciudades = citiesRepository.searchCitiesByCountryName(ctx.params.country)
    if(ciudades.length!=0){
        ctx.body = ciudades
    }
    else{
        ctx.body = {message: "No se encontraron ciudades para el país ingresado"}
    }
    ctx.status = 200
    return ctx
}

exports.getCitiesByCityNameAndCountryUseCase = (ctx) => {
    ctx.body = citiesRepository.searchCityByCityNameAndCountry(ctx.params.city, ctx.params.country)
    return ctx
}