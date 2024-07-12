import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You cna discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, offically the Republic of Indonesia, is a couuntry in Southeast Asia and Oceania between the Indian and Pacific ocean. It consits of over 17,000 islands, including Sumatra, java, Sulawes, and parts of Borneo and New Guinea."
        />
         <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is Southeast Asian country occuoying parts of the Malay Peninsual and the island of Borne. It's known for its beaches, rainforests and mix od=f Mala, Chices, Indian and European cultural influnences."
        />
         <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, in Western Europe, encopasses medieval cities, alpine village and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and mountants like the Eiffl Tower."
        />
      </div>
    </div>
  );
}
export default Trip;
