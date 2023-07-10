import { ref } from "vue";

export default {
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);

    const getSlideText = () => {
      switch (slide.value) {
        case 1:
          return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corporis perferendis, earum cupiditate nobis ullam excepturi corrupti nesciunt autem rerum odit esse! Impedit sed consectetur cumque odio est dicta maiores.";
        case 2:
          return "Quo repellendus, quas esse saepe veritatis cum reprehenderit magnam eum delectus quae nemo quasi est velit! Quidem porro reprehenderit fugiat necessitatibus iste!";
        case 3:
          return "Some different text for the third slide.";
        default:
          return "";
      }
    };

    return {
      slide,
      autoplay,

      getSlideText,
    };
  },
  data() {
    return {
      navbtns: ["home", "about me", "socials", "experience"],
    };
  },
  methods: {
    handleNavButtonClick(button) {
      console.log("Button clicked:", button);
      // Add your logic here to navigate to the desired destination based on the selected button
      if (button === "home") {
        this.$router.push("/");
      } else if (button === "about me") {
        this.$router.push("/about-me");
      } else if (button === "socials") {
        // Navigate to the 3D Art page
        this.$router.push("/social-media");
      } else if (button === "experience") {
        // Navigate to the 2D Art page
        this.$router.push("/experience");
      }
    },
  },
};
