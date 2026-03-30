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

## 📂 Project Structure
- `index.html`: The central hub and entry point.
- `tools/`: Individual engineering tools categorized by function.
  - `alt-simulator/`: ALT / Arrhenius acceleration factor simulator.
  - `shock-simulator/`: Mechanical shock energy and waveform simulator.
  - `altitude-physics-simulator.html`: High-altitude air cargo physics simulator.
- `assets/`: Shared styles and branding elements.

## 📖 How to Use
1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Select a tool from the hub and start simulating!

## 🤝 Connectivity
Feel free to connect with me on **LinkedIn** to discuss reliability engineering and physics-of-failure!

---
*Created with ❤️ by Engineer Lam*
