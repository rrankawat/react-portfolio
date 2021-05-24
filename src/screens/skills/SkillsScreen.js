import React from 'react';
import { FaHtml5, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiMysql, SiMongodb } from 'react-icons/si';

import { Header, SkillItem } from '../../components';

const SkillsScreen = () => {
  return (
    <>
      <Header title={'My Skills'} />

      <section className="section">
        <div className="skills">
          <SkillItem title="HTML">
            <FaHtml5 size={60} />
          </SkillItem>
          <SkillItem title="CSS">
            <IoLogoCss3 size={60} />
          </SkillItem>
          <SkillItem title="Bootstrap">
            <FaBootstrap size={60} />
          </SkillItem>
          <SkillItem title="JavaScript">
            <SiJavascript size={60} />
          </SkillItem>
          <SkillItem title="React">
            <FaReact size={60} />
          </SkillItem>
          <SkillItem title="Node">
            <FaNodeJs size={60} />
          </SkillItem>
          <SkillItem title="SQL">
            <SiMysql size={60} />
          </SkillItem>
          <SkillItem title="NoSQL">
            <SiMongodb size={60} />
          </SkillItem>
        </div>
      </section>
    </>
  );
};

export default SkillsScreen;
