import express from 'express';

import authRouter from './auth.router';
import goodsRouter from './goods.router';
import userRouter from './user.router';
import categoryRouter from './category.router';
import wishRouter from './wish.router';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/goods', goodsRouter);
router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/wish', wishRouter);
export default router;
