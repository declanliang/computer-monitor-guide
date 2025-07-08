---
sidebar_position: 1
title: Sync Technologies Explained
description: Deep understanding of G-Sync, FreeSync and other variable refresh rate technologies
---

# Sync Technologies Explained

## 🎯 Why Do We Need Sync Technology?

### Problems with Traditional Displays

Without sync technology, displays refresh at a fixed frequency (e.g., 60Hz), while GPU frame rate output varies. This mismatch causes:

#### Screen Tearing
- **Phenomenon:** One frame displays images from different time points
- **Cause:** Display refreshes while GPU is outputting a new frame
- **Impact:** Obvious horizontal tear lines in the image

#### Side Effects of V-Sync
Traditional V-Sync solves tearing but brings new problems:
- **Increased Input Lag:** Frame buffering causes delay
- **Frame Rate Lock:** Cannot exceed display refresh rate
- **Stuttering:** Frame skipping when frame rate is below refresh rate

---

## 🔄 Variable Refresh Rate Technology Principle

### Core Concept
**Make the display's refresh rate follow the GPU's frame rate changes**

**Workflow:**
1. GPU finishes rendering a frame
2. Immediately notifies display to refresh
3. Display adjusts refresh timing
4. Eliminates tearing and stuttering

### Technical Advantages
- ✅ **Eliminates screen tearing**
- ✅ **Reduces input lag**
- ✅ **Smooth frame rate transitions**
- ✅ **Better gaming experience**

---

## 🎮 G-Sync Technology Explained

### G-Sync Original (Hardware Module)
**Technical Features:**
- Dedicated hardware module
- NVIDIA strict certification
- Best compatibility and stability

**Working Range:**
- Usually 30Hz to refresh rate maximum
- Automatically enables V-Sync when out of range

**Advantages:**
- Best compatibility
- Lowest latency
- Most complete functionality

**Disadvantages:**
- Expensive (+$30-60)
- Only supports NVIDIA GPUs

### G-Sync Compatible
**Technical Features:**
- Based on FreeSync technology
- Passes NVIDIA certification tests
- Lower cost

**Certification Standards:**
- No obvious flickering
- Color shift within acceptable range
- Input lag meets requirements

**Advantages:**
- Affordable price
- Performance close to G-Sync
- Many market choices

---

## 🔴 FreeSync Technology Explained

### FreeSync (VESA Adaptive-Sync)
**Technical Features:**
- Based on VESA standard
- No additional hardware required
- Open standard, low cost

**Tier Standards:**

#### FreeSync (Basic)
- Basic variable refresh rate functionality
- Minimum requirement: 48Hz range

#### FreeSync Premium
- **Requirement:** At least 120Hz refresh rate
- **LFC Support:** Low framerate compensation technology
- **HDR Support:** Optional

#### FreeSync Premium Pro
- **Requirement:** At least 120Hz + HDR400+
- **Low Latency:** Strict latency requirements
- **Color:** 99%+ sRGB coverage

### AMD GPU Exclusive Features
- **Enhanced Sync:** Optimization when exceeding refresh rate
- **Radeon Chill:** Dynamic frame rate control
- **Anti-Lag:** Reduces gaming latency

---

## ⚡ Technical Comparison Analysis

| Feature | G-Sync Hardware | G-Sync Compatible | FreeSync Premium |
|---------|----------------|-------------------|------------------|
| Hardware Cost | High | Medium | Low |
| Compatibility | NVIDIA exclusive | NVIDIA exclusive | AMD + some NVIDIA |
| Certification Standards | Strictest | Relatively strict | Relatively loose |
| Feature Completeness | Most complete | Close to complete | Basic features |
| Market Price | +$40-70 | +$15-30 | Basically no premium |
| Product Selection | Limited | More | Most |

---

## 🔧 Technical Details in Actual Usage

### LFC (Low Framerate Compensation)
**Problem:** How to handle when frame rate is below sync range minimum?

**Solution:**
- Automatically display the same frame multiple times
- Example: Display 20FPS twice to achieve 40Hz effect
- Maintains sync effect

### Handling Exceeding Maximum
**Situation:** Frame rate exceeds display maximum refresh rate

**G-Sync Handling:**
- Automatically enables V-Sync
- Locks at maximum refresh rate

**FreeSync Handling:**
- May have tearing
- Requires manual V-Sync activation

---

## 🎯 Purchase Recommendations

### NVIDIA GPU Users
1. **Sufficient Budget:** G-Sync hardware version
2. **Medium Budget:** G-Sync Compatible
3. **Limited Budget:** Consider FreeSync (new drivers support)

### AMD GPU Users
1. **First Choice:** FreeSync Premium/Pro
2. **Note:** Confirm specific sync range
3. **Avoid:** G-Sync hardware version (incompatible)

### Intel GPU Users
- **Support:** FreeSync technology
- **Recommendation:** Choose FreeSync certified products

---

## 🚫 Common Misconceptions and Issues

### ❌ "With Sync Technology, High Refresh Rate Isn't Needed"
**Reality:** Sync technology and high refresh rate are complementary
- Sync technology solves tearing and stuttering
- High refresh rate provides smoother experience

### ❌ "G-Sync Must Be Better Than FreeSync"
**Reality:** Depends on specific implementation
- High-end FreeSync products experience close to G-Sync
- Low-end FreeSync products do have gaps

### ❌ "Sync Technology Affects Frame Rate"
**Reality:** Doesn't reduce frame rate
- Only changes display timing
- May slightly increase latency (1-2ms)

---

## 🛠️ Purchase and Setup Recommendations

### Pre-purchase Checks
1. ✅ Confirm GPU brand and model
2. ✅ Check display's supported sync technology
3. ✅ Confirm sync working range
4. ✅ Consider budget and cost-effectiveness

### Setup Points
1. **Update Drivers:** Ensure latest GPU drivers
2. **Enable Sync:** Turn on in GPU control panel
3. **Turn Off V-Sync:** Disable vertical sync in games
4. **Test Effect:** Use testing software to verify

### Common Testing Tools
- **NVIDIA Pendulum Demo:** G-Sync effect demonstration
- **Blur Busters UFO Test:** Online testing tool
- **In-game Frame Rate Display:** Observe actual effects

**Next Section:** [HDR Technology](./hdr) - Understanding next-generation display technology 