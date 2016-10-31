import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';

import styles from '../project/styles.module.css';
import { ProjectIntro, ProjectPage } from 'components/project';

export default class Ahm extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'ahm');

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} />
      </ProjectPage>
    );
  }
}
