//Use a free API from the internet & feed your app with live data

let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
response.then((ok) => {
    return ok.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (items in contests) {
        console.log(contests[items])
        ihtml += `
        
        <div class="card" style="width: 18rem;">
        <img src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[items].name}</h5>
          
          <p>Starts at: ${contests[items].start_time}
          </p>
          <p>Ends at: ${contests[items].end_time}
          </p> 
          <p>Duration: ${contests[items].duration}
          </p> 
          <p>status: ${contests[items].status}
          </p> 
          <p>In 24 Hours? : ${contests[items].in_24_hours}
          </p> 
          <p>Site: ${contests[items].site}
          </p> 
          <a target="_blank" href="${contests[items].url}" class="btn btn-danger">
          Join Contest</a>
          </a>
        </div>
        </div>
        `
        if (contests[items].site === "HackerRank") {
            hackerRankContest = contests[items];
        }
        if (contests[items].site === "HackerEarth") {
            hackerEarthContest = contests[items];
        }
        if (contests[items].site === "CodeChef") {
            codeChefContest = contests[items];
        }
    }
    cardContainer.innerHTML = ihtml
        // Display the HackerRank badge and link to the contest
        if (hackerRankContest) {
            badges_HackerRank.innerHTML = `
                <h4> Want to join HackerRank contest 
                    <a target="_blank" href="${hackerRankContest.url}" class="badge badge-secondary">Join now</a>
                </h4>
            `;
        }
        if (hackerEarthContest) {
            badges_HackerEarth.innerHTML = `
                <h4> Want to join HackerEarth contest 
                    <a target="_blank" href="${hackerEarthContest.url}" class="badge badge-secondary">Join now</a>
                </h4>
            `;
        }
        if (codeChefContest) {
            badges_CodeChef.innerHTML = `
                <h4> Want to join CodeChef contest 
                    <a target="_blank" href="${codeChefContest.url}" class="badge badge-secondary">Join now</a>
                </h4>
            `;
        }
})





