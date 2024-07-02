const { getCitiesByCountryUseCase } = require('../../../../src/domain/cities/use_cases/getCities');
jest.mock('../../../../src/domain/cities/repository/worldCitiesRespository.js');

const citiesRepository = require('../../../../src/domain/cities/repository/worldCitiesRespository.js');

describe('getCitiesByCountryUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Resetea todos los mocks antes de cada test
    });

    it('debería retornar la lista de ciudades con status 200 de Chile para cHiLe', () => {
        //Este test valida que busque de todas formas el pais correspondiente independiente de las mayusculas o minusculas
        const country = 'cHiLe';
        const cities = ['Santiago', 'Valparaíso', 'Concepción'];
        citiesRepository.searchCitiesByCountryName.mockReturnValue(cities);
        const ctx = {
            params: { country },
            body: null
        };
        getCitiesByCountryUseCase(ctx);
        expect(citiesRepository.searchCitiesByCountryName).toHaveBeenCalledWith(country);
        expect(ctx.body).toEqual(cities);
        expect(ctx.status).toEqual(200);
    });

    it('debería retornar el mensaje especial con status 200 para Wakanda', () => {
        //Wakanda no existe por lo que se utiliza para el 2do caso
        const country = 'Wakanda';
        const cities = [];
        citiesRepository.searchCitiesByCountryName.mockReturnValue(cities);
        const ctx = {
            params: { country },
            body: null
        };
        getCitiesByCountryUseCase(ctx);
        expect(citiesRepository.searchCitiesByCountryName).toHaveBeenCalledWith(country);
        expect(ctx.body).toEqual({ message: 'No se encontraron ciudades para el país ingresado' });
        expect(ctx.status).toEqual(200);
    });

    it('debería retornar status 400 y body con instrucciones cuando se ingresan números en el país', () => {
        //R2D2 tiene un numero
        const country = 'R2D2';
        const cities = [];
        citiesRepository.searchCitiesByCountryName.mockReturnValue(cities);
        const ctx = {
            params: { country },
            body: null
        };
        getCitiesByCountryUseCase(ctx);
        expect(citiesRepository.searchCitiesByCountryName).toHaveBeenCalledWith(country);
        expect(ctx.body).toEqual({ message: "Solo se aceptan caracteres no numéricos" });
        expect(ctx.status).toEqual(400);
    });
    it('debería retornar status 400 y body con instrucciones para ingresar un pais con mas caracteres', () => {
        //CH es un pais de solo dos caracteres por lo que no deberia dejar
        const country = 'CH';
        const cities = [];
        citiesRepository.searchCitiesByCountryName.mockReturnValue(cities);
        const ctx = {
            params: { country },
            body: null
        };
        getCitiesByCountryUseCase(ctx);
        expect(citiesRepository.searchCitiesByCountryName).toHaveBeenCalledWith(country);
        expect(ctx.body).toEqual({ message: "El país/ciudad ingresado debe tener al menos 3 caracteres" });
        expect(ctx.status).toEqual(400);
    });
});
