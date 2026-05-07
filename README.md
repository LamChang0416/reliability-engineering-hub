# Reliability Engineering Hub 🛠️

Welcome to the **Reliability Engineering Hub**, a collection of interactive, web-based tools designed for Reliability Engineers, Quality Professionals, and System Designers. Created by **Engineer Lam**.

## 🚀 Live Demo
Access the interactive dashboard here: [https://lamchang0416.github.io/reliability-engineering-hub/](https://lamchang0416.github.io/reliability-engineering-hub/)

## 🛠️ Included Tools

### 1. ALT Simulator (Arrhenius Model)
An interactive simulator to calculate **Acceleration Factors (AF)** and required **Lab Test Durations** based on thermal stress.
- **Physics-of-Failure**: Uses the Arrhenius equation.
- **Ea Reference Guide**: Built-in activation energy values for various failure mechanisms.
- **Visual Analytics**: Real-time bar charts comparing field life vs. lab stress.
- **Export Feature**: Download your simulation results as high-quality images for reports.

### 2. Shock Energy Simulator
An interactive tool to simulate mechanical shock events by evaluating peak acceleration (G), duration (ms), and energy density for different waveforms.
- **Waveform Analysis**: Support for Half-Sine, Sawtooth, and Trapezoidal waveforms.
- **Velocity Change (ΔV)**: Automatic calculation of Delta-V with severity classifications.
- **Real-Time Visualization**: Dynamic pulse generation and graphing based on user inputs.

### 3. Altitude Physics Simulator
An interactive dashboard simulating the three critical physics-of-failure mechanisms triggered by high-altitude air cargo shipping.
- **Thermal Trap**: Visualizes CPU overheating as air density drops and convection cooling fails.
- **Pressure Bomb**: Simulates capacitor swelling and rupture due to reduced external pressure.
- **Arcing Ghost**: Demonstrates dielectric breakdown risk per Paschen's Law at low pressure.
- **Real-Time Control**: Single altitude slider (0–45,000 ft) drives all three failure modes simultaneously.

### 4. BGA Fatigue Simulator
An interactive tool to simulate BGA solder joint thermal fatigue using the Coffin-Manson model.
- **Acceleration Factor (AF)**: Calculate AF based on field conditions vs. lab test parameters.
- **Thermal Fatigue Visualization**: Visualizes micro-tension and massive stress bend on chip, solder, and PCB.
- **Material Properties**: Adjustable fatigue exponent for different solder materials (e.g., SnPb, SAC305).

### 5. Vibration Resonance Simulator
An interactive tool to analyze component resonance behavior under vibration profiles. It helps determine transmissibility and structural risk.
- **Transmissibility**: Calculates dynamic amplification factor based on damping.
- **Structural Risk Assessment**: Evaluates the risk of resonant failure under expected vibration.
- **Interactive Visuals**: Real-time graphing to observe behavior across frequency spectrums.

### 6. CDU Dew Point Simulator (PWA Supported)
An interactive tool to calculate precise dew points for AI GPU liquid cooling systems.
- **Physics Formula**: Calculates precise dew points using the Magnus-Tetens formula.
- **Visual Warning**: Shows real-time thermal throttling (GPU heating) and condensation (short circuit) risks.
- **Haptic & Visual Feedback**: Simulates critical environmental feedback for immersion.
- **Offline PWA**: Installable as a standalone app for use in signal-less data centers or cleanrooms.

## 📂 Project Structure
- `index.html`: The central hub and entry point.
- `tools/`: Individual engineering tools categorized by function.
  - `alt-simulator/`: ALT / Arrhenius acceleration factor simulator.
  - `shock-simulator/`: Mechanical shock energy and waveform simulator.
  - `altitude-physics-simulator.html`: High-altitude air cargo physics simulator.
  - `bga-fatigue-simulator.html`: BGA solder joint thermal fatigue simulator.
  - `vib_resonance.html`: Vibration resonance behavior and transmissibility simulator.
  - `cdu_dew_point.html`: AI Server CDU liquid cooling dew point simulator.
- `assets/`: Shared styles and branding elements.

## 📖 How to Use
1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Select a tool from the hub and start simulating!

## 🤝 Connectivity
Feel free to connect with me on **LinkedIn** to discuss reliability engineering and physics-of-failure!

---
*Created with ❤️ by Engineer Lam*
