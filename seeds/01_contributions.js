exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('contributions').del()
    .then(() => {
      // Inserts seed entries
      return knex('contributions').insert(
          [
            {
            id:1,
            fName:"Phillip",
            lName:"Borgenicht",
            email:"pborgenicht@gmail.com",
          },
          {
          id:2,
          fName:"Dustin",
          lName:"Huth",
          email:"dhuth@gmail.com",
          },
          {
          id:3,
          fName:"Seth",
          lName:"Brown",
          email:"sbrown@gmail.com",
          },
          {
          id:4,
          fName:"Kevin",
          lName:"Ziechmann",
          email:"kziechmann@gmail.com",
        },
        {
        id:5,
        fName:"Jake",
        lName:"Mosher",
        email:"jmosher@gmail.com",
        }

          ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('contributions_id_seq', (SELECT MAX(id) FROM contributions))")
    })
}