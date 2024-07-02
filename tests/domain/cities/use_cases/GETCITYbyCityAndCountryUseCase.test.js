const { getCitiesByCityNameAndCountryUseCase } = require('../../../../src/domain/cities/use_cases/getCities');
const citiesRepository = require('../../../../src/domain/cities/repository/worldCitiesRespository');

jest.mock('../../../../src/domain/cities/repository/worldCitiesRespository.js');

describe('getCitiesByCityNameAndCountryUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Limpiar todos los mocks antes de cada test
    });

    it('debería retornar status 400 y body con instrucciones para ingresar un pais con mas caracteres', () => {
        //US es un pais de solo dos caracteres por lo que no deberia dejar
        const country = 'US';
        const city = 'New York';
        const cities = [];
        citiesRepository.searchCityByCityNameAndCountry.mockReturnValue(cities);

        const ctx = {
            params: { country, city },
            body: null,
            status: null
        };

        getCitiesByCityNameAndCountryUseCase(ctx);
        expect(citiesRepository.searchCityByCityNameAndCountry).toHaveBeenCalledWith(city, country);
        expect(ctx.body).toEqual({ message: 'El país/ciudad ingresado debe tener al menos 3 caracteres' });
        expect(ctx.status).toEqual(400);
    });
    it('debería retornar status 400 y body con instrucciones para ingresar una ciudad con mas caracteres', () => {
        //VA es una ciudad de solo dos caracteres por lo que no deberia dejar
        const country = 'Chile';
        const city = 'VA';
        const cities = [];
        citiesRepository.searchCityByCityNameAndCountry.mockReturnValue(cities);

        const ctx = {
            params: { country, city },
            body: null,
            status: null
        };

        getCitiesByCityNameAndCountryUseCase(ctx);
        expect(citiesRepository.searchCityByCityNameAndCountry).toHaveBeenCalledWith(city, country);
        expect(ctx.body).toEqual({ message: 'El país/ciudad ingresado debe tener al menos 3 caracteres' });
        expect(ctx.status).toEqual(400);
    });
    
});

