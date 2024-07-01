import citiesRepository from '../repository/worldCitiesRespository'

exports.getAllCitiesUseCase = (ctx) => {
    ctx.body = citiesRepository.getAllCitiesRepository()
    return ctx
}

exports.getCitiesByCountryUseCase = (ctx) => {
    const country = ctx.params.country;
    const ciudades = citiesRepository.searchCitiesByCountryName(country);
    const regex = /[0-9]/
    if (regex.test(country)) {
        ctx.body = { message: "Solo se aceptan caracteres no numéricos" };
        ctx.status = 400;
    } else {
        if (ciudades.length !== 0) {
            ctx.body = ciudades;
        } else {
            ctx.body = { message: "No se encontraron ciudades para el país ingresado" };
        }
        ctx.status = 200;
    }
    return ctx;
};


exports.getCitiesByCityNameAndCountryUseCase = (ctx) => {
    ctx.body = citiesRepository.searchCityByCityNameAndCountry(ctx.params.city, ctx.params.country)
    return ctx
}