export interface getReviews {
  id: number;
  created_at: string;
  productID: number;
  reviewText: string;
  userID: string;
  stars: number;
  pros: string[];
  cons: string[];
  wouldRecommend: boolean;
  email: string;
}

export type omitter = 'id' | 'created_at';

export type addReviews = Omit<getReviews, omitter>;

export interface updateReviews extends addReviews {
  uniqueReviewId: string;
}
