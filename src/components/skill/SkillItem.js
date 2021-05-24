import React from 'react';

export const SkillItem = ({ children, title }) => {
  return (
    <div className="skills-item">
      {children}
      <span>{title}</span>
    </div>
  );
};
