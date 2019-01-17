import axios from 'axios';
import { FETCH_ITEMS } from './types';
import { baseUrl } from '../helpers/baseUrl';
import { htmlDecode } from '../helpers/htmlDecode';

export const fetchItems = () => {
  const allItems = [];
  axios.get(baseUrl)
    .then(res => {
      res.data.map(item => {
        item.body = htmlDecode(item.body);
        return item;
      })
      allItems.push(...res.data);
    });
  return {
    type: FETCH_ITEMS,
    payload: allItems
  }
}