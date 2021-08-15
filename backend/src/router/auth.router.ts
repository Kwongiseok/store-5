import express from 'express';
import { AuthController } from '../controller/auth.controller';
import wrapAsync from '../utils/wrap-async';

const router = express.Router();

router.get('/check', wrapAsync(AuthController.checkLoggedIn));
router.get('/sample', AuthController.getSampleLogin);
router.post('/logout', wrapAsync(AuthController.logout));
router.get('/github/callback', wrapAsync(AuthController.getOAuthGitHubCb));

router.get('/address', wrapAsync(AuthController.getAddresses));
router.post('/address', wrapAsync(AuthController.createAddress));
router.delete('/address/:id', wrapAsync(AuthController.deleteAddress));
router.put('/address', wrapAsync(AuthController.updateAddress));

export default router;
