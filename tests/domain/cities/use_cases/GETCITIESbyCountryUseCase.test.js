const { getCitiesByCountryUseCase } = require('../../../../src/domain/cities/use_cases/getCities');

jest.mock('../../../../src/domain/cities/repository/worldCitiesRespository.js', () => ({
  searchCitiesByCountryName: jest.fn()
}));

const citiesRepository = require('../../../../src/domain/cities/repository/worldCitiesRespository.js');

describe('getCitiesByCountryUseCase', () => {
  it('debería retornar la lista de ciudades de Chile', () => {
    const country = 'Chile';
    const cities = ['Santiago', 'Valparaíso', 'Concepción'];
    citiesRepository.searchCitiesByCountryName.mockReturnValue(cities);
    const ctx = {
      params: {
        country
      },
      body: null
    };
    getCitiesByCountryUseCase(ctx);
    expect(citiesRepository.searchCitiesByCountryName).toHaveBeenCalledWith(country);
    expect(ctx.body).toEqual(cities);
  });

  it('debería retornar una lista vacía para Wakanda', () => {
    const country = 'Wakanda';
    const cities = [];
    citiesRepository.searchCitiesByCountryName.mockReturnValue(cities);
    const ctx = {
      params: {
        country
      },
      body: null
    };
    getCitiesByCountryUseCase(ctx);
    expect(citiesRepository.searchCitiesByCountryName).toHaveBeenCalledWith(country);
    expect(ctx.body).toEqual(cities);
  });
});
