# scmp-laboratory-web-app

### **1 уровень (обязательный - необходимый минимум)**

- [X]  Реализованы **Требования к функциональности.**
- [X]  Хранение учетных записей пользователей, их избранного и истории поиска реализовано на стороне сервера (https://scmp-bot-server.ru/)

**React**

- [x]  **Пишем функциональные компоненты c хуками**
- [x]  Есть разделение на **умные и глупые компоненты** ()
- [x]  Есть **рендеринг списков**
- [x]  Реализована одна **форма** (компонент SignForm)
- [ ]  Есть применение **Контекст API** (https://ru.reactjs.org/docs/context.html). Да, вроде бы у нас есть ридакс, зачем тогда нам контекст? Помните, что мы лишь трогаем и играемся со всякой апишкой реакта. Да и использование этих инструментов одновременно - это дискуссионный вопрос. Где-то это уместно, где-то не особо. Всему своё место. Если не знаете, где применить в своем приложении, делайте *темную/светлую тему*. Достаточно цвет шапки или кнопку перекрашивать. Не нужно глобально делать темный/светлый дизайн всего приложения и тратить на это время. И не забудьте обернуть через useMemo то, что вы кидаете в value провайдера.
- [ ]  Есть применение **предохранителя** (https://ru.reactjs.org/docs/error-boundaries.html). Можно и свой написать, можно и пакет [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) заюзать. Главное, чтобы вы понимали что это и зачем.
- [ ]  Есть **кастомный хук** ()
- [x]  3 компонента используют **PropTypes** (equipment-card-list, equipment-card, history-list)
- [x]  Поиск не триггерит много запросов к серверу (**debounce**)
- [ ]  Есть применение **lazy + Suspense** (https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting)

**Redux**

- [x]  Использован **Modern Redux with Redux Toolkit**
- [x]  Использованы **слайсы**
- [x]  Есть одна **кастомная мидлвара** (authMiddleware)
- [x]  Используется **RTK Query**
- [x]  Используется **Transforming Responses** (для эндпоинта fetchFavoriteEquipments)
