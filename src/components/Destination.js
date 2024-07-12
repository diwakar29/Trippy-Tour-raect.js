import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain5 from "../assets/5.jpg";
import Mountain8 from "../assets/8.jpg";
import Mountain13 from "../assets/13.jpg";
import Mountain14 from "../assets/14.jpg";
import Mountain19 from "../assets/19.jpg";
import Mountain20 from "../assets/20.jpg";
import Mountain23 from "../assets/23.jpg";
import Mountain24 from "../assets/24.jpg";
import Mountain25 from "../assets/25.jpg";
import Mountain26 from "../assets/26.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p> Tours give you the opportunity to see a lot, within a time framo</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon. Mt. Toal boasts a volcano
     inside a lake inside an island. If you fancy a closer look, the hike
     up to the crater is a mere 45 minutes, and is easy enough for
     beginners. Guides will assist you most of the way, and you'll see
     the peculiar environment found on an active volcano, including
     volcanic rocks and steam vents. The hike can be dusty and hot, so
     plan for an early morning trip, and then unwind with some bulalo
     before heading back home!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas "
        text="If you're looking for a hike that's a little more
     challenging but still good for a beginner
     mountaineer, check out Mt. Daguldul in San Juan,
     Batangas. You'll start your hike from the beach and pass through tropical forest different rock ormotions, and smalt steums there's a small store halfway up the troil where you can take a break and drink buko juice, ond though the İsummit itself may rt have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing well-deserved swim."
        img1={Mountain5}
        img2={Mountain8}
      />
      <DestinationData
        className="first-des"
        heading="An Adventure Ride to Leh from Manali"
        text="If you enjoy having unique and exciting experiences, our Culinary Ride Through Manali - Leh is the perfect choice for you. Whether traveling alone or with friends, this is something everyone will enjoy. Contact us today to reserve your Ride.."
        img1={Mountain13}
        img2={Mountain14}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Looking To Book A Holiday Package Bonfire Places"
        text="This year is full of long weekends. So if you’ve been dreaming of a bonfire night, it’s about time that you invite your buddies ‘cause we have compiled a list of places apt for a fiery fun filled night!,The weekend getaway offers a chance to plunge in outdoor activities and an amazing campfire night by the lake."
        img1={Mountain19}
        img2={Mountain20}
      />
      <DestinationData
        className="first-des"
        heading="River Rafting in Manali"
        text="River Rafting in Manali is one adrenaline-pumping reaction that draws adventure seekers from all over the country. A thrilling experience awaits you as you embark upon the meandering course of the Beas River. The stunning scenery flanked on both sides of the river is another spectacle to behold while you manoeuvre your raft along the calm waters.."
        img1={Mountain23}
        img2={Mountain24}
      />
      <DestinationData
        className="first-des-reverse-text"
        heading="Itinerary of Kedarnath Yatra"
        text="Kedarnath Yatra is a Hindu Temple dedicated to Lord Shiva and is situated in the Rudraprayag district of Uttarakhand. It is one of the most sacred temple of Lord Shiva and is open for a limited period of six months only due to extreme weather condition. The temple is not accessible by road and one has to trek a distance of 17 Km starting from Gauri Kund. 
            The temple was built by Pandavas and is one of the 12 Jyotirlingas, the holiest hindu shrines of Lord Shiva.

         Total Trip package of Kedarnath Yatra will be Rs. 11500 per person.
        Day 1: Haridwar to Guptakashi, 220 kms 9 hrs
        Pick up from Haridwar at 7am. 
        Drive to Guptakashi/Phata/Sitapur from Haridwar. Drive through the beautiful hill roads
        Arrival in Hotel by evening. Check in hotel and relax
        Dinner followed by Rest in the hotel
        Day 2: Guptakashi to Kedarnath
        Wake up Early and get ready for the Dham of the Lord Shiva i.e. Kedarnath also known as the home of The Lord Shiva.
        Take Shuttle Service from Sonprayag to Gaurikund and Start your trek thereafter
        18kms trek to Kedarnath temple. ( You Can also opt for Dolli, Pony, Pitthu and Helicopter on your own )
        Reach Kedarnath and one can do to Evening Darshanater taking some rest.
        Dinner and Overnight stay at Kedarnath.
        Day 3: Kedarnath to Guptkashi
        Wake up Early around 4a.m. and witness the Morning Darshan, at Morning you can go inside the GarbhaGraha and see the hump of the Bull.
        After Breakfast trek down from Kedarnath to Sitapur/ Guptkashi
        Reach in the Evening followed by Dinner and rest
        Day 4: Guptkashi to Haridwar, 220 Kms, 9 Hrs
        Wake up Early"
        img1={Mountain25}
        img2={Mountain26}
      />
    </div>
  );
};
export default Destination;
