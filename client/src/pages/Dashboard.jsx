import { Card, Title, Text, Tab, TabList, Grid } from "@tremor/react"
import { useState } from "react"
import { BellIcon } from "@heroicons/react/24/solid"

export default function Example() {
  const upcomingEvents = [
    {
      name: "Event 1",
      date: "2023-06-01",
      time: "18:00",
      location: "Venue A",
    },
    {
      name: "Event 2",
      date: "2023-06-10",
      time: "20:00",
      location: "Venue B",
    },
  ]

  const notifications = [
    "New registration for Event 1",
    "Event 2 tickets sold out",
  ]

  const tasks = [
    "Update Event 1 description",
    "Update Event 2 description",
    "Update Event 3 description",
    "Update Event 4 description",
    "Update Event 5 description",
    "Update Event 6 description",
    "Update Event 7 description",
    "Update Event 8 description",
    "Update Event 9 description",
    "Update Event 10 description",
  ]

  return (
    <main className="mx-4 w-full self-center">
      <Title className="ml-2 mt-2 self-start text-2xl">Dashboard</Title>
      <Grid numColsMd={2} numColsLg={3} className="mt-6 gap-6">
        <Card>
          <h2 className="mb-2 text-xl font-semibold">Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((event, index) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>{event.name}</strong> - {event.date} at {event.time} (
                  {event.location})
                </p>
              </li>
            ))}
          </ul>
        </Card>
        <Card></Card>
        <Card>
          <h2 className="mb-2 text-xl font-semibold">Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="mb-2 flex items-center">
                <BellIcon className="mr-2 h-5 w-5" />
                <p>{notification}</p>
              </li>
            ))}
          </ul>
        </Card>
      </Grid>
      <div className="mt-6">
        <Card className="h-96 overflow-scroll">
          <h2 className="mb-3 text-xl font-semibold">Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="mt-3 rounded bg-gray-200 p-2">
                {task}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  )
}
