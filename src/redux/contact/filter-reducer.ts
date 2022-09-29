import { createReducer,PayloadAction } from '@reduxjs/toolkit'; // Импорт функции создания редюсера
import { changeFilter } from './contacts-actions';

 // Use the PayloadAction type to declare the contents of `action.payload`

// Создание редюсера для фильтра в контактах
const filterReduser = createReducer('', {
  [changeFilter.type]: (_:any, { payload }: PayloadAction<string>) => payload,
});

// Экспорт  редюсера
export default filterReduser;
