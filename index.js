import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

const port = 3000;
const app = express();

function sendMail(contactDetails){
    dotenv.config();
    
    const senderName = contactDetails.name;
    const fromEmail = contactDetails.email;
    const subject = contactDetails.subject;
    const message = contactDetails.message;

    const myEmail = process.env.MY_EMAIL;
    const myPassword = process.env.MY_PASSWORD;

    console.log(myEmail, myPassword);

    var messageToSend = `Mail sent by ${senderName}.\n
                        Email address: ${fromEmail}\n
                        Message: ${message}`;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: myPassword
        }
    });

    let mailOptions = {
        from: myEmail,
        to: myEmail,
        subject: subject,
        text: messageToSend
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });    
}

var blogPost = [
    {
      name: "John Doe",
      passkey: "pass123",
      date: "2/04/2024",
      title: "The Art of Cooking",
      description: "Explore the culinary world with these delicious recipes.",
      image: "https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `Cooking is not just about preparing food; it's an art form that allows us to express creativity and passion in the kitchen. Whether you're a novice or an experienced chef, there's always something new to learn and experiment with in the world of cooking.One of the fundamental aspects of cooking is understanding ingredients and flavors. Each ingredient contributes its unique taste and texture to a dish, and mastering the art of balancing these flavors is essential for creating harmonious meals. From savory to sweet, the possibilities are endless when it comes to combining ingredients to create mouthwatering dishes.Another crucial element of cooking is technique. Whether it's sautéing, roasting, baking, or grilling, each cooking method requires precision and attention to detail to achieve the desired results. Knowing when to apply heat, how to season properly, and when to add ingredients are all skills that can elevate your cooking to the next level.Beyond the technical aspects, cooking is also a deeply personal and cultural experience. Recipes passed down through generations, traditional cooking methods, and regional ingredients all play a role in shaping our culinary identities. Exploring different cuisines allows us to connect with other cultures and broaden our culinary horizons.In addition to being a creative outlet, cooking also has numerous health benefits. By preparing meals at home using fresh, wholesome ingredients, we can take control of our diets and make healthier choices. Cooking can also be a therapeutic activity, reducing stress and promoting mindfulness as we focus on the task at hand.Whether you're whipping up a quick weeknight dinner or preparing an elaborate feast for a special occasion, cooking is an enriching and rewarding experience. So roll up your sleeves, sharpen your knives, and let your culinary journey begin!`
    },
    {
      name: "Jane Smith",
      passkey: "pass456",
      date: "2/04/2024",
      title: "Discovering Nature's Wonders",
      description: "Embark on a journey through breathtaking landscapes and fascinating wildlife.",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `Nature has a way of captivating us with its beauty and wonder. From towering mountains to lush forests, tranquil lakes to roaring waterfalls, the diversity of landscapes on our planet is truly awe-inspiring. But beyond the stunning scenery, nature is also home to a vast array of fascinating wildlife, each species uniquely adapted to its environment.One of the most remarkable aspects of nature is its ability to inspire and rejuvenate us. Spending time outdoors, whether hiking through forests, strolling along beaches, or simply sitting beneath a tree, can have profound effects on our mental and physical well-being. The sights, sounds, and smells of nature awaken our senses and remind us of the interconnectedness of all living things.Exploring nature also provides us with opportunities for adventure and discovery. Whether tracking wildlife through dense jungles, birdwatching in remote wetlands, or camping beneath starlit skies, there's always something new and exciting to experience in the great outdoors. And with each new discovery comes a deeper appreciation for the intricate web of life that sustains our planet.But perhaps the most important lesson that nature teaches us is the importance of conservation and stewardship. As human activities continue to impact the environment, it's more crucial than ever that we work together to protect and preserve the natural world for future generations. Whether through sustainable practices, habitat restoration, or advocacy efforts, each of us has a role to play in ensuring that nature's wonders endure.So let's heed the call of the wild and embark on a journey of discovery and appreciation for the natural world. Whether we're scaling mountain peaks, diving into crystal-clear waters, or simply marveling at the beauty of a blooming flower, there's no shortage of wonders waiting to be explored.`
    },
    {
      name: "David Brown",
      passkey: "pass789",
      date: "2/04/2024",
      title: "Exploring the Cosmos",
      description: "Unravel the mysteries of the universe and journey to the far reaches of space.",
      image: "https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `The cosmos has long captivated the human imagination with its vastness and complexity. From the dazzling display of stars in the night sky to the enigmatic depths of black holes, the universe holds countless mysteries waiting to be unraveled. Through the lens of science and exploration, we have embarked on a journey to understand our place in the cosmos and unlock the secrets of the universe.One of the most profound discoveries in our exploration of the cosmos is the sheer scale of the universe. With billions of galaxies each containing billions of stars, the cosmos is truly a mind-boggling expanse. And yet, despite its immense size, the universe is also intricately connected, with galaxies bound together by gravity and cosmic forces shaping the evolution of celestial objects.But the cosmos is not just a passive backdrop against which we exist; it is also a dynamic and ever-changing entity. From the birth of stars in stellar nurseries to the violent explosions of supernovae, the universe is a theater of constant motion and transformation. By studying these cosmic phenomena, scientists gain insights into the fundamental laws of nature and the origins of the universe itself.Perhaps one of the most awe-inspiring aspects of the cosmos is the possibility of life beyond our own planet. With the discovery of thousands of exoplanets orbiting distant stars, the search for extraterrestrial life has become one of the most exciting frontiers in modern science. Whether microbial life on Mars or intelligent civilizations in distant galaxies, the prospect of finding life elsewhere in the universe fuels our curiosity and imagination.As we continue to push the boundaries of our knowledge and technology, the cosmos remains an endless source of inspiration and wonder. Whether peering through telescopes to glimpse distant galaxies or sending spacecraft to explore the outer reaches of our solar system, humanity's quest to unravel the mysteries of the universe is a testament to our insatiable curiosity and boundless spirit of exploration.`
    },
    {
      name: "Emily Johnson",
      passkey: "passabc",
      date: "2/04/2024",
      title: "The Power of Mindfulness",
      description: "Discover the transformative benefits of mindfulness meditation.",
      image: "https://images.pexels.com/photos/204649/pexels-photo-204649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `In today's fast-paced world, mindfulness has emerged as a powerful tool for reducing stress, improving focus, and enhancing overall well-being. Rooted in ancient contemplative traditions, mindfulness meditation offers a simple yet profound way to cultivate present-moment awareness and deepen our connection to ourselves and the world around us.At its core, mindfulness is about paying attention to the present moment with openness, curiosity, and acceptance. By observing our thoughts, feelings, and sensations without judgment, we can break free from the grip of automatic pilot and become more attuned to our inner experiences. This heightened awareness allows us to respond to life's challenges with greater clarity and resilience.One of the key benefits of mindfulness meditation is its ability to reduce stress and promote relaxation. By bringing our attention to the breath or other anchor points, we can create a sense of calm and stability even in the midst of chaos. Over time, regular practice can help rewire the brain, strengthening neural pathways associated with emotional regulation and stress resilience.But mindfulness is not just about stress reduction; it's also about cultivating a deeper sense of presence and connection in our lives. By slowing down and savoring each moment, we can appreciate the richness and beauty of everyday experiences, from the taste of a delicious meal to the warmth of the sun on our skin. This sense of gratitude and wonder can bring greater fulfillment and joy to our lives.In addition to its individual benefits, mindfulness also has the power to transform our relationships and communities. By practicing mindful listening and communication, we can foster deeper connections and understanding with others. And by cultivating compassion and empathy, we can create a more harmonious and compassionate world for all beings.So whether you're new to mindfulness or have been practicing for years, the journey of self-discovery and transformation that it offers is endless. By bringing mindful awareness to every aspect of our lives, we can tap into our inner reservoirs of wisdom and compassion, leading to greater happiness, resilience, and fulfillment.`
    },
    {
      name: "Michael Williams",
      passkey: "passxyz",
      date: "2/04/2024",
      title: "The Joy of Traveling",
      description: "Embark on unforgettable adventures and discover new cultures.",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `Traveling is one of life's greatest pleasures, offering the opportunity to explore new places, meet interesting people, and create lasting memories. Whether embarking on a solo journey of self-discovery or sharing adventures with loved ones, the joy of traveling transcends boundaries and enriches our lives in countless ways.One of the most exciting aspects of traveling is the sense of adventure and discovery that it brings. From wandering through ancient ruins to trekking through remote wilderness, every destination offers its own unique experiences and surprises. Whether marveling at iconic landmarks or stumbling upon hidden gems off the beaten path, each moment spent traveling is an opportunity for exploration and growth.But travel is not just about sightseeing; it's also about immersing oneself in new cultures and ways of life. Whether sampling exotic cuisines, learning traditional crafts, or participating in local festivals, travel opens our eyes to the diversity and richness of the world. Through these cultural exchanges, we gain a deeper understanding and appreciation for the interconnectedness of humanity.Traveling also has the power to broaden our perspectives and challenge our preconceptions. By stepping outside of our comfort zones and encountering people from different backgrounds, we are forced to confront our own biases and assumptions. This exposure to new ideas and perspectives can foster empathy, tolerance, and a greater sense of global citizenship.But perhaps the most rewarding aspect of traveling is the connections we make along the way. Whether bonding with fellow travelers over shared experiences or forming friendships with locals in far-flung destinations, the relationships forged through travel have a way of enriching our lives in ways we never imagined. These connections remind us that, despite our differences, we are all part of a larger global community.So whether you're embarking on a grand adventure or simply exploring your own backyard, may your travels be filled with wonder, joy, and endless possibilities. For in the journey of traveling, we not only discover the world around us but also the depths of our own souls.`
    }
];

