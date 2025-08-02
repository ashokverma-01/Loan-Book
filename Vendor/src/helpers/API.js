import { del, get, post, put } from "./api_helper";

import * as url from "./url_helper";

export const getLogging = (data) => post(url.LOGIN, data);

//Trainer
export const createTrainer = (data) => post(url.TRAINER, data);
export const getTrainers = (data) => get(url.TRAINER, data);
export const getTrainer = (id) => get(url.TRAINER + "/" + id);
export const getTrainerReviews = (id) => get(url.TRAINER_REVIEWS + "/" + id);
export const deleteTrainer = (id) => del(url.TRAINER + "/" + id);
export const updateTrainer = (data, id) => put(url.TRAINER + "/" + id, data);
export const statusTrainer = (data, id) =>
  put(url.STATUS_TRAINER + "/" + id, data);

//Customer
export const createCustomer = (data) => post(url.CUSTOMER, data);
export const getCustomers = (data) => get(url.CUSTOMER, data);
export const getCustomer = (id) => get(url.CUSTOMER + "/" + id);
export const deleteCustomer = (id) => del(url.CUSTOMER + "/" + id);
export const updateCustomer = (data, id) => put(url.CUSTOMER + "/" + id, data);
export const statusCustomer = (data, id) =>
  put(url.STATUS_CUSTOMER + "/" + id, data);

//Service category
export const createServiceCategory = (data) => post(url.SERVICE_CATEGORY, data);
export const getServiceCategories = (data) => get(url.SERVICE_CATEGORY, data);
export const getServiceCategory = (id) => get(url.SERVICE_CATEGORY + "/" + id);
export const deleteServiceCategory = (id) =>
  del(url.SERVICE_CATEGORY + "/" + id);
export const updateServiceCategory = (data, id) =>
  put(url.SERVICE_CATEGORY + "/" + id, data);
export const statusServiceCategory = (data, id) =>
  put(url.STATUS_SERVICE_CATEGORY + "/" + id, data);

// Service plan category
export const createServicePlan = (data) => post(url.SERVICE_PLAN, data);
export const getServicePlans = (data) => get(url.SERVICE_PLAN, data);
export const getServicePlan = (id) => get(url.SERVICE_PLAN + "/" + id);
export const deleteServicePlan = (id) => del(url.SERVICE_PLAN + "/" + id);
export const updateServicePlan = (data, id) =>
  put(url.SERVICE_PLAN + "/" + id, data);
export const statusServicePlan = (data, id) =>
  put(url.STATUS_SERVICE_PLAN + "/" + id, data);

// Promotions and  Offers
export const createPromotions = (data) => post(url.PROMOTION_OFFER, data);
export const getPromotions = (data) => get(url.PROMOTION_OFFER, data);
export const getPromotion = (id) => get(url.PROMOTION_OFFER + "/" + id);
export const deletePromotion = (id) => del(url.PROMOTION_OFFER + "/" + id);
export const updatePromotion = (data, id) =>
  put(url.PROMOTION_OFFER + "/" + id, data);
export const statusPromotion = (data, id) =>
  put(url.STATUS_PROMOTION_OFFER + "/" + id, data);

// Static Content
export const createStaticContent = (data) => post(url.STATIC_CONTENT, data);
export const getStaticContents = (data) => get(url.STATIC_CONTENT, data);
export const getStaticContent = (id) => get(url.STATIC_CONTENT + "/" + id);
export const deleteStaticContent = (id) => del(url.STATIC_CONTENT + "/" + id);
export const updateStaticContent = (data, id) =>
  put(url.STATIC_CONTENT + "/" + id, data);
export const statusStaticContent = (data, id) =>
  put(url.STATUS_STATIC_CONTENT + "/" + id, data);
