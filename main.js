window.onload = () => {
    setInterval(async () => {
        const resolve = await fetch(
            "https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=%7B%22id%22%3A%228372093019%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Afalse%2C%22first%22%3A12%2C%22after%22%3A%22QVFDd0VTb1hCZ2YzaGNPNlFKNU0ySU5zaUh4TkNrSWxrUHBfWUdSMl8xakptSnY0OFN2OVFGU0liUlBuNjZrdGRNZmxGY1JFTlRLekxIS182a3lOOXBBYw%3D%3D%22%7D"
        );
        const data = await resolve.json();
        const countToday = data.data.user.edge_follow.count + ""; //466
            
        const date = new Date();
        const weekday = date.getDate(); //6
        
        const content = document.querySelector(".content");
        const countSpan = document.createElement("span");
        countSpan.textContent =
            weekday + " " + "число" + " " + countToday + " " + "Подписок";
        content.appendChild(countSpan);
    }, 18000000);
};
