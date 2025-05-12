import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import "./style.css";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="logo">
      <h1 className="vertical-navbar-logo">OPENPROS</h1>

      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-card">Home</NavLink>
        <NavLink to="/datasets" className="nav-card">Datasets</NavLink>
        <NavLink to="/benchmarks" className="nav-card">Benchmarks</NavLink>
        <NavLink to="/citation" className="nav-card">Citation</NavLink>
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className="content-container">
      <h2>Overview</h2>
      <p>
        Prostate cancer remains one of the most prevalent and lethal cancers among men. Early detection of prostate cancer has been shown to be critical, but an accurate and widely accessible approach is still an unmet need. Ultrasound imaging is used for routine diagnosis and biopsy guidance, yet its early detection is hindered by limitations in conventional transrectal ultrasound (TRUS) imaging.
      </p>
      <p>
        To address this gap, we introduce <strong>OPENPROS</strong>, the first large-scale synthetic benchmark dataset specifically designed for prostate ultrasound computed tomography (USCT). <strong>OPENPROS</strong> comprises over 280,000 pairs of anatomically realistic speed-of-sound (SOS) maps and corresponding ultrasound waveforms, generated through advanced finite-difference time-domain (FDTD) simulations.
      </p>
      <p>
        Derived from real clinical MRI/CT scans and ex vivo ultrasound measurements annotated by medical experts, our dataset accurately captures diverse prostate anatomies and wave propagation complexities without noise artifacts, making it ideal for methodological development and benchmarking.
      </p>
      <p>
        Baseline experiments highlight the dataset's utility by evaluating several state-of-the-art deep learning inversion methods—such as CNN-based architectures and Vision Transformers—demonstrating superior reconstruction accuracy and robustness compared to traditional full-waveform inversion under challenging limited-view scenarios.
      </p>
      <p>
        Both the dataset and associated simulation tools are fully open-sourced, facilitating reproducibility and future innovations in medical ultrasound imaging.
      </p>
    </div>
  );
}


function Datasets() {
  return (
    <div className="content-container">
      <h2>Datasets</h2>
      <p>
        <strong>OPENPROS</strong> offers 6.8 TB of data with 224K training, 28K validation, and 28K test samples. Each sample includes ultrasound waveform data and a corresponding 2D SOS map.
      </p>
      <ul>
        <li>Ultrasound Data Shape: (1140 × 40 × 1000 × 161)</li>
        <li>SOS Map Shape: (1140 × 1 × 401 × 161)</li>
        <li>Available via: <a href="https://open-pros.github.io/">open-pros.github.io</a></li>
      </ul>
    </div>
  );
}

function Benchmarks() {
  return (
    <div className="content-container">
      <h2>Benchmarks</h2>
      <p>
        We benchmarked 5 methods: Beamforming, Physics-based FWI, InversionNet, VelocityGAN, and VisionTransformer.
      </p>
      <table>
        <thead>
          <tr><th>Method</th><th>MAE</th><th>RMSE</th><th>SSIM</th><th>PCC</th></tr>
        </thead>
        <tbody>
          <tr><td>InversionNet</td><td>0.0621</td><td>0.1233</td><td>0.9565</td><td>0.9021</td></tr>
          <tr><td>VelocityGAN</td><td>0.0605</td><td>0.1210</td><td>0.9624</td><td>0.9113</td></tr>
          <tr><td>VisionTransformer</td><td>0.0597</td><td>0.1198</td><td>0.9607</td><td>0.9095</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function Citation() {
  return (
    <div className="content-container">
      <h2>Citation</h2>
      <p>
        If you use <strong>OPENPROS</strong> in your work, please cite:
      </p>
      <pre>
      {`@misc{feng2023openpros,
  title={OPENPROS: A Large-Scale Dataset for Limited View Prostate Ultrasound Computed Tomography},
  author={Shihang Feng et al.},
  year={2023},
  eprint={2306.12386},
  archivePrefix={arXiv},
  primaryClass={physics.geo-ph}
}`}
      </pre>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/benchmarks" element={<Benchmarks />} />
        <Route path="/citation" element={<Citation />} />
      </Routes>
    </Router>
  );
}
