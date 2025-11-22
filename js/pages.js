let data = [
  {
    id: "GD",
    items: [
      {
        title: "Brand Design",
        content:
          "We specialize in crafting unique and appealing brand identities that reflect your essence and uniqueness. This includes creating distinctive logos and defining colors that represent your brand.",
      },
      {
        title: "Motion Graphics",
        content:
          "Elevate your brand with dynamic and engaging motion graphics. We bring your content to life through animated visuals, adding a captivating dimension to your messaging.",
      },
      {
        title: "Logo Design",
        content:
          "Our expert team designs logos that serve as the visual cornerstone of your brand. We create memorable and versatile logos that leave a lasting impression on your audience.",
      },
      {
        title: "Social Media Designs",
        content:
          "Enhance your online presence with eye-catching social media designs. We tailor visuals for various platforms, ensuring consistency and resonance with your target audience.",
      },
      {
        title: "Printing and Packaging",
        content:
          "From business cards to packaging materials, we provide high-quality printing and packaging solutions. Elevate your brand image with professionally crafted printed materials.",
      },
      {
        title: "Company Profile Creation",
        content:
          "Let us help you showcase your company's strengths and accomplishments through a professionally crafted company profile. We highlight your key achievements and offerings to leave a lasting impression on potential clients.",
      },
      {
        title: "Visual Identity Creation",
        content:
          "We develop a cohesive visual identity for your brand, encompassing everything from logos to color schemes. This holistic approach ensures that your brand is recognized and remembered across various platforms and media.",
      },
    ],
  },
  {
    id: "DM",
    items: [
      {
        title: "Social Media Management",
        content:
          "Expertly handle campaign management, engage with messages and comments, and create compelling content. Develop comprehensive marketing plans, design visually appealing posts, and ensure timely and strategic publishing across social media platforms.",
      },
      {
        title: "SMS (Short Message Service)",
        content:
          "Utilize SMS for direct communication, notifications, and effective marketing messages. Harness the power of concise messaging to engage with your audience and convey important information promptly.",
      },
      {
        title: "Search Engine Marketing (SEM)",
        content:
          "Efficiently plan and execute paid advertising campaigns on major search engines. Leverage strategies such as Pay-Per-Click (PPC) to amplify online visibility and drive increased website traffic through targeted paid advertising.",
      },
      {
        title: "Search Engine Optimization (SEO)",
        content:
          "Optimize website content and structure to achieve higher search engine rankings. Conduct thorough keyword research, seamlessly integrate keywords, and implement both on-page and off-page SEO techniques. Elevate organic visibility, ensuring the website attracts relevant and targeted traffic.",
      },
      {
        title: "Google Advertising",
        content:
          "Create and manage impactful advertisements on Google platforms. Tailor campaigns to reach your target audience effectively, maximizing the potential of Google's advertising ecosystem for increased brand visibility and engagement.",
      },
    ],
  },
  {
    id: "OM",
    items: [
      {
        title: "Advertising Boards",
        content:
          "Design and produce impactful advertising boards that enhance the visibility and marketing of your brand. Whether for outdoor or indoor spaces, we provide designs that meet your needs and capture attention effectively.",
      },
      {
        title: "Marketing Plans",
        content:
          "Prepare meticulous marketing plans tailored to your strategic objectives. Through market analysis and target audience identification, we offer effective marketing strategies to boost your business success and increase brand visibility.",
      },
    ],
  },
  {
    id: "GS",
    items: [
      {
        title: "Google Maps",
        content:
          "We add your business or company to Google Maps to facilitate easy discovery.",
      },
      {
        title: "3D Photography",
        content:
          "We offer the capability of 3D photography to provide a unique experience in showcasing your work.",
      },
      {
        title: "Virtual Tours",
        content:
          "We can integrate virtual tours into your location on Google Maps, making it easier for people to familiarize themselves with your place on the map.",
      },
    ],
  },
  {
    id: "PR",
    items: [
      {
        title: "Media and Public Relations",
        content:
          "Engages with the media and organizes press releases to highlight events and achievements of the organization.",
      },
      {
        title: "Government Relations",
        content:
          "Handles interactions with government entities and contributes to maintaining a balance between the organization and governmental authorities.",
      },
      {
        title: "Internal Communication",
        content:
          "Focuses on enhancing communication within the organization among different departments and employees.",
      },
      {
        title: "Crisis Management",
        content:
          "Manages crisis responses and handles emergency situations to protect the reputation of the organization.",
      },
      {
        title: "International Communication",
        content:
          "If the organization operates internationally, there may be a specialized department managing relationships with international partners and audiences.",
      },
    ],
  },
  {
    id: "CM",
    items: [
      {
        title: "Celebrity Marketing",
        content:
          "Involves designing and executing marketing campaigns that leverage the influence of famous personalities to promote products or services.",
      },
      {
        title: "Contract and Agreement Management",
        content:
          "Manages negotiation processes and oversees the signing of contracts between the company and celebrities, ensuring compliance with agreed-upon terms.",
      },
      {
        title: "Celebrity Relations",
        content:
          "Focuses on building and enhancing relationships with celebrities, ensuring their satisfaction and understanding of the goals of marketing campaigns.",
      },
      {
        title: "Analysis and Evaluation",
        content:
          "Evaluates the effectiveness of celebrity marketing campaigns and analyzes performance to enhance future strategies.",
      },
      {
        title: "Media Coordination",
        content:
          "Manages interactions with the media and coordinates coverage of celebrity events and related activities.",
      },
    ],
  },
];

let pop1 = document.getElementById("pop1");
let pop2 = document.getElementById("pop2");
let mainCat = document.querySelectorAll(".mainPage");
let closeBtn = document.querySelectorAll(".close");
let itemsInner = document.querySelector(".itemsInner");
let sub = document.getElementById("sub");

function showItems(element) {
  let filterd = data.filter((e) => e.id === element.id);
  if (filterd.length !== 0) {
    itemsInner.innerHTML = "";
    for (let i = 0; i < filterd[0].items.length; i++) {
      itemsInner.innerHTML += `
      <div class="item opacity" style="animation: fadebtm 800ms alternate ${
        (i + 1) * 100
      }ms forwards;">
        <div class="itemHead">${i <= 9 ? "0" + (+i + 1) : i + 1}</div>
        <div class="content">
          <span>${filterd[0].items[i].title}</span>
          <p>${filterd[0].items[i].content}</p>
        </div>
      </div>
      `;
    }
    pop2.style.display = "flex";
  } else {
    window.location = "https://petra-ms.netlify.app/soon";
  }
}

mainCat.forEach((e) => {
  e.addEventListener("click", () => {
    pop1.style.display = "none";
    showItems(e);
  });
});
closeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    pop1.style.display = "none";
    pop2.style.display = "none";
  });
});

sub.addEventListener("click", () => {
  pop2.style.display = "none";
  pop1.style.display = "flex";
});
