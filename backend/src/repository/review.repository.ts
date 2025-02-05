import { getRepository } from 'typeorm';
import { REVIEW_DB_ERROR } from '../constants/database.error.name';
import { Review } from '../entity/Review';
import { DatabaseError } from '../errors/base.error';
import { getReviewsOption } from '../types/Review';

async function getReviews({ limit, page, goodsId, userId }: getReviewsOption) {
  try {
    const where = new Object();
    if (goodsId) Object.assign(where, { goods: { id: goodsId } });
    if (userId) Object.assign(where, { user: { id: userId } });

    return await getRepository(Review).find({
      skip: limit * (page - 1),
      take: limit,
      where,
      order: {
        id: 'DESC',
      },
      relations: ['goods', 'user', 'reviewImgs'],
    });
  } catch (err) {
    console.error(err);
    throw new DatabaseError(REVIEW_DB_ERROR);
  }
}

async function getReviewsCount({ limit, page, goodsId, userId }: getReviewsOption) {
  try {
    const where = new Object();
    if (goodsId) Object.assign(where, { goods: { id: goodsId } });
    if (userId) Object.assign(where, { user: { id: userId } });

    return await getRepository(Review).count(where);
  } catch (err) {
    console.error(err);
    throw new DatabaseError(REVIEW_DB_ERROR);
  }
}

async function getReviewById(reviewId: number) {
  try {
    return getRepository(Review).findOne({
      relations: ['user'],
      where: {
        id: reviewId,
      },
    });
  } catch (err) {
    console.error(err);
    throw new DatabaseError(REVIEW_DB_ERROR);
  }
}

async function getReviewByIds(userId: number, goodsId: number) {
  try {
    return getRepository(Review).findOne({
      where: {
        user: { id: userId },
        goods: { id: goodsId },
      },
    });
  } catch (err) {
    console.error(err);
    throw new DatabaseError(REVIEW_DB_ERROR);
  }
}

async function deleteReview(reviewId: number) {
  try {
    await getRepository(Review).delete({ id: reviewId });
  } catch (err) {
    console.error(err);
    throw new DatabaseError(REVIEW_DB_ERROR);
  }
}

export const ReviewRepository = {
  getReviews,
  getReviewsCount,
  getReviewById,
  getReviewByIds,
  deleteReview,
};
