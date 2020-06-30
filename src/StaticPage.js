import React from 'react';
import DevideHeader from './common/DevideHeader';
import DynamicList from './common/DynamicList';

const LESSONS = [
  {
    title: 'Comunicate with props',
    description: 'props, components, child, ...',
    sub_lessons: [
      {title: 'BASIC', description: 'Comunicate with props.', path: '/session-3-components'},
      {title: 'ADVANCE', description: 'Use props children.', path: '/session-3-components-props-children'},
    ]
  },
  {
    title: 'Class Component with Seasons app',
    description: 'Learn about class Component',
    path: '/session-4-seasons'
  }
];

const StaticPage = () => {
  const showLesson = lesson => {
    if(lesson.sub_lessons) {
      return (
        <DynamicList lesson={lesson} isParent={true} key={lesson.title}>
          {
            lesson.sub_lessons.map(sub_lesson => showLesson(sub_lesson))
          }
        </DynamicList>
      )
    } else {
      return (
        <DynamicList lesson={lesson} isParent={false} key={lesson.title} />
      )
    }
  }

  return (
    <div className="ui container">
      <div className="ui list">
        <DevideHeader content="React demo list" />
        <div className="item">
          <i className="folder icon"></i>
          <div className="content">
            <div className="header">Demos</div>
            <div className="description">All React demos</div>
            <div className="list">
              {
                LESSONS.map(lession => showLesson(lession))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticPage;
