import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.user;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filters;

export const selectFilterContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (user, filters) => {
    console.log(user);
    return user.filter(item =>
      item.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
