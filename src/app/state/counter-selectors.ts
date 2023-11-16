import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ROOT_FEATURE_KEY } from './counter-reducer';
import { ICounter } from './../core/models';

const selectCounterRoot = createFeatureSelector<ICounter>(ROOT_FEATURE_KEY)

export const getCounter = createSelector(selectCounterRoot, (state: ICounter) => state);