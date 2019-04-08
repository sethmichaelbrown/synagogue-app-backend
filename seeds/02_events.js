exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(() => {
      // Inserts seed entries
      return knex('events').insert(
        [
          {
            id: 1,
            title: "Phillip's Bar Mitzvah",
            description: "Come join us as we celebrate Phillip and his wonderful accomplishment. This event will be held in the main room.",
            date: "04/15/2019",
          },
          {
            id: 2,
            title: "Dustin & Laura's Wedding",
            description: "Come join us as we celebrate Dustin & Laura's union. This event will be held in the main room.",
            date: "05/15/2019",
          },
          {
            id: 3,
            title: "Seth's Bar Mitzvah",
            description: "Come join us as we celebrate Seth and his wonderful accomplishment. This event will be held in the main room.",
            date: "06/15/2019",
          },
          {
            id: 4,
            title: "Kevin's Bar Mitzvah",
            description: "Come join us as we celebrate Kevin and his wonderful accomplishment. This event will be held in the main room.",
            date: "07/15/2019",
          },
          {
            id: 5,
            title: "Jake's Bar Mitzvah",
            description: "Come join us as we celebrate Jake and his wonderful accomplishment. This event will be held in the main room.",
            date: "08/15/2019",
          }

        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events))")
    })
}