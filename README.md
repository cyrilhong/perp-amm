### 題目說明

可用 JavaScript, Typescript 或 Python 任一語言實作，如需要使用其他語言時作請先來信。請於 GitHub 建立一個 private repository 將程式碼推送到此 repository，並且加入 [dev@perp.fi](mailto:dev@perp.fi) 為協作者，並且在寄送題目後三天內提供 GitHub 網址。

請設計一個兌幣所模組，系統初始參數有二個 Rt 與 Ru，分別是 TWD 與 USD 的儲備數量 (TWD reserve & USD reserve)。該模組有一個 trade 功能，使用者可以用 TWD 兌換 USD 或是反過來，兌換規則如下：

當使用者使用 x 個 TWD 想要來換 USD 時，系統透過以下公式計算出要給使用者的 USD 數量 y：

```
(Rt + x) * (Ru + y) = Rt * Ru

```

假設台幣庫存有 10,000 元台幣，美金儲備有 1,000 美金，當使用者使用 6000 台幣想要兌換美金時，可得到如下的 375 美金：

```
(10,000 + 6,000) * (1,000 + y) = 10,000 * 1,000
y = -375

```

當 USD 給使用者後，系統中的儲備會隨之改變：

```
Rt` = 10,000 + 6,000 = 16,000
Ru` = 1,000 - 375 = 625

```

下個使用者交易時則會採用新的儲備數量。

除上述邏輯外請撰寫測試，程式不需要有 GUI，僅需要將功能封裝在模組內供呼叫使用與測試即可。提交時請於 README 撰寫如何使用程式以及執行測試。

### How to run the code?

#### Run the front-end with React

1. $ git clone https://github.com/cyrilhong/perp-amm.git
2. $ cd perp-amm
3. $ yarn install
4. $ yarn start
5. open localhost:3000 in your default brwoser, simply type number in the input box to simulating AMM model, then click exchange, you will get the exchange value.

#### Run the test

1. underneath perp-amm, run $ npm test test.js