import { checkData } from './CheckData.js';

const state = {
  data: [],
  key: 0,
};

export const getState = function () {
  return state.data;
};

export const loadData = function () {
  state.data = getLocalStorge();
};

export const setdata = function (newData) {
  try {
    if (!checkData(newData))
      throw new Error(`[data error] : data is not accurate`);
    state.data = [...state.data, newData];
  } catch (err) {
    console.error(err);
  }
};

const setKey = function () {
  state.key += 1;
};

export const addData = function (inputValue) {
  setKey();
  const newData = { text: inputValue, isCompleted: false, key: state.key };
  setdata(newData);
};

const getLocalStorge = function () {
  return localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : [];
};

export const setLocalStorge = function () {
  localStorage.setItem('data', JSON.stringify(state.data));
};

export const makeIsCompleted = function (cutId) {
  state.data = state.data.map((object) => {
    if (object.key == cutId) {
      object.isCompleted = true;
      return object;
    }
    return object;
  });
  if (!!!state.data) state.data = [];
};

export const removeTodo = function (removeId) {
  state.data = state.data.filter((object) => object.key != removeId);
  if (!!!state.data) state.data = [];
};

export const clearData = function () {
  state.data = [];
  localStorage.clear();
};

export const countData = function () {
  const allData = state.data.length;
  const completedData = state.data.filter(
    (object) => object.isCompleted === true
  ).length;

  return { allData, completedData };
};
