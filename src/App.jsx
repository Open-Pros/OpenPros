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
        <NavLink to="/code" className="nav-card">Code</NavLink>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="content-container">
      <h2>Overview</h2>

      <p>
        Prostate cancer is one of the most common and lethal cancers among men, making its early detection critically
        important. Ultrasound computed tomography (USCT) has emerged as an accessible and cost-effective method that
        reconstructs quantitative tissue parameters, which can serve as potential biomarkers for malignancy. However,
        current prostate USCT faces considerable barriers: limited-angle acquisitions due to anatomical constraints, tissue
        heterogeneity, proximity to organs and bony pelvic structures, and lengthy processing times. The lack of large-scale,
        anatomically precise datasets significantly hampers the development of high-quality, efficient, and generalizable
        methods. To address this gap, we introduce <strong>OPENPROS</strong>, the first large-scale benchmark dataset for
        limited-angle prostate USCT, designed to evaluate machine learning algorithms for inverse problems systematically.
        Our dataset includes over 280,000 paired samples of realistic 2D speed-of-sound (SOS) phantoms and corresponding
        ultrasound full-waveform data, generated from anatomically accurate 3D digital prostate models derived from 4 real
        clinical MRI/CT scans and 62 ex vivo prostate specimens with experimental ultrasound measurements, annotated by medical
        experts. Simulations are conducted under clinically realistic configurations using advanced finite-difference
        time-domain (FDTD) and Runge-Kutta acoustic wave solvers, both provided as open-source components. Through comprehensive
        benchmarking, we find that deep learning methods significantly outperform traditional physics-based algorithms in
        inference efficiency and reconstruction accuracy. However, our results also reveal that current machine learning
        methods fail to deliver clinically acceptable, high-resolution reconstructions, underscoring critical gaps in
        generalization, robustness, and uncertainty quantification. By publicly releasing <strong>OPENPROS</strong>, we provide
        the community with a rigorous benchmark that not only enables fair method comparison but also motivates new advances in
        physics-informed learning, foundation models for scientific imaging, and uncertainty-aware reconstruction, bridging the
        gap between academic ML research and real-world clinical deployment.
      </p>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img
          src={`${import.meta.env.BASE_URL}images/pipeline-v2.png`}
          alt="OpenPros end-to-end pipeline"
          style={{
            maxWidth: "1000px",
            width: "100%",
            borderRadius: "10px",
            display: "block",
            margin: "0 auto",
          }}
        />
        <div style={{ fontSize: "14px", color: "#555", marginTop: "10px" }}>
          <em>OpenPros end-to-end pipeline</em>
        </div>
      </div>
    </div>
  );
}

function Datasets() {
  return (
    <div className="content-container">
      <h2>Datasets</h2>
      <p>
        <strong>OPENPROS</strong> is a large-scale benchmark dataset specifically designed for limited-view prostate USCT.
        It includes <strong>280,000</strong> paired examples of realistic 2D speed-of-sound (SOS) phantoms and
        corresponding full-waveform ultrasound data.
      </p>

      <ul>
        <li><strong>Total Dataset Size:</strong> 6.8 TB</li>
        <li><strong>Training / Validation / Test Split:</strong> 224K / 28K / 28K</li>
        <li><strong>SOS Map Shape:</strong> (1140 × 1 × 401 × 161)</li>
        <li><strong>Ultrasound Waveform Shape:</strong> (1140 × 40 × 1000 × 161)</li>
        <li><strong>Acquisition:</strong> Simulated via FDTD solver with clinical probe placement (abdominal + transrectal)</li>
        <li><strong>Annotations:</strong> Anatomically accurate organ labels derived from expert-segmented CT/MRI and ex vivo scans</li>
        <li><strong>Realism:</strong> Tissue heterogeneity, bone, and probe geometry variability are modeled</li>
        <li><strong>Data Format:</strong> NumPy (.npy), named as <code>3_0&#123;i&#125;_P_&#123;Date&#125;_&#123;Category&#125;.npy</code></li>
        <li>
          <strong>Download Link:</strong>{" "}
          <a href="https://huggingface.co/datasets/ashynf/OpenPros" target="_blank" rel="noopener noreferrer">
            OpenPros.dataset
          </a>
        </li>
      </ul>

      <p>
        The dataset supports a wide range of research tasks including organ segmentation, lesion detection, and full
        waveform inversion under challenging limited-angle conditions.
      </p>
    </div>
  );
}

