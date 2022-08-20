var movie11 = {
  Title: "Top Gun: Maverick",
  Description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
  Genre: {
    Name: "Action",
    Description: "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats."
  },
  Director: {
    Name: "Joseph Kosinski",
    Born: "May 3, 1974 in Marshalltown, Iowa, USA",
    BirthName: "Joseph Kosinski"
    Bio: "Joseph Kosinski is a director whose uncompromising style has quickly made a mark in the filmmaking zeitgeist. His feature film debut, "Tron: Legacy" for Walt Disney Studios, grossed over $400 million worldwide and was nominated for several awards, including an Academy Award for Sound Editing and a Grammy for the score by Daft Punk.",
  },
  ImageURL: "https://m.media-amazon.com/images/I/619z3KIhqbL._AC_SY606_.jpg",
  Year: "2022"
}

db.movies.insertOne(movie11)

var movie12 = {
  Title: "Interstellar",
  Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  Genre: {
    Name: "Sci-Fi",
    Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, interstellar travel or other technologies."
  },
  Director: {
    Name: "Christopher Nolan",
    Born: "July 30, 1970 in London, England, UK",
    BirthName: "Christopher Edward Nolan"
    Bio: "JBest known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
  },
  ImageURL: "https://m.media-amazon.com/images/I/51UYbs7t0sL._AC_.jpg",
  Year: "2014"
}

db.movies.insertOne(movie12)

