  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    // This is for mobile
    var tour = {
      id: "Neptune",
      steps: [
        {
          title: "Profile Picture",
          content: "This is the profile picture",
          target: document.querySelector("#upperContent img"),
          placement: "bottom"
        },
        {
          title: "Title",
          content: "This is the title of a page. Click back to go back",
          target: document.querySelector("#upperContent h1"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Button",
          content: "This is the button of a page. Click back to go back",
          target: document.querySelector("#upperContent a"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Another Heading",
          content: "This is the another heading of a page. Click back to go back",
          target: document.querySelector("#lowerContentLeft h2"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Documenation",
          content: "To read full documentation, click the link",
          target: document.querySelector("#documentation p"),
          placement: "bottom",
          showPrevButton:false
        },
      ]
    };
  }
  if (window.matchMedia('screen and (min-width: 768px)').matches) {
    // This is for Larger Screen
    var tour = {
      id: "Neptune",
      steps: [
        {
          title: "Profile Picture",
          content: "This is the profile picture",
          target: document.querySelector("#upperContent img"),
          placement: "right"
        },
        {
          title: "Title",
          content: "This is the title of a page. Click back to go back",
          target: document.querySelector("#upperContent h1"),
          placement: "top",
          showPrevButton:true
        },
        {
          title: "Button",
          content: "This is the button of a page. Click back to go back",
          target: document.querySelector("#upperContent a"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Another Heading",
          content: "This is the another heading of a page. Click back to go back",
          target: document.querySelector("#lowerContentLeft h2"),
          placement: "right",
          showPrevButton:true
        },
        {
          title: "Documenation",
          content: "To read full documentation, click the link",
          target: document.querySelector("#documentation p"),
          placement: "bottom",
          showPrevButton:false
        },
      ]
    };
  }
  // Start the tour!
  hopscotch.startTour(tour);