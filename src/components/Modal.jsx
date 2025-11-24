import React from 'react';
import './Modal.css';

const Modal = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.trim() === '') return null;
      if (line.startsWith('## ')) {
        return <h3 key={index}>{line.substring(3)}</h3>;
      }
      if (line.startsWith('### ')) {
        return <h4 key={index}>{line.substring(4)}</h4>;
      }
      if (line.startsWith('- ')) {
        return <li key={index}>{line.substring(2)}</li>;
      }
      if (line === '---') {
        return <hr key={index} />;
      }
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
    });
  };

  const renderAsIsToBeContent = (content) => {
    const parts = content.split('### TO-BE');
    const asIsPart = parts[0].replace('### AS-IS', '').trim();
    const toBePart = parts.length > 1 ? parts[1].trim() : '';

    const renderPart = (partContent) => {
      return partContent.split('\n').filter(line => line.trim() !== '').map((line, index) => {
        if (line.startsWith('- ')) {
          return <li key={index}>{line.substring(2)}</li>;
        }
        return <li key={index}>{line}</li>;
      });
    };

    return (
      <div className="asis-tobe-container">
        <div className="asis-section">
          <h4>AS-IS</h4>
          <ul>{renderPart(asIsPart)}</ul>
        </div>
        <div className="tobe-section">
          <h4>TO-BE</h4>
          <ul>{renderPart(toBePart)}</ul>
        </div>
      </div>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          {project.period && <p><b>기간 : </b>{project.period}</p>}
          {project.team && <p><b>팀 구성 : </b>{project.team}</p>}
          <div className="detailed-description-content">
            {Array.isArray(project.detailedDescription)
              ? project.detailedDescription.map((section, index) => (
                  <div key={index} className="modal-section">
                    <h4>{section.title}</h4>
                    {section.content.includes('### AS-IS')
                      ? renderAsIsToBeContent(section.content)
                      : renderContent(section.content)}
                  </div>
                ))
              : renderContent(project.detailedDescription)}
          </div>
        </div>
        <div className="modal-footer">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
