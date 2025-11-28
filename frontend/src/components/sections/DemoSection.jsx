import React, { useState } from 'react';
import { FileVideo, Image, FileAudio, File, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { demoData } from '../../mockData';
import '../../styles/DemoSection.css';

const typeIconMap = {
  video: FileVideo,
  image: Image,
  audio: FileAudio,
  document: File
};

const statusConfig = {
  'Verified': { color: '#00FFD1', icon: CheckCircle },
  'Manipulated': { color: '#FF6B6B', icon: AlertTriangle },
  'Under Review': { color: '#FFB800', icon: Clock }
};

const DemoSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className="demo-section" id="demo">
      <div className="section-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">See VeriHub in Action</h2>
          <p className="section-subtitle">
            Real-time verification dashboard with AI-powered analysis
          </p>
        </div>

        <div className="demo-container animate-on-scroll">
          <div className="demo-frame">
            {/* Dashboard Header */}
            <div className="demo-header">
              <div className="demo-header-left">
                <h3 className="demo-title">Verification Dashboard</h3>
                <span className="demo-status">Live</span>
              </div>
              <div className="demo-stats-mini">
                <div className="stat-mini">
                  <span className="stat-mini-label">Accuracy</span>
                  <span className="stat-mini-value">{demoData.stats.accuracy}%</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-label">Avg Time</span>
                  <span className="stat-mini-value">{demoData.stats.avgProcessTime}</span>
                </div>
              </div>
            </div>

            {/* Verification Table */}
            <div className="demo-table">
              <div className="table-header">
                <div className="th th-id">ID</div>
                <div className="th th-file">File</div>
                <div className="th th-status">Status</div>
                <div className="th th-confidence">Confidence</div>
                <div className="th th-time">Time</div>
              </div>

              <div className="table-body">
                {demoData.recentVerifications.map((item, index) => {
                  const TypeIcon = typeIconMap[item.type];
                  const statusInfo = statusConfig[item.status];
                  const StatusIcon = statusInfo?.icon;

                  return (
                    <div 
                      key={item.id} 
                      className={`table-row ${hoveredRow === index ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="td td-id">{item.id}</div>
                      <div className="td td-file">
                        <TypeIcon size={16} className="file-icon" />
                        <span className="file-name">{item.filename}</span>
                      </div>
                      <div className="td td-status">
                        <span 
                          className="status-badge" 
                          style={{ 
                            borderColor: statusInfo?.color,
                            color: statusInfo?.color 
                          }}
                        >
                          {StatusIcon && <StatusIcon size={14} />}
                          {item.status}
                        </span>
                      </div>
                      <div className="td td-confidence">
                        {item.confidence ? (
                          <div className="confidence-wrapper">
                            <div className="confidence-bar">
                              <div 
                                className="confidence-fill" 
                                style={{ 
                                  width: `${item.confidence}%`,
                                  background: item.confidence > 90 ? '#00FFD1' : item.confidence > 70 ? '#FFB800' : '#FF6B6B'
                                }}
                              ></div>
                            </div>
                            <span className="confidence-value">{item.confidence}%</span>
                          </div>
                        ) : (
                          <span className="confidence-na">—</span>
                        )}
                      </div>
                      <div className="td td-time">{item.timestamp}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating effect elements */}
            <div className="demo-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;