import React, { useState, useEffect } from 'react';
import { getEvents } from '../../firebase/eventService';
import './EventsList.css';

const ReadOnlyEventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const eventsData = await getEvents();
      setEvents(eventsData);
      setError(null);
    } catch (err) {
      setError('Failed to load events');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const dateObj = date.toDate ? date.toDate() : new Date(date);
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isEventFinished = (date, endTime) => {
    if (!date || !endTime) return false;
    const dateObj = date.toDate ? date.toDate() : new Date(date);
    const [hours, minutes] = endTime.split(':');
    const endDateTime = new Date(dateObj);
    endDateTime.setHours(parseInt(hours), parseInt(minutes));
    return endDateTime < new Date();
  };

  const sortEvents = (events) => {
    return events.sort((a, b) => {
      const aDate = a.date.toDate ? a.date.toDate() : new Date(a.date);
      const bDate = b.date.toDate ? b.date.toDate() : new Date(b.date);
      return aDate - bDate;
    });
  };

  if (loading && events.length === 0) {
    return <div className="events-loading">Loading events...</div>;
  }

  const upcomingEvents = events.filter(event => !isEventFinished(event.date, event.endTime));
  const finishedEvents = events.filter(event => isEventFinished(event.date, event.endTime));
  const sortedUpcomingEvents = sortEvents(upcomingEvents);
  const sortedFinishedEvents = sortEvents(finishedEvents);

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Community Events</h1>
      </div>

      {error && <div className="events-error">{error}</div>}

      <div className="events-section">
        <h2>Upcoming Events</h2>
        {sortedUpcomingEvents.length === 0 ? (
          <div className="no-events">
            <p>No upcoming events. Check back later for new events!</p>
          </div>
        ) : (
          <div className="events-grid">
            {sortedUpcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                {event.imageUrl ? (
                  <div className="event-image" style={{ backgroundImage: `url(${event.imageUrl})` }}></div>
                ) : (
                  <div className="event-image event-image-placeholder"></div>
                )}
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{formatDate(event.date)}</p>
                  <p className="event-time">{event.time} - {event.endTime}</p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <p className="event-organizer">Organized by: {event.organizer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="events-section">
        <h2>Past Events</h2>
        {sortedFinishedEvents.length === 0 ? (
          <div className="no-events">
            <p>No past events to display.</p>
          </div>
        ) : (
          <div className="events-grid">
            {sortedFinishedEvents.map(event => (
              <div key={event.id} className="event-card finished-event">
                {event.imageUrl ? (
                  <div className="event-image" style={{ backgroundImage: `url(${event.imageUrl})` }}></div>
                ) : (
                  <div className="event-image event-image-placeholder"></div>
                )}
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{formatDate(event.date)}</p>
                  <p className="event-time">{event.time} - {event.endTime}</p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <p className="event-organizer">Organized by: {event.organizer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadOnlyEventsList;