// middleware -> to use static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// route -> "/"
app.get("/", (req, res) => {
    res.render("pages/index.ejs", {blogArray: blogPost});
});

// route -> "/blog/:blogNum"
app.get(`/blog/:blogNum`, (req, res) => {
    var blogNum = req.params.blogNum;
    res.render("partials/blog.ejs", {blog: blogPost[blogNum], index: blogNum});
});

// route -> "/read"
app.get("/read", (req, res) => {
    res.render("pages/blog_page.ejs", {blogArray: blogPost});
});

// route -> "/create_blog"
app.get("/create_blog", (req, res) => {
    res.render("pages/create_blog.ejs");
});

app.post("/create_blog", (req, res) => {
    var blogObj = req.body;
    console.log(blogObj);
    blogPost.unshift(blogObj);
    res.render("partials/post-creation-success.ejs");
});

// route -> "/blog/:blogNum/edit" Edit Blog
app.get(`/blog/:blogNum/edit`, (req, res) => {
    var blogNum = req.params.blogNum;
    res.render("partials/blog-edit-auth.ejs", {index: blogNum});
});

app.post(`/blog/:blogNum/edit`, (req, res) => {
    var blogNum = req.params.blogNum;
    var enteredPassKey = req.body["passkey"];
    
    if (enteredPassKey == blogPost[blogNum]["passkey"]){
        console.log("Authenticaltion successful.");
        res.render("partials/edit_blog.ejs", {oldBlog: blogPost[blogNum], index: blogNum});
    }else {
        console.log("The passkey doesn't match");
        res.render("partials/blog-edit-auth.ejs", {sentence: "Authentication Failed. Try re-entering the passkey", index: blogNum});
    }
});

