# Reliability Engineering Hub 🛠️

[English Version](#english-version) | [繁體中文版](#繁體中文版)

---

## <a name="english-version"></a> English Version

Welcome to the **Reliability Engineering Hub**, a collection of interactive, web-based tools designed for Reliability Engineers, Quality Professionals, and System Designers. Created by **Engineer Lam**.

### 🚀 Live Demo
Access the interactive dashboard here: [https://lamchang0416.github.io/reliability-engineering-hub/](https://lamchang0416.github.io/reliability-engineering-hub/)

### 🛠️ Included Tools

#### 1. ALT Simulator (Arrhenius Model)
An interactive simulator to calculate **Acceleration Factors (AF)** and required **Lab Test Durations** based on thermal stress.
- **Physics-of-Failure**: Uses the Arrhenius equation.
- **Ea Reference Guide**: Built-in activation energy values for various failure mechanisms.
- **Visual Analytics**: Real-time bar charts comparing field life vs. lab stress.
- **Export Feature**: Download your simulation results as high-quality images for reports.

#### 2. Shock Energy Simulator
An interactive tool to simulate mechanical shock events by evaluating peak acceleration (G), duration (ms), and energy density for different waveforms.
- **Waveform Analysis**: Support for Half-Sine, Sawtooth, and Trapezoidal waveforms.
- **Velocity Change (ΔV)**: Automatic calculation of Delta-V with severity classifications.
- **Real-Time Visualization**: Dynamic pulse generation and graphing based on user inputs.

#### 3. Altitude Physics Simulator
An interactive dashboard simulating the three critical physics-of-failure mechanisms triggered by high-altitude air cargo shipping.
- **Thermal Trap**: Visualizes CPU overheating as air density drops and convection cooling fails.
- **Pressure Bomb**: Simulates capacitor swelling and rupture due to reduced external pressure.
- **Arcing Ghost**: Demonstrates dielectric breakdown risk per Paschen's Law at low pressure.
- **Real-Time Control**: Single altitude slider (0–45,000 ft) drives all three failure modes simultaneously.

#### 4. BGA Fatigue Simulator
An interactive tool to simulate BGA solder joint thermal fatigue using the Coffin-Manson model.
- **Acceleration Factor (AF)**: Calculate AF based on field conditions vs. lab test parameters.
- **Thermal Fatigue Visualization**: Visualizes micro-tension and massive stress bend on chip, solder, and PCB.
- **Material Properties**: Adjustable fatigue exponent for different solder materials (e.g., SnPb, SAC305).

#### 5. Vibration Resonance Simulator
An interactive tool to analyze component resonance behavior under vibration profiles. It helps determine transmissibility and structural risk.
- **Transmissibility**: Calculates dynamic amplification factor based on damping.
- **Structural Risk Assessment**: Evaluates the risk of resonant failure under expected vibration.
- **Interactive Visuals**: Real-time graphing to observe behavior across frequency spectrums.

#### 6. CDU Dew Point Simulator (PWA Supported)
An interactive tool to calculate precise dew points for AI GPU liquid cooling systems.
- **Physics Formula**: Calculates precise dew points using the Magnus-Tetens formula.
- **Visual Warning**: Shows real-time thermal throttling (GPU heating) and condensation (short circuit) risks.
- **Haptic & Visual Feedback**: Simulates critical environmental feedback for immersion.
- **Offline PWA**: Installable as a standalone app for use in signal-less data centers or cleanrooms.

#### 7. Bathtub Curve Simulator
An interactive business actuarial and reliability tool simulating the HALT Bathtub Curve.
- **Financial Simulation**: Optimizes net profit by balancing Burn-in, BOM Quality, and RMA risks.
- **Physics-of-Failure Engine**: Uses Arrhenius model for real-time expected life calculations.
- **Dynamic Graphics**: Interactive bathtub curve chart responding to changes in early failure or wear-out periods.

#### 8. ASTM D4169-23 Simulator (PWA Supported)
An interactive tool to generate and simulate ASTM D4169-23 shipping container performance test plans.
- **Test Sequence Logic**: Generates fully compliant test sequences based on gross weight, dimensions, Distribution Cycles (DC 1-18), and Assurance Levels.
- **Interactive Sandbox**: Watch package animations simulating drops (Schedule A/J), stacking compression (Schedule B/C), random vibration (Schedule D/E/F), low pressure (Schedule I), and rail impact shock (Schedule G).
- **Dual Language**: Seamlessly toggle between English and Traditional Chinese for reports.

#### 9. Drop Test Engineering Mode
An interactive tool to perform post-drop test functional verification of a smartphone via Web APIs.
- **Hardware Verification**: Test touch screen, physical volume buttons, and vibration motor.
- **Connectivity Check**: Verify Wi-Fi network status and Bluetooth API availability.
- **Engineering Interface**: Minimalist UI for quick Pass/Fail testing.

### 📂 Project Structure
- `index.html`: The central hub and entry point.
- `tools/`: Individual engineering tools categorized by function.
  - `alt-simulator/`: ALT / Arrhenius acceleration factor simulator.
  - `shock-simulator/`: Mechanical shock energy and waveform simulator.
  - `altitude-physics-simulator.html`: High-altitude air cargo physics simulator.
  - `bga-fatigue-simulator.html`: BGA solder joint thermal fatigue simulator.
  - `vib_resonance.html`: Vibration resonance behavior and transmissibility simulator.
  - `cdu_dew_point.html`: AI Server CDU liquid cooling dew point simulator.
  - `bathtub-curve-simulator.html`: Bathtub curve actuarial simulator for HALT testing and BOM cost.
  - `astm-d4169-simulator.html`: ASTM D4169-23 shipping test sequence generator and simulator.
  - `drop-test.html`: Smartphone drop test functional verification tool.
- `assets/`: Shared styles and branding elements.

### 📖 How to Use
1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Select a tool from the hub and start simulating!

### 🤝 Connectivity
Feel free to connect with me on **LinkedIn** to discuss reliability engineering and physics-of-failure!

---

## 繁體中文版

歡迎來到 **可靠度工程工具中心 (Reliability Engineering Hub)**，本專案提供一系列專為可靠度工程師、品質管理專家及系統設計師打造的互動式網頁工具。由 **工程師 Lam** 開發。

### 🚀 線上展示
點此開啟互動式主控台：[https://lamchang0416.github.io/reliability-engineering-hub/](https://lamchang0416.github.io/reliability-engineering-hub/)

### 🛠️ 內建模擬工具

#### 1. ALT 加速壽命測試模擬器 (阿倫尼烏斯模型)
針對溫度應力計算**加速因子 (AF)**與所需的**實驗室測試時間**。
- **失效物理 (Physics-of-Failure)**：基於 Arrhenius 方程式。
- **Ea 啟動能參考指南**：內建多種常見失效機制的活化能數值。
- **視覺化分析**：即時生成長條圖，直觀對比產品實際壽命與實驗室測試應力。
- **匯出功能**：可一鍵下載高畫質模擬結果圖表，便於加入工程報告。

#### 2. 機械衝擊能量模擬器
藉由輸入峰值加速度 (G)、持續時間 (ms) 及波形，模擬各種機械衝擊事件並計算能量密度。
- **波形支援**：支援半正弦波 (Half-Sine)、後峰鋸齒波 (Sawtooth) 以及梯形波 (Trapezoidal)。
- **速度變化量 (ΔV)**：自動計算 Delta-V 並判定衝擊嚴重度。
- **即時圖表**：依據輸入參數，實時繪製出標準衝擊脈衝波形。

#### 3. 空運高空物理失效模擬器
模擬空運貨物在面臨高空低氣壓環境時，所引發的三種關鍵失效物理機制。
- **熱陷阱 (Thermal Trap)**：展示隨氣壓與空氣密度下降導致對流熱傳效率低落，引起 CPU 過熱。
- **壓力炸彈 (Pressure Bomb)**：模擬密閉電容在外部低壓下膨脹與破裂的物理過程。
- **電弧幽靈 (Arcing Ghost)**：展示在低壓下，依帕邢定律 (Paschen's Law) 造成的介電崩潰與打火風險。
- **連動滑桿**：透過單一高度滑桿 (0-45,000 ft) 連動這三種物理失效模型。

#### 4. BGA 焊點疲勞壽命模擬器
使用 Coffin-Manson 模型，模擬 BGA 錫球在溫度循環 (TC) 測試下的熱疲勞壽命。
- **加速因子 (AF)**：精確計算實際工作溫度區間與實驗室測試應力間的加速因子。
- **應力變形視覺化**：動態展示晶片、錫球與 PCB 在溫差下產生的微小張力與大角度剪切變形。
- **材料庫配置**：提供不同焊料材質（如 SnPb、SAC305）的疲勞指數調整。

#### 5. 震動共振行為模擬器
分析組件在震動剖面下的共振頻率響應，用以評估傳遞率 (Transmissibility) 與結構破壞風險。
- **傳遞率計算**：根據阻尼比 (Damping Ratio) 計算結構動態放大係數。
- **結構破壞評估**：量化在特定震動頻譜下共振失效的潛在風險。
- **互動圖形**：實時生成頻率響應曲線。

#### 6. CDU 露點與凝露風險模擬器 (支援 PWA 離線使用)
AI 伺服器水冷 CDU 液冷架構專用的微氣候與冷凝風險計算器。
- **計算公式**：基於 Magnus-Tetens 公式精密推導露點溫度。
- **三色警示系統**：實時評估 GPU 熱失效（過熱）與露點結露（短路）風險。
- **臨界警告反饋**：結合視覺反饋，高度模擬機房現場實感。
- **PWA 支援**：可下載至手機或電腦，在無網路覆蓋的密閉資料中心或無塵室中完全離線運行。

#### 7. 浴缸曲線與 BOM 成本精算模擬器
將可靠度測試（早期篩選/HALT）決策與商業利潤相結合的工程管理模擬工具。
- **財務決策精算**：分析早期燒機時間、BOM 物料等級與保固期內退貨 (RMA) 成本，找出利潤最大化平衡點。
- **失效物理引擎**：利用 Arrhenius 模型推算操作溫度與失效率的關聯性。
- **動態浴缸曲線**：調動滑桿即可實時改變早期失效期、隨機失效期及耗損失效期的曲線走勢。

#### 8. ASTM D4169-23 運輸測試模擬器 (支援 PWA 離線使用)
產生符合 ASTM D4169-23 標準的運輸貨櫃物流運輸週期 (DC) 測試計畫。
- **物流週期邏輯**：輸入包裝總重量、外觀尺寸，即可針對 DC 1-18 的物流循環及保證等級 (AL) 產生出完整的機台設定與測試順序。
- **互動測試沙盒**：可實時點選或順序播放落摔 (Schedule A/J)、壓縮堆疊 (Schedule B/C)、隨機震動 (Schedule D/E/F)、高空艙壓 (Schedule I) 及鐵路衝擊 (Schedule G) 的動態物理測試動畫。
- **雙語切換**：支援英文及繁體中文一鍵切換，便於撰寫多國測試計畫。

#### 9. 落下測試工程模式 (Drop Test Engineering Mode)
透過網頁 API (Web APIs) 直接進行手機落下測試後的硬體功能驗證。
- **硬體驗證**：測試觸控螢幕（畫布網格）、實體音量鍵與震動馬達。
- **連線檢查**：快速讀取 Wi-Fi 連線狀態與底層藍牙掃描 API。
- **工程介面**：極簡無干擾的 UI，快速判定 Pass/Fail。

### 📂 專案目錄結構
- `index.html`: 首頁與主要入口儀表板。
- `tools/`: 各項工程工具。
  - `alt-simulator/`: ALT 阿倫尼烏斯加速壽命測試模擬器。
  - `shock-simulator/`: 機械衝擊能量與波形模擬器。
  - `altitude-physics-simulator.html`: 高空空運物理失效模擬器。
  - `bga-fatigue-simulator.html`: BGA 焊點溫度循環熱疲勞模擬器。
  - `vib_resonance.html`: 結構共振與震動傳遞率模擬器。
  - `cdu_dew_point.html`: AI 伺服器 CDU 水冷結露風險模擬器。
  - `bathtub-curve-simulator.html`: 浴缸曲線與 BOM 成本精算模擬器。
  - `astm-d4169-simulator.html`: ASTM D4169-23 運輸測試計畫模擬器。
  - `drop-test.html`: 手機落下測試硬體驗證工具。
- `assets/`: 共用樣式與品牌視覺資源。

### 📖 如何使用
1. 複製 (Clone) 本專案到本機。
2. 用瀏覽器直接開啟 `index.html`。
3. 點選您需要的工具，即可開始模擬！

### 🤝 社群聯絡
歡迎透過 **LinkedIn** 與我聯絡，共同探討可靠度工程、失效物理 (PoF) 與測試工程！

---
*Created with ❤️ by Engineer Lam*
