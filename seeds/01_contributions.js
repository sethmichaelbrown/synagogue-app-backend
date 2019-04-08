exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('contributions').del()
    .then(() => {
      // Inserts seed entries
      return knex('contributions').insert(
        [
          {
            id: 1,
            fName: "Phillip",
            lName: "Borgenicht",
            email: "pborgenicht@gmail.com",
            contribution: '18',
            eventId: 5
          },
          {
            id: 2,
            fName: "Dustin",
            lName: "Huth",
            email: "dhuth@gmail.com",
            contribution: '18',
            eventId: 4
          },
          {
            id: 3,
            fName: "Seth",
            lName: "Brown",
            email: "sbrown@gmail.com",
            contribution: '18',
            eventId: 3
          },
          {
            id: 4,
            fName: "Kevin",
            lName: "Ziechmann",
            email: "kziechmann@gmail.com",
            contribution: '18',
            eventId: 2
          },
          {
            id: 5,
            fName: "Jake",
            lName: "Mosher",
            email: "jmosher@gmail.com",
            contribution: '18',
            eventId: 1
          }

        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('contributions_id_seq', (SELECT MAX(id) FROM contributions))")
    })
}