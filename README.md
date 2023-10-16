# README - 使用useContext在不同頁面共享數據

這個專案示範如何使用`useContext`進行不同頁面的數據共享。我們提供兩種方法來實現這一目的。

---

## 方法一：使用useContext搭配<Outlet />對特定Route共享數據

1. **建立Context**: 建立一個`StringContext.tsx`在`context`資料夾。
2. **建立Provider**: 在`StringProvider.tsx`使用`StringContext`並將其包裹在`<Outlet />`。
3. **配置路由**: 在`router/index.tsx`中使用`StringProvider`作為element。
4. **製作custom hook**: 創建一個`useStr.tsx`的custom hook。
5. **使用custom hook**: 在`PageA.tsx`和`Home.tsx`中使用`useStr`。

---

## 方法二：將建立的Context的Provider包裹住RouterProvider

1. **建立Context**: 建立一個`StringContext.tsx`在`context`資料夾。
2. **建立Provider**: 在`StringProvider.tsx`使用`StringContext`。
3. **將Provider包裹**: 在`main.tsx`中將`RouterProvider`包裹在`StringProvider`裡。
4. **使用Context**: 在`PageA.tsx`和`Home.tsx`中使用`useContext`取得context內的變數。

---

## 注意事項

- 若在非Provider底下的頁面使用`useStr`, 將會出現錯誤訊息。
  
---

## 其他參考資料

path是optional的參數
> [React Router-Router](https://reactrouter.com/en/main/route/route)

若不使用物件的形式撰寫route，也可以透過createroutesfromelements help function來撰寫route，這樣就可以使用JSX的形式撰寫。
> [createroutesfromelements](https://reactrouter.com/en/main/utils/create-routes-from-elements)

---
