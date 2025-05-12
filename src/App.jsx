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
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className="content-container">
      <h2>Overview</h2>
      <p>
        Prostate cancer is one of the most common and lethal cancers among men, making its early detection critically important. Although ultrasound imaging offers greater accessibility and cost-effectiveness compared to MRI, traditional transrectal ultrasound (TRUS) methods suffer from low sensitivity, especially in detecting anteriorly located tumors.
      </p>
      <p>
        Ultrasound computed tomography (USCT) provides quantitative tissue characterization, but its clinical implementation faces significant challenges, particularly under anatomically constrained limited-angle acquisition conditions specific to prostate imaging.
      </p>
      <p>
        To address these unmet needs, we introduce <strong>OPENPROS</strong>, a large-scale benchmark dataset explicitly developed for limited-view prostate USCT. Our dataset includes over 280,000 paired samples of realistic 2D speed-of-sound (SOS) phantoms and corresponding ultrasound full-waveform data, generated from anatomically accurate 3D digital prostate models derived from real clinical MRI/CT scans and ex vivo ultrasound measurements, annotated by medical experts.
      </p>
      <p>
        Simulations are conducted under clinically realistic configurations using advanced finite-difference time-domain (FDTD) and Runge-Kutta acoustic wave solvers, both provided as open-source components.
      </p>
      <p>
        Through comprehensive baseline experiments, we demonstrate that state-of-the-art deep learning methods surpass traditional physics-based approaches in both inference efficiency and reconstruction accuracy. Nevertheless, current deep learning models still fall short of delivering clinically acceptable high-resolution images with sufficient accuracy.
      </p>
      <p>
        By publicly releasing <strong>OPENPROS</strong>, we aim to encourage the development of advanced machine learning algorithms capable of bridging this performance gap and producing clinically usable, high-resolution, and highly accurate prostate ultrasound images.
      </p>
      <img
        src={`${import.meta.env.BASE_URL}images/pipeline.png`}
        alt="OpenPros end-to-end pipeline."
        style={{ width: '100%', maxWidth: '1000px', borderRadius: '10px', marginTop: '20px' }}
      />
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
        <li>Available via: <a href="https://huggingface.co/datasets/ashynf/OpenPros">OpenPros.Dataset</a></li>
      </ul>
    </div>
  );
}

function Benchmarks() {
  return (
    <div className="content-container">
      <h2>Benchmarks</h2>
      <p>
        We benchmarked 5 methods: Beamforming, Physics-based FWI, InversionNet, VelocityGAN, and Vit-Inversion.
      </p>
      <table>
        <thead>
          <tr><th>Method</th><th>MAE</th><th>RMSE</th><th>SSIM</th><th>PCC</th></tr>
        </thead>
        <tbody>
          <tr><td>InversionNet</td><td>0.0621</td><td>0.1233</td><td>0.9565</td><td>0.9021</td></tr>
          <tr><td>VelocityGAN</td><td>0.0605</td><td>0.1210</td><td>0.9624</td><td>0.9113</td></tr>
          <tr><td>Vit-Inversion</td><td>0.0130</td><td>0.0583</td><td>0.9756</td><td>0.9698</td></tr>
        </tbody>
      </table>
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
      </Routes>
    </Router>
  );
}
