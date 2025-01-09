# 1131_FinalProject
## 主題：餐廳點餐與訂單管理系統
我們設計了一個可以讓使用者點餐的系統，此系統是設計給幫忙點餐的服務人員，且在點餐後可以修改顧客的資訊。
> 目標：提供使用者視覺化的前端介面，並透過後端 API 進行資料創建、讀取、更新、刪除的操作。

### 系統架構說明
本系統主要分為前端與後端兩個部分，前端部分負責與使用者的互動，後端部分則負責資料的處理與存儲，兩者透過 API 進行溝通。系統架構遵循典型的 MVC（Model-View-Controller）設計模式，確保功能模組分離、維護簡便。

### 架構圖
![未命名绘图.drawio-2](https://hackmd.io/_uploads/Byjji_LLJg.png)

### 流程圖
![未命名绘图.drawio](https://hackmd.io/_uploads/BJGYRtILyx.png)

### 安裝與執行指引
#### 環境需求
* 前端開發 : React + ts
* 後端開發 : Node.js + Express
* 資料庫 : MongoDB
* UI/UX 設計工具：Figma
* API測試 : PostMan
* 安裝套件 : npm
#### 瀏覽應用
在瀏覽器中打開 http://localhost:5173 來使用應用。


### 技術選擇原因
1. 前端技術選擇：React + TypeScript
* React：是目前最受歡迎的前端框架之一，能夠幫助開發者高效地構建交互式的使用者界面。它的虛擬 DOM 技術可以有效提升應用的性能，並且支持組件化開發，讓代碼更具可維護性。
* TypeScript：是 JavaScript 的超集，添加了靜態類型檢查。對於大型應用而言可以顯著提升代碼的可維護性和開發效率，並幫助捕捉一些潛在的錯誤。

2. 後端技術選擇：Node.js + Express
* Node.js：其非同步 I/O 模型和高效能的事件驅動架構，能夠高效地處理大量的並發請求，提供快速的響應速度。
* Express：是一個極為輕量且靈活的 Node.js 框架，能夠快速搭建 RESTful API，且提供豐富的中間件支持，適合開發簡單且高效的後端服務。

3. 資料庫選擇：MongoDB
* MongoDB：是一款 NoSQL 資料庫，特別適合儲存不需要嚴格結構的資料，且具有靈活的擴展性。由於餐廳訂單的資料結構可能會有所變化，MongoDB 的靈活性使得系統能夠在後續進行擴展與調整。

4. API 測試工具：Postman
* API 測試工具，能夠快速發送各種 HTTP 請求，並查看 API 的回應結果。

5. UI/UX 設計工具：Figma
* 雲端設計工具，支持設計師與開發者協作，並提供直觀的界面設計與互動設計，確保 UI 與使用者體驗一致。能快速創建響應式設計，並保持設計風格的一致性。

### 後端資料庫開發（基於 MVC 架構建議）
* 使用 MongoDB 設計資料庫。
* 提供對應 CRUD 的 API 端點：

|      功能       | 請求  |          API           |
|:---------------:|:----:|:----------------------:|
| Create| POST | /api/v1/user/insertOne |
|Read|GET|/api/v1/user/findAll|
|Update |PUT|/api/v1/user/updateOrderBySid|
|Delete |DELETE|/api/v1/user/deleteBySid|

> API 回應格式 : JSON

### API 測試
1. Create(新增訂單)
* POST 方法
* 新增一筆訂單資料。
![image](https://hackmd.io/_uploads/H16zKDLUJe.png)
2. Read(取得訂單)
* GET 方法
* 取得所有的訂單資訊。
![image](https://hackmd.io/_uploads/S1wNqDUIJg.png)
> 前端會寫入根據顧客的訂單編號、姓名或手機號碼查詢資料。
3. Update(更新訂單)
* PUT 方法
* 根據訂單編號更新顧客姓名、手機號碼或備註。
![image](https://hackmd.io/_uploads/HJfFqPIU1e.png)
4. Delete(刪除訂單) 
* DELETE 方法
* 根據訂單編號刪除訂單資料。
![image](https://hackmd.io/_uploads/BJyqKvIUJe.png)

### 前端開發
* Figma 設計/繪製前端頁面。
* React + ts 開發使用者介面。
* CSS 樣式設計。
* 實現基本互動與導覽介面，使用者能透過前端操作執行 CRUD 功能。
* 串接後端 API，於前端顯示資料並提供操作介面。

### 分支提交紀錄
＊ 因為本來是分開來寫的，後來放同一個倉庫所以沒有提交紀錄，這裡可以附上原本的倉庫，分支有在裡面。
＊ GitHub 連結：https://github.com/Chun-Lin-Huang/react-ts-final

### figma
figma 連結：https://reurl.cc/A69GyY

### 操作影片
Youtube：https://youtube.com/shorts/HSALMVHIjs8?si=bJ2m8whAJ2DXD2bd