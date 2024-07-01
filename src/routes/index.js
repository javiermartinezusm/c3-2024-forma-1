import Router from 'koa-router'
import getHealth from './health/health'
import getCitiesUseCase from '../domain/cities/use_cases/getCities'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/cities', getCitiesUseCase.getAllCitiesUseCase)
router.get('/api/cities/by_country/:country', getCitiesUseCase.getCitiesByCountryUseCase)//Este
router.get('/api/city/:city/country/:country', getCitiesUseCase.getCitiesByCityNameAndCountryUseCase)

export default router
