import {Router} from 'express';
import { addOrModifyCountryController, getCountryController } from './controller/country/country.controller';
const router = Router();
router.post("country",addOrModifyCountryController);
router.get("country",getCountryController);

export default router;