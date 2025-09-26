import React from "react";
import "./EventList.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Community Food Drive - Winter Relief",
      status: "upcoming",
      date: "December 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Central Community Hall, Downtown Area",
      organizer: "Food Relief Team",
      description: "Join us for our largest winter food distribution event. We aim to provide warm meals and food packages to 500+ families in need during the cold season.",
      helpNeeded: [
        "20 volunteers for food packaging",
        "5 volunteers for registration desk",
        "3 cooks for meal preparation",
        "2 drivers for food pickup"
      ]
    },
    {
      id: 4,
      title: "Monthly Mobile Food Pantry",
      status: "upcoming",
      date: "December 1, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Various Neighborhoods (Route TBA)",
      organizer: "Mobile Outreach Team",
      description: "Our mobile pantry visits underserved neighborhoods to bring fresh groceries and essentials directly to families who need them most.",
      helpNeeded: [
        "2 drivers with valid licenses",
        "8 volunteers for distribution",
        "1 coordinator for route planning"
      ]
    },
    {
      id: 5,
      title: "New Year Community Kitchen",
      status: "upcoming",
      date: "December 31, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Community Center Main Hall",
      organizer: "Special Events Team",
      description: "Ring in the New Year with our community! Free dinner, entertainment, and celebration for all families. A warm, safe space to welcome 2025 together.",
      helpNeeded: [
        "4 volunteers for setup/cleanup",
        "2 entertainment coordinators",
        "6 serving volunteers",
        "1 sound system operator"
      ]
    },
    {
      id: 3,
      title: "Thanksgiving Community Feast",
      status: "completed",
      date: "November 23, 2024",
      time: "12:00 PM - 6:00 PM",
      location: "City Park Pavilion",
      organizer: "Holiday Events Committee",
      description: "Successfully served over 800 meals to community members. Thanks to all volunteers who made this event possible and helped create a memorable celebration.",
      helpNeeded: [
        "Served 800+ community members",
        "30 volunteers participated",
        "Local businesses provided donations",
        "Entertainment for families"
      ]
    },
    {
      id: 6,
      title: "Back to School Supply Drive",
      status: "completed",
      date: "August 15, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "School District Office",
      organizer: "Education Support Team",
      description: "Distributed school supplies to 300+ students preparing for the new academic year. Provided backpacks, notebooks, and essential supplies for success.",
      helpNeeded: [
        "300+ students received supplies",
        "50 volunteers helped distribute",
        "Local donors provided materials",
        "Schools partnerships established"
      ]
    },
    {
      id: 7,
      title: "Emergency Winter Clothing Drive",
      status: "completed",
      date: "October 20, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Downtown Community Center",
      organizer: "Clothing Relief Team",
      description: "Collected and distributed warm winter clothing to families in need. Jackets, blankets, and warm accessories were provided to help through cold months.",
      helpNeeded: [
        "200+ families received clothing",
        "25 volunteers sorted donations",
        "Community donated 1000+ items",
        "Partnership with local stores"
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'upcoming': return '📅';
      case 'completed': return '✅';
      default: return '📅';
    }
  };

  return (
    <section className="events-section">
      <div className="events-container">
        <h1 className="events-title">Our Community Events</h1>
        <p className="events-desc">
          Join us in making a difference! Here are our upcoming and past events where we bring communities together to help those in need.
        </p>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className={`event-card ${event.status}`}>
              <div className="event-header">
                <h3 className="event-title">{event.title}</h3>
                <span className={`event-status ${event.status}`}>
                  {getStatusIcon(event.status)} {event.status}
                </span>
              </div>

              <div className="event-details">
                <div className="event-detail">
                  <span className="event-icon">📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="event-detail">
                  <span className="event-icon">⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className="event-detail">
                  <span className="event-icon">📍</span>
                  <span>{event.location}</span>
                </div>
                <div className="event-detail">
                  <span className="event-icon">👥</span>
                  <span>{event.organizer}</span>
                </div>
              </div>

              <p className="event-description">{event.description}</p>

              <div className={`event-help-needed ${event.status}`}>
                <div className={`help-title ${event.status}`}>
                  {event.status === 'upcoming' ? 'Help Needed:' : 'Event Results:'}
                </div>
                <ul className={`help-list ${event.status}`}>
                  {event.helpNeeded.map((help, index) => (
                    <li key={index}>{help}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;