// This is where you actually modify the blog
app.post(`/blog/:blogNum/allow-changes`, (req, res) => {
    var blogNum = req.params.blogNum;
    var modBlog = req.body;
    blogPost[blogNum] = modBlog;
    res.render("partials/blog-edit-successful.ejs");
});

// route -> "/blog/:blogNum/delete" Blog Deletion
app.get(`/blog/:blogNum/delete`, (req, res) => {
    var blogNum = req.params.blogNum;
    res.render("partials/blog-delete-auth.ejs", {index: blogNum});
});

app.post(`/blog/:blogNum/delete`, (req, res) => {
    var blogNum = req.params.blogNum;
    var enteredPassKey = req.body["passkey"];
    
    if (enteredPassKey == blogPost[blogNum]["passkey"]){
        console.log(`index for the blog to be removed: ${blogNum}`);
        blogPost.splice(blogNum, 1);
        console.log("Deletion successful.");
        res.render("partials/blog-deletion-successful.ejs")
    }else {
        console.log("The passkey doesn't match");
        res.render("partials/blog-delete-auth.ejs", {sentence: "Authentication Failed. Try re-entering the passkey", index: blogNum});
    }
});

// route -> "/about"
app.get("/about", (req, res) => {
    res.render("pages/about.ejs");
});

app.post("/submit", (req, res) => {
    sendMail(req.body);
    res.render("partials/email-sent-success.ejs");
});

// Listening...
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