function Benchmarks() {
  return (
    <div className="content-container">
      <h2>Benchmarks</h2>

      <p>
        We evaluate five representative inversion methods on the OPENPROS dataset, covering both traditional
        physics-based pipelines and modern deep learning-based models:
      </p>

      <ul>
        <li><strong>Beamforming</strong>: Fast and widely used, but lacks quantitative accuracy under limited-view settings.</li>
        <li><strong>Physics-based FWI</strong>: A three-stage multi-frequency inversion pipeline solving the wave equation via iterative optimization. Good accuracy in simple cases but suffers from convergence instability and long runtime in complex anatomies.</li>
        <li><strong>InversionNet</strong>: A supervised CNN-based model that maps raw ultrasound waveform inputs to speed-of-sound (SOS) maps.</li>
        <li><strong>VelocityGAN</strong>: Builds on InversionNet with adversarial training and transfer learning to improve generalization.</li>
        <li><strong>ViT-Inversion</strong>: A Vision Transformer model that leverages long-range spatial dependencies for high-fidelity inversion results.</li>
      </ul>

      <p style={{ marginTop: "1.5rem" }}>
        <strong>Key Finding:</strong> Deep learning-based approaches <em>consistently outperform</em> physics-based methods
        in both accuracy and efficiency under limited-angle ultrasound conditions. Among all methods,{" "}
        <strong>ViT-Inversion</strong> achieves the best performance across all reported metrics.
      </p>

      <p style={{ fontSize: "14px", color: "#666" }}>
        <em>Metrics shown below are reported from our paper. ↓ Lower is better, ↑ Higher is better.</em>
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={thStyle}>Method</th>
            <th style={thStyle}>MAE ↓</th>
            <th style={thStyle}>RMSE ↓</th>
            <th style={thStyle}>SSIM ↑</th>
            <th style={thStyle}>PCC ↑</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>InversionNet</td>
            <td style={tdStyle}>0.0073</td>
            <td style={tdStyle}>0.0297</td>
            <td style={tdStyle}>0.9876</td>
            <td style={tdStyle}>0.9850</td>
          </tr>
          <tr>
            <td style={tdStyle}>VelocityGAN</td>
            <td style={tdStyle}>0.0605</td>
            <td style={tdStyle}>0.1210</td>
            <td style={tdStyle}>0.9624</td>
            <td style={tdStyle}>0.9113</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>ViT-Inversion</strong></td>
            <td style={tdStyle}><strong>0.0067</strong></td>
            <td style={tdStyle}><strong>0.0268</strong></td>
            <td style={tdStyle}><strong>0.9908</strong></td>
            <td style={tdStyle}><strong>0.9892</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Code() {
  return (
    <div className="content-container">
      <h2>Code</h2>
      <p>
        The benchmark code and reference implementations are available on GitHub:
      </p>
      <p>
        <a
          href="https://github.com/hanchenwang/OpenPros"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/hanchenwang/OpenPros
        </a>
      </p>
    </div>
  );
}

function Citation() {
  const bibtex = `@misc{wang2025openproslargescaledatasetlimited,
  title={OpenPros: A Large-Scale Dataset for Limited View Prostate Ultrasound Computed Tomography},
  author={Hanchen Wang and Yixuan Wu and Yinan Feng and Peng Jin and Shihang Feng and Yiming Mao and James Wiskin and Baris Turkbey and Peter A. Pinto and Bradford J. Wood and Songting Luo and Yinpeng Chen and Emad Boctor and Youzuo Lin},
  year={2025},
  eprint={2505.12261},
  archivePrefix={arXiv},
  primaryClass={physics.med-ph},
  url={https://arxiv.org/abs/2505.12261},
}`;

  return (
    <div className="content-container">
      <h2>Citation</h2>
      <p>If you find OpenPros useful, please cite:</p>

      <pre
        style={{
          background: "#f7f7f7",
          padding: "16px",
          borderRadius: "8px",
          overflowX: "auto",
          border: "1px solid #ddd",
          fontSize: "14px",
          lineHeight: "1.4",
        }}
      >
        {bibtex}
      </pre>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  textAlign: "center",
  fontWeight: "bold",
  border: "1px solid #ccc",
};

const tdStyle = {
  padding: "10px",
  textAlign: "center",
  border: "1px solid #ccc",
};

export default function App() {
  return (
    <div className="page-container">
      {/* basename 让 GitHub Pages 的子路径 /OpenPros/ 下路由正常 */}
      <Router basename={import.meta.env.BASE_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/benchmarks" element={<Benchmarks />} />
          <Route path="/citation" element={<Citation />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </Router>
    </div>
  );
}
