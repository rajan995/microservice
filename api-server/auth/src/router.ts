import { Router } from 'express';
import { loginController } from './controller/login/login.controller';
import { refreshTokenController } from './controller/refreshToken/refreshToken.controller';
import { logoutController } from './controller/logout/logout.controller';
import { verifyOtpController } from './controller/verifyOtp/verifyOtp.controller';

const router = Router();
router.post("/login", loginController );
router.post("/logout", logoutController);
router.post("/tokenRefresh", refreshTokenController);
router.post("/verifyOtp", verifyOtpController);

export default router;