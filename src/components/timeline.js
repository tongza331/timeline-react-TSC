import React from 'react';
import timelineData from '../data';
import TimelineItem from './timelineItem';

const Timeline = () => timelineData.length > 0 && (
    <div className="timeline-container">
        {timelineData.map((data, index) => (
            <TimelineItem data={data} key={index} />
        ))}
    </div>
)

export default Timeline;
