import { createAction } from '@reduxjs/toolkit'; // Импорт функции создания экшена

// Создание экшена для фильтра

export const changeFilter = createAction<string, 'contacts/change-filter'>('contacts/change-filter');
// reateAction<number, 'increment'>('increment')